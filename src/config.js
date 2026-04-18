/** Substitua pelo número real (DDI + DDD + número, sem símbolos). */
export const WHATSAPP_PHONE = '5511999999999'

export const WHATSAPP_MESSAGE =
  'Olá! Gostaria de falar com um especialista da CRK Digital.'

export function getWhatsAppUrl(message = WHATSAPP_MESSAGE) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`
}
