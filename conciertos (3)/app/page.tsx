"use client"

import Link from "next/link"

const concerts = [
  {
    id: "1",
    title: "IGLESIA DE LA TRINIDAD",
    date: "5 DE DICIEMBRE",
    day: "Viernes",
    time: "6:00 PM",
    location: "Barrio Getsemaní",
    eventType: "PRIMER EVENTO",
    color: "from-emerald-600 to-emerald-500",
    borderColor: "border-emerald-500",
  },
  {
    id: "2",
    title: "CC. LA GRAN MANZANA",
    date: "06 DE DICIEMBRE",
    day: "Sábado",
    time: "7:00 PM",
    location: "Salón principal, Primer Piso",
    eventType: "SEGUNDO EVENTO",
    color: "from-rose-600 to-rose-500",
    borderColor: "border-rose-500",
  },
  {
    id: "3",
    title: "IGLESIA BARRIO EL CAMPESTRE",
    date: "08 DE DICIEMBRE",
    day: "Lunes",
    time: "6:30 PM",
    location: "Iglesia principal",
    eventType: "TERCER EVENTO",
    color: "from-sky-600 to-sky-500",
    borderColor: "border-sky-500",
  },
  {
    id: "4",
    title: "BARRIO BICENTENARIO",
    date: "9 DE DICIEMBRE",
    day: "Martes",
    time: "6:30 PM",
    location: "Cancha",
    eventType: "CUARTO EVENTO",
    color: "from-blue-600 to-blue-500",
    borderColor: "border-blue-500",
  },
  {
    id: "5",
    title: "TEATRO ADOLFO MEJÍA",
    date: "10 DE DICIEMBRE",
    day: "Miércoles",
    time: "7:00 PM",
    location: "SALA ADOLFO MEJÍA",
    eventType: "QUINTO EVENTO",
    color: "from-violet-600 to-violet-500",
    borderColor: "border-violet-500",
  },
  {
    id: "6",
    title: "IGLESIA DE BOCAGRANDE",
    date: "16 DE DICIEMBRE",
    day: "Martes",
    time: "7:00 PM",
    location: "Iglesia de Bocagrande",
    eventType: "SEXTO EVENTO",
    color: "from-amber-600 to-amber-500",
    borderColor: "border-amber-500",
  },
  {
    id: "7",
    title: "BARRIO EL POZÓN",
    date: "18 DE DICIEMBRE",
    day: "Jueves",
    time: "7:00 PM",
    location: "POR DEFINIR",
    eventType: "SÉPTIMO EVENTO",
    color: "from-orange-600 to-orange-500",
    borderColor: "border-orange-500",
  },
  {
    id: "8",
    title: "HOTEL SANTA CLARA",
    date: "22 DE DICIEMBRE",
    day: "Lunes",
    time: "7:00 PM",
    location: "Salón principal",
    eventType: "EVENTO DE GALA",
    color: "from-pink-600 to-pink-500",
    borderColor: "border-pink-500",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-800 -z-10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10 -z-10" />

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full text-blue-300 text-sm font-semibold">
              🎼 Diciembre 2025
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight text-balance">
            Música Majestuosa
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-amber-400 mb-6">Gran Gira de Clásicos Musicales</p>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Una experiencia sin precedentes con más de 50 artistas en escena. Vive la emoción de la música clásica en
            los lugares más emblemáticos de Cartagena.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Conciertos Principales</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {concerts.map((concert) => (
            <article
              key={concert.id}
              className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <div className={`h-1 bg-gradient-to-r ${concert.color}`} />

              <div className="p-6 flex flex-col h-full">
                <span
                  className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${concert.color} text-white mb-3`}
                >
                  {concert.eventType}
                </span>

                <h3 className="text-lg font-bold text-white mb-4 line-clamp-2 flex-grow">{concert.title}</h3>

                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold text-amber-400">{concert.date}</span>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-slate-300">
                      <span className="font-semibold">{concert.day}</span> · {concert.time}
                    </p>
                    <p className="text-sm text-slate-400 flex items-center gap-1">📍 {concert.location}</p>
                  </div>
                </div>

                <Link
                  href={`/concerts/${concert.id}`}
                  className="mt-auto w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-200 text-center text-sm group-hover:shadow-lg"
                >
                  Ver detalles
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experiencias Únicas</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto rounded-full" />
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Presentaciones íntimas en lugares emblemáticos para una conexión profunda con la música.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="group relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl overflow-hidden border border-slate-600 p-8 hover:border-slate-500 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-rose-500" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Concierto Súbito - Corales</h3>
                <p className="text-4xl font-extrabold text-red-400 mb-3">22 NOV</p>
                <p className="text-slate-300 font-semibold mb-2">Sábado • Horario por confirmar</p>
                <p className="text-slate-400">Lugar de reunión de Corales - Acceso especial.</p>
              </div>
            </article>

            <article className="group relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl overflow-hidden border border-slate-600 p-8 hover:border-slate-500 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-yellow-500" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Concierto Súbito - Rural</h3>
                <p className="text-4xl font-extrabold text-amber-400 mb-3">23 NOV</p>
                <p className="text-slate-300 font-semibold mb-2">Domingo • Horario por confirmar</p>
                <p className="text-slate-400">Comunidad Rural designada - Evento comunitario.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Música Majestuosa</h3>
              <p className="text-sm text-slate-400">
                Gran gira de clásicos musicales en Cartagena, Colombia. Diciembre 2025.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">
                  Twitter
                </a>
                <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors font-medium">
                  Instagram
                </a>
                <a href="#" className="text-slate-400 hover:text-red-400 transition-colors font-medium">
                  YouTube
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Hashtags</h4>
              <p className="text-sm text-slate-400">#MusicaMajestuosa #GiraDeClásicos #CulturaMusical</p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-center text-sm text-slate-500">
              &copy; 2025 Música Majestuosa. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
