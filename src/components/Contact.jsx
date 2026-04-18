import { Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { getWhatsAppUrl, PHONE_DISPLAY, PHONE_E164_DIGITS } from '../config'

const items = [
  {
    label: 'Telefone',
    value: PHONE_DISPLAY,
    href: `tel:+${PHONE_E164_DIGITS}`,
    Icon: Phone,
  },
  {
    label: 'E-mail',
    value: 'contato@crkdigital.com.br',
    href: 'mailto:contato@crkdigital.com.br',
    Icon: Mail,
  },
  {
    label: 'Horário de atendimento',
    value: 'Segunda a sexta, 9h às 18h',
    href: null,
    Icon: Clock,
  },
]

export function Contact() {
  return (
    <section
      id="contato"
      className="scroll-mt-24 bg-navy px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight text-ice sm:text-3xl">
          Contato
        </h2>
        <p className="mt-3 max-w-2xl text-base text-ice/70 sm:text-lg">
          Fale com nossa equipe. Respondemos com clareza e foco no próximo
          passo da sua operação.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {items.map(({ label, value, href, Icon }) => (
            <li
              key={label}
              className="rounded-2xl border border-ice/10 bg-deep/40 p-5 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ice/50">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1 block text-sm font-medium text-ice underline-offset-4 hover:underline sm:text-base"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-ice sm:text-base">
                      {value}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center sm:justify-start">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-accent px-8 py-4 text-base font-semibold text-navy shadow-[0_1px_0_rgba(255,255,255,0.3)_inset,0_16px_48px_-16px_rgba(38,239,156,0.55)] transition hover:brightness-105 sm:w-auto sm:py-5 sm:text-lg"
          >
            <MessageCircle className="size-6 shrink-0" aria-hidden />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
