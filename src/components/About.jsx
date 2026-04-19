export function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 bg-ice px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            Sobre a CRK Digital
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/75 sm:text-lg">
            Somos uma agência especializada em estratégias nacionais e
            internacionais, com foco em posicionamento, comunicação eficiente e
            presença sólida no mercado.
          </p>
          <p className="mt-4 rounded-2xl border border-navy/10 bg-ice p-5 text-base leading-relaxed text-navy/85 shadow-sm ring-1 ring-navy/5 backdrop-blur-sm sm:text-lg">
            <span className="font-semibold text-navy">Nosso diferencial:</span>{' '}
            não trabalhamos com pacotes prontos. Criamos estratégias únicas
            baseadas em dados e gatilhos mentais.
          </p>
        </div>
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-3xl bg-linear-to-br from-deep/20 to-accent/10 blur-2xl"
            aria-hidden
          />
          <img
            src="apresentacao_caio.jpg"
            alt="logo_azul.png"
            className="relative w-full rounded-2xl border border-navy/10 object-cover shadow-[0_24px_48px_-24px_rgba(19,26,44,0.35)]"
            width={640}
            height={420}
          />
        </div>
      </div>
    </section>
  )
}
