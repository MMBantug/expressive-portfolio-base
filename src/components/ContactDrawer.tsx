import { useState } from "react";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { CONTACT_EMAIL, sendContactMessage } from "@/lib/contact";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const focusAreas = [
  "TVET & Curriculum Reform",
  "Gender Equality & Inclusion (GESI)",
  "Institutional Capacity Building",
  "Project Leadership & Advisory",
  "General Inquiry",
];

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Please enter your name" })
    .max(100, { message: "Name must be less than 100 characters" }),
  organization: z
    .string()
    .trim()
    .max(150, { message: "Organization must be less than 150 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  focus: z.string().trim().nonempty({ message: "Please choose an area of focus" }),
  message: z
    .string()
    .trim()
    .nonempty({ message: "Please write a short message" })
    .max(1500, { message: "Message must be less than 1500 characters" }),
});

interface ContactDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDrawer = ({ open, onOpenChange }: ContactDrawerProps) => {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    focus: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitError("");
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      await sendContactMessage({
        name: result.data.name ?? "",
        organization: result.data.organization ?? "",
        email: result.data.email ?? "",
        focus: result.data.focus ?? "",
        message: result.data.message ?? "",
      });
      toast.success("Thank you — your message has been submitted.");
      setForm({ name: "", organization: "", email: "", focus: "", message: "" });
      onOpenChange(false);
    } catch {
      setSubmitError("Your message could not be submitted. Please try again, or contact Mary using the email below.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md overflow-y-auto border-l border-border bg-background"
      >
        <SheetHeader className="text-left space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Get in touch
          </p>
          <SheetTitle className="font-serif text-3xl font-normal leading-tight">
            Let's talk about your programme
          </SheetTitle>
          <SheetDescription className="text-sm leading-relaxed">
            Advisory, technical leadership, and field collaboration inquiries are
            welcome.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="cd-name">Full name</Label>
            <Input
              id="cd-name"
              value={form.name}
              maxLength={100}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cd-org">Organization / agency</Label>
            <Input
              id="cd-org"
              value={form.organization}
              maxLength={150}
              onChange={(e) => update("organization", e.target.value)}
              placeholder="Ministry, donor, college, or NGO"
            />
            {errors.organization && (
              <p className="text-xs text-destructive">{errors.organization}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cd-email">Work email</Label>
            <Input
              id="cd-email"
              type="email"
              value={form.email}
              maxLength={255}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@organisation.org"
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cd-focus">Area of focus</Label>
            <Select
              value={form.focus}
              onValueChange={(value) => update("focus", value)}
            >
              <SelectTrigger id="cd-focus">
                <SelectValue placeholder="Select an area" />
              </SelectTrigger>
              <SelectContent>
                {focusAreas.map((area) => (
                  <SelectItem key={area} value={area}>
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.focus && (
              <p className="text-xs text-destructive">{errors.focus}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cd-message">Message</Label>
            <Textarea
              id="cd-message"
              value={form.message}
              maxLength={1500}
              rows={5}
              onChange={(e) => update("message", e.target.value)}
              placeholder="A few lines about the programme, timeline, and how I can help."
            />
            {errors.message && (
              <p className="text-xs text-destructive">{errors.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full rounded-full" disabled={submitting}>
            {submitting ? "Sending…" : "Send message"}
          </Button>
          {submitError && <p role="alert" className="text-sm text-destructive">{submitError}</p>}
        </form>

        <div className="mt-10 pt-6 border-t border-border space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
              Direct
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
            >
              <Mail size={14} />
              {CONTACT_EMAIL}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
              Elsewhere
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/marybantug/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 border border-border rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 border border-border rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ContactDrawer;
