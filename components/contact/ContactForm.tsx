"use client";

import { useState, FormEvent } from "react";
import { Mail } from "lucide-react";
import LinkedInIcon from "@/components/ui/LinkedInIcon";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/xzdlgrgp", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Direct contact */}
      <div className="space-y-6">
        <div>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
            Direct Contact
          </p>
          <a
            href="mailto:georgios.nanos@rwth-aachen.de"
            className="flex items-center gap-3 text-sm text-ink hover:text-primary transition-colors group"
          >
            <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-surface-soft flex items-center justify-center text-muted group-hover:text-primary transition-colors">
              <Mail size={16} />
            </span>
            <span>georgios.nanos (at) rwth-aachen.de</span>
          </a>
        </div>

        <div>
          <a
            href="https://de.linkedin.com/in/georgios-nanos-7048b25a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-ink hover:text-primary transition-colors group"
          >
            <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-surface-soft flex items-center justify-center text-muted group-hover:text-primary transition-colors">
              <LinkedInIcon size={16} />
            </span>
            <span>LinkedIn Profile</span>
          </a>
        </div>

        <div className="pt-4">
          <a
            href="https://de.linkedin.com/in/georgios-nanos-7048b25a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-on-primary text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-primary-active transition-colors"
          >
            <LinkedInIcon size={16} />
            Connect on LinkedIn
          </a>
        </div>
      </div>

      {/* Contact form */}
      <div>
        <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
          Send a Message
        </p>

        {status === "success" ? (
          <div className="rounded-lg bg-surface-soft border border-hairline p-6 text-sm text-body space-y-1">
            <p className="font-medium text-ink">Message sent — thank you!</p>
            <p className="text-muted">I&apos;ll get back to you as soon as possible.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-3 text-primary hover:text-primary-active text-xs font-medium transition-colors"
            >
              Send another message →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="firstName" className="block text-xs font-medium text-muted mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full bg-canvas border border-hairline rounded-lg px-3 py-2 text-sm text-ink placeholder:text-muted-soft focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-colors"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-xs font-medium text-muted mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full bg-canvas border border-hairline rounded-lg px-3 py-2 text-sm text-ink placeholder:text-muted-soft focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-muted mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-canvas border border-hairline rounded-lg px-3 py-2 text-sm text-ink placeholder:text-muted-soft focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-colors"
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-medium text-muted mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-canvas border border-hairline rounded-lg px-3 py-2 text-sm text-ink placeholder:text-muted-soft focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-colors"
                placeholder="How can I help?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-muted mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-canvas border border-hairline rounded-lg px-3 py-2 text-sm text-ink placeholder:text-muted-soft focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-colors resize-none"
                placeholder="Please fill out this form to receive more information on my profile, projects, certifications etc."
              />
            </div>

            {status === "error" && (
              <p className="text-xs text-error">
                Something went wrong. Please try again or email directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-primary text-on-primary text-sm font-medium py-2.5 rounded-lg hover:bg-primary-active transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
