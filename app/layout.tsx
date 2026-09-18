import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://new.krestoninfra.com"),
  title: { default: "Kreston Infra Projects | Civil & Infrastructure Construction", template: "%s | Kreston Infra Projects" },
  description: "Kreston Infra Projects is a professionally managed civil and infrastructure construction company headquartered in Madhapur, Hyderabad.",
  keywords: ["civil construction Hyderabad", "infrastructure projects Telangana", "Kreston Infra Projects", "residential construction Hyderabad"],
  openGraph: { title: "Kreston Infra Projects", description: "Professional Construction. Premium Execution.", type: "website", locale: "en_IN", images: ["/images/hero-construction.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
