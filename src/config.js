/** DDI + DDD + número (somente dígitos). WhatsApp e link tel:. */
export const PHONE_E164_DIGITS = '553291994913'

/** Número formatado para exibição. */
export const PHONE_DISPLAY = '+55 32 9199-4913'

export const WHATSAPP_PHONE = PHONE_E164_DIGITS

export const WHATSAPP_MESSAGE =
  'Olá! Gostaria de falar com um especialista da CRK Digital.'

export function getWhatsAppUrl(message = WHATSAPP_MESSAGE) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`
}
