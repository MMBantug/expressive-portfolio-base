import { afterEach, test } from "node:test";
import assert from "node:assert/strict";
import { sendContactMessage } from "./contact";

const originalFetch = globalThis.fetch;
afterEach(() => { globalThis.fetch = originalFetch; });
const message = { name: "Contact test", organization: "Test", email: "test@example.com", focus: "General Inquiry", message: "Test message" };

test("contact submissions go to Mary's requested Gmail address", async () => {
  let destination = "";
  globalThis.fetch = (async (input: RequestInfo | URL) => {
    destination = String(input);
    return new Response(JSON.stringify({ success: "true" }));
  }) as typeof fetch;
  await sendContactMessage(message);
  assert.equal(destination, "https://formsubmit.co/ajax/mary.mikelle@gmail.com");
});

test("service rejection is not treated as a successful submission", async () => {
  globalThis.fetch = (async () => new Response(JSON.stringify({ success: false }))) as typeof fetch;
  await assert.rejects(sendContactMessage(message));
});