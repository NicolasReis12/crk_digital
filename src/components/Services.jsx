import { createElement } from 'react'
import {
  Share2,
  MousePointerClick,
  Brain,
  Palette,
  FileText,
  Briefcase,
} from 'lucide-react'

const services = [
  {
    title: 'Gestão de Redes Sociais',
    description:
      'Conteúdos estratégicos que posicionam sua marca e influenciam decisões de compra.',
    Icon: Share2,
  },
  {
    title: 'Tráfego Pago',
    description:
      'Meta Ads, Google Ads e YouTube com foco em performance, escala e geração de leads qualificados.',
    Icon: MousePointerClick,
  },
  {
    title: 'Estratégias de Marketing Digital',
    description:
      'Neuromarketing aplicado para entender o comportamento do consumidor e transformar atenção em vendas.',
    Icon: Brain,
  },
  {
    title: 'Branding',
    description: 'Construção de marca forte, memorável e percebida como autoridade no mercado.',
    Icon: Palette,
  },
  {
    title: 'Produção de Conteúdo',
    description: 'Roteiros e copies persuasivas que prendem atenção e geram ação.',
    Icon: FileText,
  },
  {
    title: 'Consultoria',
    description:
      'Diagnóstico estratégico e direcionamento claro para aumentar conversão e resultado.',
    Icon: Briefcase,
  },
]

export function Services() {
  return (
    <section
      id="servicos"
      className="scroll-mt-24 bg-ice px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            Serviços
          </h2>
          <p className="mt-3 text-base text-navy/70 sm:text-lg">
            Soluções estratégicas para marcas que querem crescer com consistência, autoridade e foco em resultado.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, Icon }) => (
            <li
              key={title}
              className="group flex flex-col rounded-2xl border border-navy/8 bg-ice/90 p-6 shadow-[0_1px_0_rgba(19,26,44,0.04)] ring-1 ring-navy/5 transition hover:border-accent/30 hover:shadow-[0_20px_40px_-28px_rgba(19,26,44,0.25)]"
            >
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-navy text-accent transition group-hover:bg-deep">
                {createElement(Icon, {
                  className: 'size-5',
                  strokeWidth: 1.75,
                  'aria-hidden': true,
                })}
              </div>
              <h3 className="text-lg font-semibold text-navy">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/70 sm:text-base">
                {description}
              </p>
              <span
                className="mt-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accent"
                aria-hidden
              >
                <span className="size-1.5 rounded-full bg-accent" />
                <span className="h-px flex-1 bg-linear-to-r from-accent/50 to-transparent" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
