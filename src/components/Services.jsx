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
      'Planejamento e conteúdos que fortalecem a marca e geram autoridade.',
    Icon: Share2,
  },
  {
    title: 'Tráfego Pago',
    description:
      'Meta Ads, Google Ads e YouTube com segmentação inteligente.',
    Icon: MousePointerClick,
  },
  {
    title: 'Estratégias de Marketing Digital',
    description:
      'Neuromarketing e foco no comportamento do consumidor.',
    Icon: Brain,
  },
  {
    title: 'Branding',
    description: 'Construção e fortalecimento da identidade da marca.',
    Icon: Palette,
  },
  {
    title: 'Produção de Conteúdo',
    description: 'Roteiros e copies persuasivos.',
    Icon: FileText,
  },
  {
    title: 'Consultoria',
    description:
      'Análise de negócio e direcionamento para aumentar conversões.',
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
            Soluções integradas para marcas que buscam performance com
            consistência visual e narrativa forte.
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
