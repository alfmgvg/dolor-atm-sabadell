// SEO CONFIG FOR DOMAIN
// Recommended domain: https://doloratmsabadell.com
// Main SEO title:
// "Dolor ATM en Sabadell | Bruxismo, dolor orofacial y migrañas"
// Meta description:
// "Unidad especializada en dolor de ATM, dolor orofacial, bruxismo, migrañas y rehabilitación neuroclusal en el Hospital Quirónsalud del Vallès, Sabadell."

export default function LandingQuironValles() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Unidad de ATM y Dolor Orofacial - Hospital Quirónsalud del Vallès',
    description:
      'Unidad especializada en dolor de ATM, dolor orofacial, bruxismo, cefaleas y migrañas relacionadas con la mandíbula. Tratamiento funcional mediante rehabilitación neuroclusal y ortodoncia en Sabadell.',
    telephone: '+34 679 176 144',
    url: 'https://doloratmsabadell.com',
    image: 'https://doloratmsabadell.com/logo-ocm.png',
    medicalSpecialty: ['Dentistry', 'Orthodontics'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Passeig Rubió i Ors, 23',
      addressLocality: 'Sabadell',
      addressRegion: 'Barcelona',
      postalCode: '08203',
      addressCountry: 'ES',
    },
    areaServed: [
      'Sabadell',
      'Terrassa',
      'Sant Cugat del Vallès',
      'Rubí',
      'Cerdanyola del Vallès',
      'Barberà del Vallès',
      'Castellar del Vallès',
      'Sant Quirze del Vallès',
      'Barcelona',
    ],
    sameAs: [
      'https://www.quironsalud.com/valles/es/cita-medica#r!/n!/29?dir=next',
    ],
  };

  const symptoms = [
    {
      title: 'Dolor mandibular',
      text: 'Molestias al abrir o cerrar la boca, dolor al masticar o sensación de sobrecarga en la mandíbula.',
    },
    {
      title: 'Dolor de ATM',
      text: 'Chasquidos, bloqueos, limitación de apertura o dolor en la articulación temporomandibular.',
    },
    {
      title: 'Bruxismo',
      text: 'Apretar o rechinar los dientes, sobrecarga muscular, desgaste dental y dolor facial.',
    },
    {
      title: 'Dolor orofacial',
      text: 'Molestias en la cara, zona preauricular, musculatura masticatoria o sensación de tensión persistente.',
    },
    {
      title: 'Migrañas y cefaleas',
      text: 'Dolores de cabeza recurrentes que en algunos pacientes pueden relacionarse con alteraciones funcionales mandibulares.',
    },
    {
      title: 'Problemas funcionales',
      text: 'Alteraciones de la oclusión y la función mandibular que pueden influir en la ATM y en el dolor crónico.',
    },
  ];

  const treatments = [
    {
      title: 'Rehabilitación neuroclusal',
      text: 'Enfoque funcional orientado a mejorar la relación oclusal y la función mandibular para tratar la causa del problema.',
    },
    {
      title: 'Ortodoncia funcional',
      text: 'Tratamientos ortodóncicos orientados a la estabilidad, la función y el equilibrio oclusal.',
    },
    {
      title: 'Bruxismo y férulas',
      text: 'Valoración individualizada del bruxismo y uso de férulas cuando están indicadas dentro del plan global de tratamiento.',
    },
  ];

  const doctors = [
    {
      name: 'Dr. Florencio Páez',
      role: 'Especialista en rehabilitación neuroclusal y ortodoncia',
      img: '/doctors/florencio-paez.jpg',
      position: 'center 30%',
      bio: 'El Dr. Florencio Páez centra su práctica en el diagnóstico y tratamiento funcional de pacientes con dolor de ATM, dolor orofacial, bruxismo y cefaleas relacionadas con alteraciones mandibulares. Su enfoque se basa especialmente en la rehabilitación neuroclusal y la ortodoncia funcional, con una valoración individualizada de cada caso.',
    },
    {
      name: 'Dra. Maria Jesús Díez',
      role: 'Especialista en ATM y dolor orofacial',
      img: '/doctors/maria-jesus-diez.jpg',
      position: 'center 30%',
      bio: 'La Dra. Maria Jesús Díez forma parte del equipo de atención a pacientes con dolor mandibular, trastornos de la articulación temporomandibular y dolor orofacial. Participa en la valoración clínica y en el planteamiento terapéutico personalizado según la función, la sintomatología y las necesidades de cada paciente.',
    },
  ];

  const nearbyCities = [
    'Sabadell',
    'Terrassa',
    'Sant Cugat del Vallès',
    'Rubí',
    'Cerdanyola del Vallès',
    'Barberà del Vallès',
    'Castellar del Vallès',
    'Sant Quirze del Vallès',
    'Barcelona',
  ];

  function TeamMemberCard({ doctor }) {
    return (
      <article className="rounded-3xl border border-cyan-100 bg-white p-5 shadow-sm">
        <div className="mb-4 h-72 overflow-hidden rounded-2xl bg-slate-100">
          <img
            src={doctor.img}
            alt={doctor.name}
            className="block h-full w-full object-cover"
            style={{ objectPosition: doctor.position || 'center 35%' }}
            loading="lazy"
          />
        </div>

        <h3 className="text-lg font-semibold">{doctor.name}</h3>
        <p className="mt-1 text-sm font-medium text-cyan-700">{doctor.role}</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">{doctor.bio}</p>
      </article>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <header className="sticky top-0 z-40 w-full border-b border-cyan-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/logo-ocm.png"
              alt="Unidad de ATM y Dolor Orofacial"
              className="h-12 w-auto"
            />
            <div className="text-sm font-medium text-slate-600">
              Unidad de ATM y Dolor Orofacial
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/logo-quiron-valles.png"
              alt="Hospital Quirónsalud del Vallès"
              className="h-10 w-auto"
            />
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-white pb-24 text-cyan-900 selection:bg-cyan-100">
        <section className="border-b border-cyan-100 bg-cyan-50">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
            <div>
              <span className="inline-flex rounded-full border border-slate-300 px-4 py-1 text-sm font-medium text-slate-700">
                ATM y dolor orofacial · Hospital Quirónsalud del Vallès
              </span>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-cyan-900 lg:text-5xl">
                Dolor de mandíbula, bruxismo, migrañas y problemas de ATM en Sabadell
              </h1>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                Valoramos y tratamos pacientes con dolor mandibular, dolor orofacial,
                bruxismo, cefaleas y trastornos de la articulación temporomandibular.
                Enfoque funcional mediante rehabilitación neuroclusal y ortodoncia en
                el Hospital Quirónsalud del Vallès.
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
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-cyan-900 transition hover:bg-cyan-100"
                >
                  Llamar al 679 176 144
                </a>

                <a
                  href="https://wa.me/34679176144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-cyan-900 transition hover:bg-cyan-100"
                >
                  WhatsApp
                </a>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                También puedes escribirnos por WhatsApp al 679 176 144 para pedir
                información o solicitar cita.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm sm:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Motivos de consulta frecuentes
                </p>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li>• Dolor al abrir la boca o al masticar</li>
                  <li>• Chasquidos o bloqueos mandibulares</li>
                  <li>• Bruxismo y sobrecarga muscular</li>
                  <li>• Dolor facial o en la zona del oído</li>
                  <li>• Migrañas y cefaleas relacionadas con la mandíbula</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold">ATM</p>
                <p className="mt-2 text-slate-600">
                  Diagnóstico y tratamiento funcional
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold">RNO</p>
                <p className="mt-2 text-slate-600">
                  Rehabilitación neuroclusal y ortodoncia
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              ¿A quién va dirigida esta página?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              A pacientes que presentan dolor de mandíbula, chasquidos en la ATM,
              bruxismo, tensión facial, cefaleas o migrañas que podrían estar
              relacionadas con alteraciones funcionales mandibulares y oclusales.
              Atendemos pacientes privados y trabajamos con las principales mutuas
              médicas con cobertura en el hospital.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {nearbyCities.map((city) => (
              <span
                key={city}
                className="rounded-full bg-cyan-100 px-4 py-2 text-sm text-slate-700"
              >
                {city}
              </span>
            ))}
          </div>
        </section>

        <section className="border-y border-cyan-100 bg-cyan-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight">Síntomas que valoramos</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                No todos los dolores mandibulares son iguales. Por eso es importante
                realizar una valoración clínica detallada para identificar el origen
                del problema y orientar correctamente el tratamiento.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {symptoms.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              ¿Qué es la ATM y por qué puede doler?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              La articulación temporomandibular conecta la mandíbula con el cráneo y
              participa en funciones tan importantes como hablar, masticar o abrir la
              boca. Cuando existe una alteración funcional, muscular u oclusal,
              pueden aparecer dolor, chasquidos, bloqueos, tensión facial o dolores
              de cabeza recurrentes.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Muchos pacientes consultan después de meses o años de molestias sin un
              diagnóstico claro. Una valoración especializada permite entender mejor
              si el dolor tiene relación con la ATM, la musculatura o la función
              mandibular.
            </p>
          </div>
        </section>

        <section className="border-y border-cyan-100 bg-cyan-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight">Tratamientos que realizamos</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                El tratamiento se adapta a cada paciente según el origen del dolor,
                la función mandibular, el patrón oclusal y la clínica acompañante.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {treatments.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Equipo especializado en ATM y dolor orofacial
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                El equipo está formado por el Dr. Florencio Páez y la Dra. Maria
                Jesús Díez, con dedicación a la valoración y tratamiento de
                pacientes con dolor mandibular, bruxismo, trastornos de ATM y
                alteraciones funcionales relacionadas con la oclusión.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {doctors.map((doctor) => (
                  <TeamMemberCard key={doctor.name} doctor={doctor} />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">Dónde estamos</h2>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                Hospital Quirónsalud del Vallès
                <br />
                Passeig Rubió i Ors, 23
                <br />
                08203 Sabadell, Barcelona
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-cyan-100 shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=Hospital+Quir%C3%B3nsalud+del+Vall%C3%A8s+Sabadell&output=embed"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Hospital Quirónsalud del Vallès"
                />
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Hospital+Quironsalud+del+Valles+Sabadell"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-2xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                Cómo llegar en Google Maps
              </a>

              <div className="mt-8 space-y-3 text-slate-700">
                <p>
                  <span className="font-semibold">Teléfono y WhatsApp:</span> 679 176 144
                </p>
                <p>
                  <span className="font-semibold">Consulta:</span> 1ª planta
                </p>
                <p>
                  <span className="font-semibold">Reserva online:</span>{' '}
                  <a
                    href="https://www.quironsalud.com/valles/es/cita-medica#r!/n!/29?dir=next"
                    className="underline"
                  >
                    Pedir cita en Quirónsalud
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              Bruxismo y dolor mandibular en Sabadell
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              El bruxismo puede provocar sobrecarga muscular, dolor en la mandíbula,
              sensación de tensión al despertar, desgaste dental y molestias en la
              zona de la ATM. No siempre se manifiesta igual, por lo que es
              importante valorar cada caso de forma individual.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              En consulta estudiamos la función mandibular, la musculatura y la
              oclusión para entender mejor el origen de las molestias y plantear una
              estrategia terapéutica personalizada.
            </p>
          </div>
        </section>

        <section className="border-y border-cyan-100 bg-cyan-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight">
                Migrañas, cefaleas y dolor orofacial
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Algunos pacientes presentan migrañas, cefaleas o dolor facial que se
                agravan con el esfuerzo mandibular, el bruxismo o los trastornos de
                ATM. Cuando existe una relación funcional, el estudio oclusal y
                mandibular puede aportar información relevante.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Nuestro objetivo es ayudar a identificar si existe un componente
                mandibular u oclusal en el dolor y orientar el tratamiento desde un
                punto de vista funcional.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              Rehabilitación neuroclusal y ortodoncia funcional
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              La rehabilitación neuroclusal busca optimizar la función del sistema
              masticatorio y la relación oclusal, especialmente en pacientes con
              alteraciones funcionales, sobrecarga muscular y sintomatología en ATM.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              En determinados pacientes, la ortodoncia funcional puede formar parte
              del abordaje para mejorar la estabilidad, la función y el equilibrio
              del sistema.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              El plan de tratamiento siempre debe individualizarse según la clínica,
              los hallazgos de la exploración y las necesidades concretas de cada
              persona.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Preguntas frecuentes</h2>

          <div className="mt-8 max-w-3xl space-y-6 text-slate-700">
            <div>
              <h3 className="text-lg font-semibold">
                ¿Cómo sé si mi dolor viene de la ATM?
              </h3>
              <p className="mt-2">
                El dolor de ATM puede acompañarse de chasquidos, bloqueos,
                limitación de apertura, dolor al masticar o molestias cerca del
                oído. Una exploración especializada ayuda a valorar si la ATM está
                implicada y si existen factores musculares u oclusales asociados.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                ¿El bruxismo puede causar dolor de cabeza?
              </h3>
              <p className="mt-2">
                Sí. En algunos pacientes, el bruxismo y la sobrecarga muscular se
                relacionan con cefaleas, sensación de presión facial o dolor al
                despertar. No siempre es la única causa, pero conviene valorarlo.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                ¿Las migrañas pueden relacionarse con la mandíbula?
              </h3>
              <p className="mt-2">
                En ciertos casos puede existir una relación entre la función
                mandibular, la musculatura masticatoria y determinados dolores de
                cabeza. La valoración clínica permite estudiar si hay un componente
                orofacial o funcional implicado.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                ¿Qué es la rehabilitación neuroclusal?
              </h3>
              <p className="mt-2">
                Es un enfoque orientado a mejorar la función oclusal y mandibular,
                buscando estabilidad y equilibrio del sistema masticatorio según las
                características de cada paciente.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                ¿Todos los pacientes con dolor mandibular necesitan férula?
              </h3>
              <p className="mt-2">
                No siempre. El tratamiento depende del origen del problema. En
                algunos pacientes puede estar indicada una férula, pero en otros el
                abordaje principal puede centrarse en la función, la oclusión o la
                ortodoncia.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Información ampliada
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-700">
            Para pacientes que desean conocer mejor cada problema y cada tratamiento,
            prepararemos páginas específicas con información más detallada.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <a
              href="/dolor-atm-sabadell"
              className="block rounded-3xl border border-cyan-100 p-6 transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">
                Dolor de ATM en Sabadell
              </h3>
              <p className="mt-3 text-slate-700">
                Información sobre síntomas, chasquidos, bloqueos mandibulares y
                cuándo conviene realizar una valoración especializada.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-cyan-900">
                Ver información completa →
              </span>
            </a>

            <a
              href="/bruxismo-sabadell"
              className="block rounded-3xl border border-cyan-100 p-6 transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">
                Bruxismo en Sabadell
              </h3>
              <p className="mt-3 text-slate-700">
                Información sobre apretar los dientes, desgaste dental, dolor
                mandibular y opciones de tratamiento.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-cyan-900">
                Ver información completa →
              </span>
            </a>
          </div>
        </section>

        <section className="bg-gradient-to-r from-cyan-600 to-rose-400 text-white">
          <div className="mx-auto max-w-6xl px-6 py-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              ¿Tienes dolor de mandíbula, bruxismo o problemas de ATM?
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/90">
              Nuestro equipo puede valorar tu caso y orientarte sobre el tratamiento
              más adecuado desde un enfoque funcional e individualizado.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.quironsalud.com/valles/es/cita-medica#r!/n!/29?dir=next"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-cyan-900 shadow-sm transition hover:opacity-90"
              >
                Pedir cita online
              </a>

              <a
                href="tel:+34679176144"
                className="rounded-2xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Llamar ahora
              </a>

              <a
                href="https://wa.me/34679176144"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <a
          href="https://wa.me/34679176144"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp"
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-600"
        >
          <span className="text-lg">💬</span>
          WhatsApp
        </a>

        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-cyan-100 bg-white/95 p-3 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-6xl gap-3">
            <a
              href="tel:+34679176144"
              className="flex-1 rounded-2xl bg-cyan-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-700"
            >
              Llamar
            </a>

            <a
              href="https://wa.me/34679176144"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
