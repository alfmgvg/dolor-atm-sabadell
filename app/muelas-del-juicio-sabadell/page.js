export default function Page() {
  return (
    <main className="min-h-screen bg-white pb-24 text-cyan-900 selection:bg-cyan-100">
      <section className="bg-cyan-50 border-b border-cyan-100">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <span className="inline-flex rounded-full border border-cyan-200 bg-white px-4 py-1 text-sm font-medium text-cyan-700">
            Cirugía Oral y Maxilofacial · Sabadell
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
            Extracción de muelas del juicio en Sabadell
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Las muelas del juicio o cordales son los últimos molares en aparecer. En muchos casos no
            tienen espacio suficiente para erupcionar correctamente y pueden quedar retenidos dentro
            del hueso o parcialmente cubiertos por la encía.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.quironsalud.com/valles/es/cita-medica#r!/n!/29?dir=next"
              className="rounded-2xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-700"
            >
              Pedir cita
            </a>
            <a
              href="tel:+34679176144"
              className="rounded-2xl border border-cyan-200 px-6 py-3 text-sm font-semibold text-cyan-900 transition hover:bg-cyan-100"
            >
              Llamar al 679 176 144
            </a>
            <a
              href="https://wa.me/34679176144"
              className="rounded-2xl border border-cyan-200 px-6 py-3 text-sm font-semibold text-cyan-900 transition hover:bg-cyan-100"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Síntomas frecuentes</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Dolor en la zona posterior de la mandíbula</li>
          <li>• Inflamación de la encía</li>
          <li>• Infecciones repetidas</li>
          <li>• Dificultad para abrir la boca</li>
          <li>• Daño en el molar vecino</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">¿Cuándo conviene valorar la extracción?</h2>
        <p className="mt-4 leading-8 text-slate-700">
          La extracción de una muela del juicio suele recomendarse cuando produce dolor, infecciones
          repetidas, inflamación de la encía, caries en el diente vecino o cuando el cordal queda
          retenido dentro del hueso y puede generar complicaciones a medio o largo plazo.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">¿Cómo se realiza la cirugía?</h2>
        <p className="mt-4 leading-8 text-slate-700">
          La intervención se realiza habitualmente con anestesia local y, en algunos casos,
          con sedación. Antes del procedimiento se realiza un estudio radiológico o TAC dental
          para conocer la posición exacta del cordal y planificar la cirugía de forma segura.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Recuperación</h2>
        <p className="mt-4 leading-8 text-slate-700">
          La recuperación suele ser rápida. Durante los primeros días puede aparecer inflamación
          o molestias leves que normalmente se controlan con medicación y siguiendo las
          recomendaciones postoperatorias del cirujano.
        </p>

        <div className="mt-12 rounded-3xl border border-cyan-100 bg-cyan-50 p-8">
          <h3 className="text-xl font-semibold">¿Necesitas valorar un cordal incluido en Sabadell?</h3>
          <p className="mt-3 leading-7 text-slate-700">
            Nuestro equipo de cirugía oral y maxilofacial puede estudiar tu caso y orientarte sobre
            el tratamiento más adecuado.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://www.quironsalud.com/valles/es/cita-medica#r!/n!/29?dir=next"
              className="rounded-2xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-700"
            >
              Pedir cita online
            </a>
            <a
              href="https://wa.me/34679176144"
              className="rounded-2xl border border-cyan-200 px-6 py-3 text-sm font-semibold text-cyan-900 transition hover:bg-cyan-100"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
