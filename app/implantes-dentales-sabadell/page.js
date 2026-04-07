export default function Page() {
  return (
    <main className="min-h-screen bg-white pb-24 text-cyan-900 selection:bg-cyan-100">
      <section className="bg-cyan-50 border-b border-cyan-100">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <span className="inline-flex rounded-full border border-cyan-200 bg-white px-4 py-1 text-sm font-medium text-cyan-700">
            Cirugía Oral y Maxilofacial · Sabadell
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
            Implantes dentales en Sabadell
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Los implantes dentales permiten sustituir dientes perdidos mediante una raíz artificial
            de titanio que se integra en el hueso. Sobre este implante se coloca posteriormente
            una corona dental que reproduce la forma y función del diente natural.
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
        <h2 className="text-2xl font-semibold">¿Cuándo están indicados?</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Pérdida de uno o varios dientes</li>
          <li>• Dificultad para masticar</li>
          <li>• Problemas estéticos por ausencia dental</li>
          <li>• Rehabilitación completa de la dentición</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">Planificación del tratamiento</h2>
        <p className="mt-4 leading-8 text-slate-700">
          Antes de colocar un implante dental se realiza un estudio clínico y radiológico
          completo. En muchos casos utilizamos TAC dental para evaluar la cantidad y calidad
          del hueso disponible y planificar la cirugía con precisión.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Implantes en casos complejos</h2>
        <p className="mt-4 leading-8 text-slate-700">
          Los cirujanos maxilofaciales están especialmente formados para tratar situaciones
          complejas como pérdida de hueso, dientes retenidos o rehabilitaciones completas
          que requieren planificación quirúrgica avanzada.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Duración y mantenimiento</h2>
        <p className="mt-4 leading-8 text-slate-700">
          Con una correcta planificación quirúrgica, una buena higiene oral y revisiones periódicas,
          los implantes dentales pueden mantenerse en buen estado durante muchos años. El seguimiento
          adecuado es fundamental para su éxito a largo plazo.
        </p>

        <div className="mt-12 rounded-3xl border border-cyan-100 bg-cyan-50 p-8">
          <h3 className="text-xl font-semibold">¿Quieres valorar un tratamiento con implantes en Sabadell?</h3>
          <p className="mt-3 leading-7 text-slate-700">
            Nuestro equipo puede estudiar tu caso y orientarte tanto en tratamientos sencillos como
            en situaciones quirúrgicas más complejas.
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
