export function Links() {
  const links = [
    { label: 'WhatsApp', href: 'https://wa.me/553291994913?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20CRK%20Digital.', emoji: '💬' },
    { label: 'Site CRK Digital', href: 'https://agenciacrkdigital.com.br', emoji: '🌐' },
    { label: 'Instagram — O Caio Marketeiro', href: 'https://www.instagram.com/ocaiomarketeiro?igsh=MWJibGdpdmVpdGVtOQ%3D%3D&utm_source=qr', emoji: '📸' },
    { label: 'Instagram — Agência CRK Digital', href: 'https://www.instagram.com/agenciacrkdigital?igsh=eDdodGtqdWJndnIx&utm_source=qr', emoji: '📸' },
    { label: 'Ebook Gratuito', href: 'https://go.hotmart.com/C97203509S', emoji: '📖' },
  ]

  return (
    <div className="min-h-dvh bg-ice flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm flex flex-col items-center gap-6">
        {/* Avatar / Logo */}
        <img
          src="/logo_azul.png"
          alt="CRK Digital"
          className="h-20 w-auto"
        />

        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy">CRK Digital</h1>
          <p className="mt-1 text-sm text-navy/60">Nossos links importantes</p>
        </div>

        {/* Links */}
        <ul className="w-full flex flex-col gap-3">
          {links.map(({ label, href, emoji }) => (
            <li key={href}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full rounded-2xl border border-navy/10 bg-white px-5 py-4 text-sm font-semibold text-navy shadow-sm transition hover:bg-navy hover:text-white hover:shadow-md"
              >
                <span>{emoji}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}
