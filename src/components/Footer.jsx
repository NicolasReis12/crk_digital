export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ice/10 bg-navy px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-ice/50">
          © {year} Agência CRK Digital. Todos os direitos reservados.
        </p>
        <a
          href="#topo"
          className="text-sm font-medium text-accent/90 hover:text-accent"
        >
          Voltar ao topo
        </a>
      </div>
    </footer>
  )
}
