import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { getWhatsAppUrl } from '../config'

const nav = [
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#contato', label: 'Contato' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-ice/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#topo"
          className="flex shrink-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <img
            src="logo_azul.png"
            alt="CRK Digital"
            className="h-9 w-auto sm:h-11"
          />
        </a>

        <nav
          id="mobile-nav"
          className={`absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-navy/10 bg-ice px-4 py-4 shadow-lg sm:static sm:flex sm:flex-row sm:items-center sm:gap-8 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none ${open ? 'flex' : 'hidden sm:flex'}`}
          aria-label="Principal"
        >
          {nav.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-navy/80 transition-colors hover:bg-navy/5 hover:text-navy"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-xl bg-accent px-5 py-2.5 text-center text-sm font-semibold text-navy shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_8px_24px_-8px_rgba(38,239,156,0.55)] transition hover:brightness-105 sm:mt-0"
            onClick={() => setOpen(false)}
          >
            Falar com Especialista
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-navy sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
    </header>
  )
}
