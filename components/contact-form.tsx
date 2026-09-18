"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  if (sent) return <div className="grid min-h-[430px] place-items-center bg-mist p-10 text-center"><div><CheckCircle2 className="mx-auto h-12 w-12 text-copper" /><h3 className="mt-5 font-display text-3xl font-semibold text-ink">Thank you.</h3><p className="mt-3 max-w-sm text-sm leading-6 text-ink/60">Your enquiry has been prepared. Please also reach us directly by phone or email for an immediate response.</p><button onClick={() => setSent(false)} className="mt-6 text-sm font-bold text-copper">Send another enquiry</button></div></div>;
  return (
    <form onSubmit={submit} className="grid gap-5 bg-white p-6 shadow-soft sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field-label">Name<input required name="name" className="field" placeholder="Your full name" /></label>
        <label className="field-label">Phone<input required name="phone" type="tel" className="field" placeholder="Your phone number" /></label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field-label">Email<input required name="email" type="email" className="field" placeholder="you@company.com" /></label>
        <label className="field-label">Service<select name="service" className="field"><option>Civil Construction Works</option><option>Infrastructure Development</option><option>Residential Apartments & Villas</option><option>Fabrication & Laying</option><option>Interior & Exterior Works</option><option>Plumbing Contracting</option></select></label>
      </div>
      <label className="field-label">Project details<textarea required name="message" rows={5} className="field resize-none" placeholder="Tell us a little about your requirement" /></label>
      <button type="submit" className="button-dark w-full sm:w-fit">Submit enquiry <ArrowRight className="h-4 w-4" /></button>
      <p className="text-xs leading-5 text-ink/45">This demonstration form validates in the browser. Connect it to your preferred email or CRM service before production launch.</p>
    </form>
  );
}
