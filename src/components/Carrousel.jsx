import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const AUTO_MS = 4000

const slides = [
    {
        src: '/carrousel1.png',
        alt: 'Identidade visual CRK Digital',
      },
   {
    src: '/apresentacao_caio.jpg',
    alt: 'Apresentação CRK Digital',
  },
  
  {
    src: '/carrousel3.png',
    alt: 'Galeria CRK Digital — imagem 3',
  },
]

export function Carrousel() {
  const [index, setIndex] = useState(0)
  const pauseRef = useRef(false)

  const go = useCallback((dir) => { 
    setIndex((i) => {
      const n = slides.length
      return (i + dir + n) % n
    })
  }, [])

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!pauseRef.current) go(1)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [go])

  return (
    <section
      id="galeria"
      className="scroll-mt-24 border-t border-navy/8 bg-linear-to-b from-ice to-navy/3 px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      aria-roledescription="carousel"
      aria-label="Galeria de imagens"
      onMouseEnter={() => {
        pauseRef.current = true
      }}
      onMouseLeave={() => {
        pauseRef.current = false
      }}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative mt-10">
          <div
            className="absolute -inset-2 rounded-3xl bg-linear-to-br from-deep/15 to-accent/10 blur-2xl sm:-inset-3"
            aria-hidden
          />

          <div className="relative w-full overflow-hidden rounded-xl border border-navy/10 bg-navy/5 shadow-[0_20px_40px_-20px_rgba(19,26,44,0.3)] ring-1 ring-navy/5">
            <div
              className="flex items-start transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{
                width: `${slides.length * 100}%`,
                transform: `translateX(-${(index * 100) / slides.length}%)`,
              }}
            >
              {slides.map(({ src, alt }) => (
                <div
                  key={src}
                  className="shrink-0"
                  style={{ width: `${100 / slides.length}%` }}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="block h-auto w-full max-w-full"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-linear-to-t from-navy/50 via-navy/10 to-transparent px-2.5 pb-2.5 pt-12 sm:px-3 sm:pb-3">
              <div
                className="pointer-events-auto flex w-full items-center justify-between gap-2"
                role="group"
                aria-label="Controles do carrossel"
              >
                <button
                  type="button"
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-ice/25 bg-ice/15 text-ice backdrop-blur-sm transition hover:bg-ice/25"
                  onClick={() => go(-1)}
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="size-4" strokeWidth={2} aria-hidden />
                </button>

                <div
                  className="flex items-center gap-2"
                  role="tablist"
                  aria-label="Selecionar slide"
                >
                  {slides.map((_, i) => (
                    <button
                      key={String(i)}
                      type="button"
                      role="tab"
                      aria-selected={i === index}
                      aria-label={`Ir para imagem ${i + 1} de ${slides.length}`}
                      className={`size-2.5 rounded-full transition ${
                        i === index
                          ? 'bg-accent shadow-[0_0_0_2px_rgba(250,250,250,0.35)]'
                          : 'bg-ice/40 hover:bg-ice/70'
                      }`}
                      onClick={() => setIndex(i)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-ice/25 bg-ice/15 text-ice backdrop-blur-sm transition hover:bg-ice/25"
                  onClick={() => go(1)}
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="size-4" strokeWidth={2} aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
