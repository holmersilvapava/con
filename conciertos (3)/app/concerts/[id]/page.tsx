"use client"

import { use } from "react"
import Link from "next/link"

const concertDetails: Record<string, any> = {
  "1": {
    title: "IGLESIA DE LA TRINIDAD",
    eventType: "PRIMER EVENTO",
    date: "5 DE DICIEMBRE",
    day: "Viernes",
    time: "6:00 PM",
    location: "Barrio Getsemaní, Cartagena",
    description:
      "Asiste a esta espectacular gala musical en el corazón de Getsemaní. La Orquesta Filarmónica interpretará una selección de música barroca y clásica, con la participación especial del coro local. ¡Un evento imperdible y apto para toda la familia!",
    note: "Se requiere puntualidad. Entrada gratuita con aforo limitado.",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzgeAifpHEPguOOw913W6_sPkFjMlukAepS-jLaEz1Rl_hWCMWN18r_HC_Wu34-i9N_cMy3dQZheuXwN85Kd0WvN_1N00SY7F7vykfJEr5uyroH20i3zzu3bwZYP7mK6aw-45W7jQ=w243-h203-n-k-no-nu",
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyEhR52pYfYPXpwmQVsiF-aSZ9790Yxr7aAgd0UEVHTG1FYnnrP-tHg2zUt5nAMYHLPLp6e-zx-QlUHkfeA6mBd_epCy1bNPmeZ05tua8qIArB7MPhKyGnYJ2zf23c29GzqxcM=w243-h406-n-k-no-nu",
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwHig87KVbHBY2kbYGGwhW2vXcMFDggRIzqVS9--VmVExxG29O3mLszXF8rMnKr--foZRqJLHVuvZpmf10QTd3v63jl2nYpSApvYoCyypm1drqI0QWcFSuaYHqyBIqRWzHNuUAV=w243-h203-n-k-no-nu",
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzj1Qy7ZPhV5Vf4HzU4CVXparCPXuRWv3LBVP-DPewo4NEJXWO9lrhshMGYeTUpioKB4l3kBbWA8vtSrcPHFskmkyCUR74UJJWD9tDzDrlYdKcDR0KV00soKnNkFd25ru4-grPF=w243-h406-n-k-no-nu",
    ],
    mapUrl: "https://mapcarta.com/es/W160307777",
  },
}

export default function ConcertDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const concert = concertDetails[id]

  if (!concert) {
    return (
      <main className="min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Concierto no encontrado</h1>
          <p className="text-gray-600 mb-6">
            Lo sentimos, no pudimos encontrar la información del concierto que buscas.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-block mb-8 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
        >
          ← Volver
        </Link>

        {/* Concert Container */}
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header Section */}
          <header className="border-b-4 border-lime-500 pb-6 mb-8">
            <p className="text-sm font-semibold text-gray-600 mb-2">{concert.eventType}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">{concert.title}</h1>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Ubicación:</strong> {concert.location}
              </p>
              <p>
                <strong>Hora:</strong> {concert.day}, {concert.time}
              </p>
            </div>
          </header>

          {/* Description Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Detalles del Evento</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{concert.description}</p>
            <p className="text-gray-600 font-semibold italic">
              <strong>Nota:</strong> {concert.note}
            </p>
          </section>

          {/* Gallery Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 pb-3 border-l-4 border-blue-400 pl-4">
              Imágenes del Lugar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {concert.images.map((img: string, idx: number) => (
                <figure key={idx} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Imagen del lugar ${idx + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </figure>
              ))}
            </div>
          </section>

          {/* Map Section */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-6 pb-3 border-l-4 border-orange-500 pl-4">
              Ubicación Exacta
            </h2>
            <iframe
              src={concert.mapUrl}
              className="w-full h-96 rounded-lg shadow-md border-2 border-gray-200"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación del concierto"
            />
            <p className="text-sm text-gray-600 mt-3">
              Puedes hacer zoom y obtener indicaciones directamente en el mapa.
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
