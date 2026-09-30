"use client";

import { useEffect } from "react";

type RfqResponse = { delivered?: boolean; error?: string };

export function RfqHandler() {
  useEffect(() => {
    const form = document.querySelector<HTMLFormElement>("#quote-form");
    const status = document.querySelector<HTMLParagraphElement>("#form-status");
    const button = form?.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (!form || !status || !button) return;

    const submit = async (event: SubmitEvent) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const values = Object.fromEntries(new FormData(form).entries());
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
        window.gtag?.("event", "rfq_submit", { form_name: "technical_rfq", status: "delivered" });
      } catch {
        status.textContent = "We could not deliver the RFQ just now. Please email info@ferrabrio.com and include your requirements.";
        window.gtag?.("event", "rfq_submit_error", { form_name: "technical_rfq" });
      } finally {
        button.disabled = false;
        button.textContent = originalLabel;
      }
    };

    form.addEventListener("submit", submit);
    return () => form.removeEventListener("submit", submit);
  }, []);

  return null;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
