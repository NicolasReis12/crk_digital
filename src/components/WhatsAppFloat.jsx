import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../config'

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-accent text-navy shadow-[0_8px_32px_-8px_rgba(38,239,156,0.7),0_1px_0_rgba(255,255,255,0.35)_inset] transition hover:scale-105 hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:bottom-8 sm:right-8 sm:size-16"
      aria-label="Abrir conversa no WhatsApp"
    >
      <MessageCircle className="size-7 sm:size-8" strokeWidth={1.75} />
    </a>
  )
}
