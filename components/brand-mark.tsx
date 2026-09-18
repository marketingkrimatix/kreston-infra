import Image from "next/image";
import Link from "next/link";

export function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="group flex items-center" aria-label="Kreston Infra Projects home">
      <span className={`relative block h-10 w-[174px] sm:h-11 sm:w-[192px] ${inverted ? "rounded bg-white px-2" : ""}`}>
        <Image src="/images/kreston-logo.png" alt="Kreston Infra Projects" fill sizes="192px" className="object-contain" priority />
      </span>
    </Link>
  );
}
