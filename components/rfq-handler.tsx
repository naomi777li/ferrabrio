"use client";

import { useEffect } from "react";

export function RfqHandler() {
  useEffect(() => {
    const form = document.querySelector<HTMLFormElement>("#quote-form");
    const status = document.querySelector<HTMLParagraphElement>("#form-status");
    const button = form?.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (!form || !status || !button) return;

    const family = new URLSearchParams(window.location.search).get("family");
    const familySelect = form.elements.namedItem("family");
    if (family && familySelect instanceof HTMLSelectElement) {
      const matchingOption = [...familySelect.options].some((option) => option.value === family);
      if (matchingOption) familySelect.value = family;
    }

    const productSection = document.querySelector("#products");
    const observer = productSection && "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            if (entries[0]?.isIntersecting) {
              window.gtag?.("event", "view_product_family", {
                item_list_name: "Industrial brush catalogue",
              });
              observer.disconnect();
            }
          },
          { threshold: 0.45 },
        )
      : null;
    if (productSection && observer) observer.observe(productSection);

    let formStarted = false;
    const trackFormStart = () => {
      if (formStarted) return;
      formStarted = true;
      window.gtag?.("event", "rfq_start", { form_name: "technical_rfq" });
    };
    form.addEventListener("input", trackFormStart);

    const productCtas = [...document.querySelectorAll<HTMLAnchorElement>("[data-product-family]")];
    const trackProductCta = (event: Event) => {
      const link = event.currentTarget as HTMLAnchorElement;
      window.gtag?.("event", "product_to_rfq", {
        product_family: link.dataset.productFamily,
      });
    };
    productCtas.forEach((link) => link.addEventListener("click", trackProductCta));

    const submit = () => {
      const productFamily = form.elements.namedItem("family");
      status.textContent = "Submitting your RFQ…";
      window.gtag?.("event", "rfq_submit", {
        form_name: "technical_rfq",
        status: "submitted",
        product_family: productFamily instanceof HTMLSelectElement ? productFamily.value : "Not supplied",
      });
    };

    form.addEventListener("submit", submit);
    return () => {
      form.removeEventListener("submit", submit);
      form.removeEventListener("input", trackFormStart);
      productCtas.forEach((link) => link.removeEventListener("click", trackProductCta));
      observer?.disconnect();
    };
  }, []);

  return null;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
