export function Ebook() {
  return (
    <section
      id="ebook"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Texto — esquerda */}
        <div>
          <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
            Ebook
          </span>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-navy sm:text-3xl lg:text-4xl">
            Da Inércia à Ação: Transforme seu Potencial em Lucro
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/75 sm:text-lg">
            Descubra estratégias comprovadas para sair da inércia e transformar
            seu potencial em resultados reais. Comece sua jornada rumo ao sucesso.
          </p>

          <a
            href="https://go.hotmart.com/C97203509S"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-navy shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_8px_24px_-8px_rgba(38,239,156,0.55)] transition hover:brightness-105"
          >
            📖 Quero o Ebook
          </a>
        </div>

        {/* Imagem — direita */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            className="absolute -inset-4 rounded-3xl bg-linear-to-br from-deep/20 to-accent/10 blur-2xl"
            aria-hidden
          />
          <img
            src="/ebook.jpg.jpeg"
            alt="Capa do Ebook — Da Inércia à Ação: Transforme seu Potencial em Lucro"
            className="relative w-56 sm:w-64 lg:w-72 rounded-2xl shadow-[0_24px_48px_-24px_rgba(19,26,44,0.45)]"
          />
        </div>
      </div>
    </section>
  )
}
