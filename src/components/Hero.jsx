import { MessageCircle, ArrowRight } from 'lucide-react'
import { getWhatsAppUrl } from '../config'

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-navy px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-deep/40 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-[380px] w-[380px] rounded-full bg-deep/50 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(4,53,90,0.55),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent/90 sm:text-sm">
          Agência de Marketing CRK Digital
        </p>
        <h1 className="max-w-4xl text-3xl font-semibold leading-[1.08] tracking-tight text-ice sm:text-4xl md:text-5xl lg:text-6xl">
          Marketing Estratégico Orientado a Resultados.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ice/75 sm:text-lg">
          Tiramos sua empresa da inércia com estratégias inteligentes baseadas
          em neuromarketing e comportamento humano, indo além de achismos.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-navy shadow-[0_1px_0_rgba(255,255,255,0.3)_inset,0_12px_40px_-12px_rgba(38,239,156,0.65)] transition hover:brightness-105"
          >
            <MessageCircle className="size-5 shrink-0" aria-hidden />
            Quero Escalar Minhas Vendas
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-ice/20 bg-ice/5 px-6 py-3.5 text-base font-medium text-ice backdrop-blur-sm transition hover:border-ice/35 hover:bg-ice/10"
          >
            Conhecer Serviços
            <ArrowRight className="size-5 shrink-0 opacity-80" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}
