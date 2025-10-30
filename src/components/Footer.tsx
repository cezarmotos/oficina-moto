export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-muted">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 text-sm text-black/70 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-center md:text-left">
        <p>© {new Date().getFullYear()} Cezar Motos — Elétrica Eletrônica e Rebobinagem</p>
        <p>Atendimento para todo o Brasil • WhatsApp: (53) 98422-8290</p>
      </div>
    </footer>
  );
}
