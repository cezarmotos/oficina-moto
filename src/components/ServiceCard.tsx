import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string; // caminho da imagem (16x16 container customizado)
  href?: string; // link para "Ver detalhes"
  quoteHref?: string; // link para orçamento (default /contato)
  quoteLabel?: string; // label do link de orçamento (default Orçar)
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  href,
  quoteHref = "/contato",
  quoteLabel = "Orçar",
}) => {
  return (
    <div className={"card"}>
      <div className="relative w-24 h-24 p-6">
        <Image src={icon} alt="" fill className="object-contain drop-shadow" aria-hidden />
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-red-500 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-neutral-400 leading-relaxed flex-1">{description}</p>
      <div className="mt-6 flex items-center gap-4">
        {href && (
          <Link href={href} className="text-red-500 hover:text-red-400 font-medium text-sm">
            Ver detalhes →
          </Link>
        )}
        <Link
          href={quoteHref}
          className="text-xs uppercase tracking-wide text-neutral-500 hover:text-neutral-300"
        >
          {quoteLabel}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
