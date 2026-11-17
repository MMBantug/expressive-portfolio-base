export const CONTACT_EMAIL = "mary.mikelle@gmail.com";

export interface ContactMessage {
  name: string;
  organization: string;
  email: string;
  focus: string;
  message: string;
}

export async function sendContactMessage(message: ContactMessage) {
  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...message,
      _subject: `Portfolio inquiry — ${message.focus}`,
      _template: "table",
    }),
    signal: AbortSignal.timeout(30000),
  });
  const result: { success?: boolean | string } = await response.json();
  if (!response.ok || (result.success !== true && result.success !== "true")) {
    throw new Error("The email service did not accept the message.");
  }
}