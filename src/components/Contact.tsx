import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { PHONE_DISPLAY, PHONE_HREF, TIKTOK, TIKTOK_URL } from "@/lib/site";

const SERVICES = [
  "Repair",
  "Replacement",
  "Installation",
  "Inspection",
  "Maintenance",
  "Not Sure",
];

type Fields = { name: string; phone: string; email: string; service: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", phone: "", email: "", service: "", message: "" };

function validate(v: Fields): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  const digits = v.phone.replace(/\D/g, "");
  if (digits.length < 10) e.phone = "Please enter a valid phone number.";
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = "Please enter a valid email address.";
  if (!v.service) e.service = "Please choose a service.";
  if (v.message.trim().length < 10) e.message = "Tell me a little about the roof (10+ characters).";
  return e;
}

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof Fields, val: string) => {
    setValues((v) => ({ ...v, [k]: val }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    window.setTimeout(() => {
      setStatus("sent");
      setValues(empty);
    }, 700);
  };

  const field =
    "w-full border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent";

  return (
    <section id="contact" className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 text-4xl leading-[1.02] text-ink sm:text-6xl">
              Ready to Take the Next Step?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Let's talk about your roofing project.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact-form" className="btn-accent w-full sm:w-auto">
                Get a Roofing Quote
              </a>
              <a href={PHONE_HREF} className="btn-outline w-full text-ink sm:w-auto">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <div className="space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Phone
                </p>
                <a
                  href={PHONE_HREF}
                  className="mt-2 block font-display text-2xl font-extrabold text-ink transition-colors hover:text-accent"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  TikTok
                </p>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block font-display text-2xl font-extrabold text-ink transition-colors hover:text-accent"
                >
                  {TIKTOK}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Experience
                </p>
                <p className="mt-2 font-display text-2xl font-extrabold text-ink">
                  14 Years in Roofing
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-8">
            <form
              id="contact-form"
              onSubmit={onSubmit}
              noValidate
              className="border border-border bg-background p-6 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
                    Name *
                  </label>
                  <input
                    id="name"
                    className={field}
                    value={values.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-accent">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ink">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={field}
                    value={values.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="613-000-0000"
                  />
                  {errors.phone && <p className="mt-1.5 text-xs text-accent">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={field}
                    value={values.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="Optional"
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-accent">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-ink">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    className={field}
                    value={values.service}
                    onChange={(e) => set("service", e.target.value)}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && <p className="mt-1.5 text-xs text-accent">{errors.service}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`${field} resize-y`}
                    value={values.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder="What's going on with your roof?"
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-accent">{errors.message}</p>}
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button type="submit" className="btn-solid" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send Request"}
                </button>
                <a href={PHONE_HREF} className="text-sm font-medium text-muted-foreground hover:text-accent">
                  Or call {PHONE_DISPLAY}
                </a>
              </div>

              <div aria-live="polite">
                {status === "sent" && (
                  <p className="mt-5 border-l-2 border-accent bg-sand px-4 py-3 text-sm text-ink">
                    Thanks — your request has been received. Expect a call back at the number you
                    provided. For anything urgent, call {PHONE_DISPLAY}.
                  </p>
                )}
                {status === "error" && Object.keys(errors).length > 0 && (
                  <p className="mt-5 border-l-2 border-accent bg-sand px-4 py-3 text-sm text-ink">
                    Please fix the highlighted fields and send again.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
