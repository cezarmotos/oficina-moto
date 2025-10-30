"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/sobre", label: "SOBRE" },
  { href: "/bobinas", label: "BOBINAS" },
  { href: "/eletrica", label: "ELÉTRICA" },
  { href: "/contato", label: "CONTATO" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="relative flex items-center justify-center sticky top-0 z-50 bg-light backdrop-blur">
      <div className="flex px-4 py-4 gap-4 md:gap-24 max-w-screen-2xl w-full items-center">
        <Link
          href="/"
          className="flex items-center font-goldman tracking-tight text-2xl md:text-3xl lg:text-8xl gap-1"
        >
          <span className="font-bold leading-none text-brand">Cezar</span>
          <span className="font-bold leading-none text-dark">Motos</span>
        </Link>

        {/* mobile menu button */}
        <button
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="ml-auto md:hidden inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-brand focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        <nav className="hidden md:flex items-center w-full gap-8 pt-4 justify-between md:mx-4 lg:mx-4">
          {nav.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            const base =
              "inline-block text-2xl !font-extrabold transition-colors duration-200 ease-out rounded-sm hover:scale-105";
            const color = isActive ? "text-brand" : "text-dark hover:text-brand";
            return (
              <Link key={item.href} href={item.href} className={`${base} ${color}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-light shadow-md border-t">
          <div className="flex flex-col px-4 py-4 gap-3">
            {nav.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block text-lg font-semibold py-2 rounded ${isActive ? "text-brand" : "text-dark hover:text-brand"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
