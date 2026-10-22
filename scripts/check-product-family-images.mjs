import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = await readFile(path.join(root, "app/products/page.tsx"), "utf8");
const families = source.match(/const families = \[([\s\S]*?)\n\];/);
if (!families) throw new Error("Could not locate product-family catalog in app/products/page.tsx");

const images = [...families[1].matchAll(/image: "([^"]+)"/g)].map(([, image]) => image);
if (images.length === 0) throw new Error("No product-family images found");

const duplicates = images.filter((image, index) => images.indexOf(image) !== index);
if (duplicates.length) throw new Error(`Product-family images must be unique: ${[...new Set(duplicates)].join(", ")}`);

for (const image of images) {
  await stat(path.join(root, "public", image.replace(/^\//, "")));
}

console.log(`Checked ${images.length} product-family visuals; all are distinct and present.`);
