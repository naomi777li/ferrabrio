"use client";

import { useEffect } from "react";

type RfqResponse = { delivered?: boolean; error?: string };

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

    const submit = async (event: SubmitEvent) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const values = Object.fromEntries(new FormData(form).entries());
      const currentUrl = new URL(window.location.href);
      values.landing_page = currentUrl.href;
      values.referrer = document.referrer;
      values.utm_source = currentUrl.searchParams.get("utm_source") ?? "";
      values.utm_medium = currentUrl.searchParams.get("utm_medium") ?? "";
      values.utm_campaign = currentUrl.searchParams.get("utm_campaign") ?? "";
      const originalLabel = button.textContent;
      button.disabled = true;
      button.textContent = "Sending RFQ…";
      status.textContent = "Sending your request securely…";

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(values),
        });
        const result = (await response.json().catch(() => ({}))) as RfqResponse;
        if (!response.ok || !result.delivered) throw new Error(result.error ?? "Delivery failed");

        form.reset();
        status.textContent = "Thank you — your RFQ has been delivered to our sales team. We will review the technical details and reply by email.";
        const eventData = {
          form_name: "technical_rfq",
          status: "delivered",
          product_family: String(values.family ?? "Not supplied"),
        };
        window.gtag?.("event", "rfq_submit", eventData);
        window.gtag?.("event", "generate_rfq", eventData);
      } catch {
        status.textContent = "We could not deliver the RFQ just now. Please email info@ferrabrio.com and include your requirements.";
        window.gtag?.("event", "rfq_submit_error", { form_name: "technical_rfq" });
      } finally {
        button.disabled = false;
        button.textContent = originalLabel;
      }
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
