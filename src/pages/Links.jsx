export function Links() {
  const links = [
    { label: 'WhatsApp', href: 'https://wa.me/5500000000000', emoji: '💬' },
    { label: 'Site Principal', href: '/', emoji: '🏠' },

    { label: 'Instagram', href: 'https://instagram.com', emoji: '📸' },
    { label: 'LinkedIn', href: 'https://linkedin.com', emoji: '💼' },
    { label: 'YouTube', href: 'https://youtube.com', emoji: '▶️' },
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
