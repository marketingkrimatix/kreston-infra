import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://new.krestoninfra.com"),
  title: { default: "Kreston Infra Projects | Real Estate & Infrastructure Development", template: "%s | Kreston Infra Projects" },
  description: "Kreston Infra Projects is an integrated real estate development company creating residential and infrastructure assets across Telangana.",
  keywords: ["real estate development Hyderabad", "residential development Telangana", "land development Hyderabad", "Kreston Infra Projects"],
  openGraph: { title: "Kreston Infra Projects", description: "Building Value. Developing Futures.", type: "website", locale: "en_IN", images: ["/images/villas-and-buildings/mehdipatnam-site/IMG-20260919-WA0009.jpg"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
