import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Kreston Infra Projects in Madhapur, Hyderabad about residential, land, infrastructure, and interior development.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact us" title="Let’s discuss what comes next." description="Connect with our Hyderabad office about residential, land, infrastructure, or interior development." />
      <section className="bg-mist py-20 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-site gap-14 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Start a conversation" title="A valuable idea starts here." copy="Share your development requirement with Kreston’s team or contact the head office directly." />
            <div className="mt-9 space-y-7">
              <div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center bg-ink text-copper"><MapPin className="h-5 w-5" /></span><div><p className="text-xs font-bold uppercase tracking-[.16em] text-ink/40">Address</p><p className="mt-2 text-sm leading-6">{contact.address}</p></div></div>
              <div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center bg-ink text-copper"><Phone className="h-5 w-5" /></span><div><p className="text-xs font-bold uppercase tracking-[.16em] text-ink/40">Phone</p><p className="mt-2 text-sm leading-6"><a href="tel:+919100400200" className="hover:text-copper">{contact.phones[0]}</a><br /><a href="tel:+919919901999" className="hover:text-copper">{contact.phones[1]}</a></p></div></div>
              <div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center bg-ink text-copper"><Mail className="h-5 w-5" /></span><div><p className="text-xs font-bold uppercase tracking-[.16em] text-ink/40">Email</p><a href={`mailto:${contact.email}`} className="mt-2 block text-sm hover:text-copper">{contact.email}</a><a href={`mailto:${contact.alternateEmail}`} className="mt-1 block text-sm hover:text-copper">{contact.alternateEmail}</a></div></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="h-[460px] bg-ink"><iframe title="Kreston Infra Projects location in Madhapur, Hyderabad" src="https://www.google.com/maps?q=Capitol+Towers+Surya+Enclave+Madhapur+Hyderabad+Telangana+500081&output=embed" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="border-0 grayscale-[.65] contrast-[1.05]" /></section>
    </>
  );
}
