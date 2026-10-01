import sourceDocument from "./legacy.html?raw";
import { RfqHandler } from "../components/rfq-handler";

function bodyMarkup(document: string) {
  const match = document.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  return (match?.[1] ?? document).replace(/<script[\s\S]*?<\/script>/gi, "");
}

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: bodyMarkup(sourceDocument) }} />
      <RfqHandler />
    </>
  );
}
