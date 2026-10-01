type Rfq = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  family?: unknown;
  requirements?: unknown;
  landing_page?: unknown;
  referrer?: unknown;
  utm_source?: unknown;
  utm_medium?: unknown;
  utm_campaign?: unknown;
  _honey?: unknown;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const text = (value: unknown, limit: number) =>
  typeof value === "string" ? value.trim().slice(0, limit) : "";

function response(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: { "cache-control": "no-store" },
  });
}

function isAllowedOrigin(origin: string | null) {
  if (!origin) return true;
  try {
    return /^(www\.)?ferrabrio\.com$/.test(new URL(origin).hostname);
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request.headers.get("origin"))) {
    return response({ delivered: false, error: "Invalid request origin" }, 403);
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return response({ delivered: false, error: "Invalid request format" }, 415);
  }

  let data: Rfq;
  try {
    data = (await request.json()) as Rfq;
  } catch {
    return response({ delivered: false, error: "Invalid request" }, 400);
  }

  // Quietly accept bot submissions without passing them to the sales inbox.
  if (text(data._honey, 120)) return response({ delivered: true });

  const name = text(data.name, 120);
  const email = text(data.email, 180).toLowerCase();
  const company = text(data.company, 160);
  const family = text(data.family, 120);
  const requirements = text(data.requirements, 5000);
  const landingPage = text(data.landing_page, 500);
  const referrer = text(data.referrer, 500);
  const utmSource = text(data.utm_source, 120);
  const utmMedium = text(data.utm_medium, 120);
  const utmCampaign = text(data.utm_campaign, 160);

  if (!name || !EMAIL.test(email) || !requirements) {
    return response({ delivered: false, error: "Please complete the required fields" }, 400);
  }

  const subject = `New industrial brush RFQ — ${name}${company ? ` (${company})` : ""}`;
  const message = [
    "New FERRABRIO technical RFQ",
    "",
    `Name: ${name}`,
    `Work email: ${email}`,
    `Company: ${company || "Not supplied"}`,
    `Brush family: ${family || "Not supplied"}`,
    "",
    "Application & technical requirements:",
    requirements,
    "",
    "Attribution:",
    `Landing page: ${landingPage || "Not supplied"}`,
    `Referrer: ${referrer || "Direct / not supplied"}`,
    `UTM source: ${utmSource || "Not supplied"}`,
    `UTM medium: ${utmMedium || "Not supplied"}`,
    `UTM campaign: ${utmCampaign || "Not supplied"}`,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return response({ delivered: false, error: "Mail service is not configured" }, 503);
  }

  try {
    const resend = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: "FERRABRIO RFQ <rfq@ferrabrio.com>",
        to: ["info@ferrabrio.com"],
        reply_to: email,
        subject,
        text: message,
      }),
    });

    if (!resend.ok) {
      return response({ delivered: false, error: "Mail delivery could not be confirmed" }, 502);
    }
    return response({ delivered: true });
  } catch {
    return response({ delivered: false, error: "Mail service is temporarily unavailable" }, 503);
  }
}
