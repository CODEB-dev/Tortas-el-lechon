import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contacto = () => {
  // REPLACE_WITH_YOUR_NUMBER: Use international format without +, e.g. 5213312345678 for Mexico
  const STORE_WHATSAPP_NUMBER = '528787701139' // <- cambia este número por el de tu negocio

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError('Por favor completa nombre, teléfono y tu pedido/mensaje.')
      return
    }

    // Normalize customer phone: keep digits only
    const normalizePhone = (raw) => raw.replace(/\D/g, '')
    let customerDigits = normalizePhone(phone)

    // If user entered a 10-digit local number (Mexico), add country code 52
    if (customerDigits.length === 10) {
      customerDigits = '52' + customerDigits
    }

    // Build a clear, labeled message for WhatsApp
    const textLines = [
      '*Nuevo pedido desde la web*',
      `Nombre: ${name}`,
      `Teléfono: +${customerDigits}`,
      `Pedido: ${message}`,
      `Fecha: ${new Date().toLocaleString()}`,
    ]

    const text = textLines.join('\n')

    // Try native WhatsApp scheme first (mobile), then fallback to wa.me (web)
    const encoded = encodeURIComponent(text)
    const nativeUri = `whatsapp://send?phone=${STORE_WHATSAPP_NUMBER}&text=${encoded}`
    const waMeUrl = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encoded}`

    // Open native app in a new tab/window; if it fails (desktop), open wa.me after a short delay
    try {
      const newWindow = window.open(nativeUri, '_blank')
      // Some browsers block unknown protocols; fallback to wa.me
      setTimeout(() => {
        if (!newWindow || newWindow.closed) {
          window.open(waMeUrl, '_blank')
        }
      }, 700)
    } catch (err) {
      window.open(waMeUrl, '_blank')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 font-montserrat pt-16">
      <section className="py-16 container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          Contacto y pedidos
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <p className="text-gray-600 mb-4">
              Puedes hacer tu pedido por WhatsApp con un mensaje prellenado, o llamarnos directamente.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-red-500 focus:border-red-500"
                  placeholder="Tu nombre"
                  aria-label="Nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-red-500 focus:border-red-500"
                  placeholder="(878) 123 4567"
                  aria-label="Teléfono"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Tu pedido / mensaje</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-red-500 focus:border-red-500"
                  placeholder="Ej: 1 torta de jamón, 2 tacos al pastor - para recoger a las 13:00"
                  aria-label="Mensaje"
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <div className="flex gap-3 items-center">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold shadow"
                >
                  Enviar por WhatsApp
                </button>

                <a
                  href={`tel:+52${STORE_WHATSAPP_NUMBER.replace(/^52/, '')}`}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-gray-700 hover:bg-gray-100"
                >
                  Llamar ahora
                </a>
              </div>
            </form>
          </motion.div>

          {/* Información + mapa */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-lg">Datos de contacto</h3>
              <p className="text-gray-600 mt-2">Dirección: Piedras Negras - Nava 57, Villa de Fuente, 26090 Piedras Negras, Coah.</p>
              <p className="text-gray-600">Teléfono: <a href={`tel:+52${STORE_WHATSAPP_NUMBER.replace(/^52/, '')}`} className="text-red-600">+52 {STORE_WHATSAPP_NUMBER.replace(/^52/, '')}</a></p>
              <p className="text-gray-600">Horario: Lun-Dom · 9:00am — 6:00pm</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="w-full h-64">
                {/* Map embed using Google Maps search query. Replace the query term with your exact address if desired. */}
                <iframe
                  title="Mapa - Tortas el Lechón"
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437.61896435536903!2d-100.552110201779!3d28.66116439941917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865f8b30271d7b1b%3A0x725e95d375a12236!2sTortas%20Y%20Tacos%20El%20Lechon!5e0!3m2!1ses-419!2smx!4v1758867195940!5m2!1ses-419!2smx"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-4">
              <h4 className="font-semibold">Pedir por WhatsApp</h4>
              <p className="text-gray-600 mt-2">Al enviar tu pedido desde el formulario, se abrirá WhatsApp con un mensaje prellenado para agilizar la atención.</p>
              <p className="text-sm text-gray-500 mt-2">También puedes copiar este link y compartirlo: <a className="text-red-600" href={`https://wa.me/${STORE_WHATSAPP_NUMBER}`}>https://wa.me/{STORE_WHATSAPP_NUMBER}</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contacto