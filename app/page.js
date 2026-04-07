// SEO CONFIG FOR DOMAIN
// Recommended domain: https://cirujanomaxilofacialsabadell.com
// Main SEO title:
// "Cirujano Maxilofacial en Sabadell | Muelas del juicio e implantes dentales"
// Meta description:
// "Unidad de Cirugía Oral y Maxilofacial en el Hospital Quirónsalud del Vallès. Especialistas en muelas del juicio, cordales incluidos e implantes dentales en Sabadell y el Vallès."

export default function LandingQuironValles() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Unidad de Cirugía Oral y Maxilofacial - Hospital Quirónsalud del Vallès',
    description:
      'Unidad especializada en cirugía oral y maxilofacial en Sabadell. Tratamientos de muelas del juicio, cordales incluidos, quistes maxilares e implantes dentales. Atendemos pacientes privados y de aseguradoras con cobertura en el Hospital Quirónsalud del Vallès.',
    telephone: '+34 679 176 144',
    url: 'https://cirujanomaxilofacialsabadell.com',
    image: 'https://cirujanomaxilofacialsabadell.com/logo-ocm.png',
    medicalSpecialty: 'Oral and Maxillofacial Surgery',
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

  const treatments = [
    {
      title: 'Muelas del juicio',
      text: 'Valoración y extracción de cordales incluidos, semiincluidos o complejos con un enfoque quirúrgico seguro y personalizado.',
    },
    {
      title: 'Implantes dentales',
      text: 'Tratamientos con implantes en casos sencillos y complejos, con planificación precisa para recuperar función y estética.',
    },
    {
      title: 'Cirugía oral compleja',
      text: 'Abordaje de quistes maxilares, dientes incluidos, infecciones y otras patologías de cirugía oral.',
    },
  ];

  const doctors = [
    {
      name: 'Dr. Alfonso Mogedas Vegara',
      role: 'Jefe de Servicio',
      img: '/doctors/mogedas.jpg',
      position: 'center 32%',
      bio: 'Licenciado en Medicina y Cirugía por la UMH de Alicante. Especialista en Cirugía Oral y Maxilofacial vía MIR en el Hospital Vall d’Hebron. Doctor en Medicina y Cirugía Cum Laude por la UAB y Fellow del European Board of Oral and Maxillofacial Surgery. Actualmente es adjunto del Servicio de Cirugía Oral y Maxilofacial del Hospital Parc Taulí y profesor colaborador de la UAB.',
    },
    {
      name: 'Dra. Laia Fité',
      role: 'Cirujana Oral y Maxilofacial',
      img: '/doctors/fite.jpg',
      position: 'center 34%',
      bio: 'Licenciada en Medicina y Cirugía, especialista vía MIR en Cirugía Oral y Maxilofacial en el Hospital Vall d’Hebron de Barcelona. Desde 2019 combina la actividad sanitaria pública en el Hospital Parc Taulí de Sabadell con la práctica privada. Formada en patología de glándulas salivales, patología infantil, cirugía del sueño, así como implantología y cirugía oral.',
    },
    {
      name: 'Dr. Nil Valentínes',
      role: 'Cirujano Oral y Maxilofacial',
      img: '/doctors/valentines.png',
      position: 'center 34%',
      bio: 'Cirujano especializado en cirugía oral y maxilofacial.',
    },
    {
      name: 'Dra. Paula Donate',
      role: 'Cirujana Oral y Maxilofacial',
      img: '/doctors/donate.jpg',
      position: 'center 30%',
      bio: 'Licenciada en Medicina por la Universidad de Cantabria en 2014 y Doctora en Medicina por la Universidad de Oviedo en 2020. Realizó la residencia en el Hospital Universitario Central de Asturias. Posteriormente continuó su formación con másteres y cursos, entre los que destacan: Máster en Implantología y Cirugía Oral por la Universidad Cardenal Herrera en 2021, curso de especialización en Medicina Estética Facial por la Universidad Complutense de Madrid en 2021 y Posgrado Europeo en Oncología y Cirugía de Cabeza y Cuello en 2024.',
    },
    {
      name: 'Dr. Radek Lewko',
      role: 'Cirujano Oral y Maxilofacial',
      img: '/doctors/lewko.png',
      position: 'center 33%',
      bio: 'Cirujano especializado en cirugía oral y maxilofacial. “La medicina ha sido mi pasión desde pequeño. Durante los años de carrera despertó mi interés por la anatomía de cabeza y cuello, su complejidad y la precisión necesaria en esta área anatómica. Esto me ha llevado a especializarme como cirujano oral y maxilofacial, prestando atención a cada detalle para conseguir la recuperación precoz de mis pacientes”.',
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
              alt="Unidad de Cirugía Oral y Maxilofacial"
              className="h-12 w-auto"
            />
            <div className="text-sm font-medium text-slate-600">
              Unidad de Cirugía Oral y Maxilofacial
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
                Cirugía Oral y Maxilofacial · Hospital Quirónsalud del Vallès
              </span>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-cyan-900 lg:text-5xl">
                Especialistas en muelas del juicio, cirugía oral compleja e implantes
                dentales en Sabadell
              </h1>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                Atendemos a pacientes de Sabadell y poblaciones cercanas que necesitan
                extracción de cordales incluidos, tratamiento de quistes maxilares e
                implantes dentales, tanto en casos sencillos como complejos. Atendemos
                pacientes privados y de aseguradoras con cobertura en el Hospital
                Quirónsalud del Vallès.
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
                  Tratamientos destacados
                </p>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li>• Extracción de muelas del juicio complejas</li>
                  <li>• Cordales incluidos y dientes retenidos</li>
                  <li>• Quistes maxilares y cirugía oral</li>
                  <li>• Implantes dentales unitarios y múltiples</li>
                  <li>• Rehabilitación de casos complejos</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold">1ª planta</p>
                <p className="mt-2 text-slate-600">
                  Ubicación de la consulta en el hospital
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold">Sabadell</p>
                <p className="mt-2 text-slate-600">
                  Fácil acceso para pacientes del Vallès
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
              A personas que buscan un cirujano maxilofacial en Sabadell o en el Vallès
              para resolver problemas como muelas del juicio retenidas, dolor e infección
              de cordales, quistes de los maxilares o colocación de implantes dentales.
              Atendemos pacientes privados y trabajamos con las principales mutuas médicas
              con cobertura en el hospital.
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
              <h2 className="text-3xl font-bold tracking-tight">Qué tratamos</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Tratamos patología habitual y compleja de cirugía oral y maxilofacial,
                con especial dedicación a la extracción de cordales incluidos, la cirugía
                oral avanzada y la colocación de implantes dentales.
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
                Equipo de cirujanos maxilofaciales
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Equipo de cirugía oral y maxilofacial con experiencia en cirugía de
                cordales incluidos, implantes dentales y tratamiento de patología oral
                compleja. El Dr. Alfonso Mogedas Vegara es el jefe de servicio y
                cirujano maxilofacial responsable de la unidad.
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
                  <span className="font-semibold">Teléfono y WhatsApp:</span> 679 176
                  144
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
              Extracción de muelas del juicio en Sabadell
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Las muelas del juicio o cordales pueden provocar dolor, infecciones
              repetidas, inflamación de la encía o daño a los dientes vecinos. Nuestro
              equipo de cirugía oral y maxilofacial en Sabadell está especializado en la
              extracción de cordales incluidos o complejos, utilizando técnicas
              quirúrgicas seguras y una planificación individualizada para cada paciente.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Valoramos cada caso con radiografías o TAC dental cuando es necesario para
              determinar la posición exacta del cordal y planificar la cirugía de forma
              precisa.
            </p>
          </div>
        </section>

        <section className="border-y border-cyan-100 bg-cyan-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight">
                Implantes dentales en Sabadell
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Los implantes dentales permiten sustituir dientes perdidos recuperando la
                función masticatoria y la estética. En nuestra consulta del Hospital
                Quirónsalud del Vallès realizamos tanto implantes unitarios como
                rehabilitaciones más complejas.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                También tratamos casos con pérdida de hueso, dientes retenidos o
                situaciones quirúrgicas complejas que requieren la valoración de un
                cirujano maxilofacial.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              Unidad de Cirugía Oral y Maxilofacial en Sabadell
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              La Unidad de Cirugía Oral y Maxilofacial del Hospital Quirónsalud del
              Vallès está orientada al diagnóstico y tratamiento quirúrgico de patologías
              de la cavidad oral y de los maxilares. Nuestro equipo atiende a pacientes
              de Sabadell y del conjunto del Vallès que requieren procedimientos de
              cirugía oral avanzada.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Entre los tratamientos más frecuentes se encuentran la extracción de muelas
              del juicio complejas, el tratamiento de cordales incluidos, la cirugía de
              quistes maxilares y la colocación de implantes dentales. También valoramos
              situaciones más complejas que requieren planificación quirúrgica
              individualizada.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Nuestro objetivo es ofrecer una atención médica especializada, con un
              enfoque seguro y personalizado para cada paciente, utilizando técnicas
              actuales de cirugía oral y maxilofacial dentro del entorno hospitalario del
              Hospital Quirónsalud del Vallès.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Preguntas frecuentes</h2>

          <div className="mt-8 max-w-3xl space-y-6 text-slate-700">
            <div>
              <h3 className="text-lg font-semibold">
                ¿Cuándo es necesario quitar las muelas del juicio?
              </h3>
              <p className="mt-2">
                La extracción de las muelas del juicio suele recomendarse cuando
                provocan dolor, infecciones repetidas, inflamación de la encía, caries
                en el diente vecino o cuando permanecen retenidas dentro del hueso. Cada
                caso debe valorarse mediante exploración clínica y radiografías.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                ¿Es dolorosa la extracción de una muela del juicio?
              </h3>
              <p className="mt-2">
                La intervención se realiza habitualmente con anestesia local y, en
                algunos casos, con sedación. Durante el procedimiento el paciente no
                siente dolor. Después de la cirugía puede aparecer inflamación o
                molestias leves que normalmente se controlan con medicación y cuidados
                postoperatorios.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                ¿Cuánto tiempo dura la recuperación?
              </h3>
              <p className="mt-2">
                La recuperación suele ser rápida. La mayoría de los pacientes pueden
                retomar sus actividades habituales en pocos días. La inflamación suele
                disminuir progresivamente durante la primera semana siguiendo las
                recomendaciones del cirujano.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                ¿Cuándo es recomendable colocar un implante dental?
              </h3>
              <p className="mt-2">
                Los implantes dentales están indicados cuando se ha perdido uno o varios
                dientes y se desea recuperar la función masticatoria y la estética.
                Antes de realizar el tratamiento se evalúa la cantidad y calidad del
                hueso mediante radiografías o TAC dental.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                ¿Cuánto tiempo dura un implante dental?
              </h3>
              <p className="mt-2">
                Con una correcta planificación quirúrgica y una buena higiene oral, los
                implantes dentales pueden mantenerse en buen estado durante muchos años.
                Las revisiones periódicas y el mantenimiento adecuado son fundamentales
                para su éxito a largo plazo.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Información ampliada sobre tratamientos
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-700">
            Para pacientes que desean conocer más detalles sobre los tratamientos más
            frecuentes de cirugía oral, hemos preparado páginas específicas con
            información ampliada.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <a
              href="/muelas-del-juicio-sabadell"
              className="block rounded-3xl border border-cyan-100 p-6 transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">
                Extracción de muelas del juicio en Sabadell
              </h3>
              <p className="mt-3 text-slate-700">
                Información detallada sobre cordales incluidos, síntomas frecuentes,
                cuándo es recomendable la extracción y cómo es el proceso de
                recuperación.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-cyan-900">
                Ver información completa →
              </span>
            </a>

            <a
              href="/implantes-dentales-sabadell"
              className="block rounded-3xl border border-cyan-100 p-6 transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">
                Implantes dentales en Sabadell
              </h3>
              <p className="mt-3 text-slate-700">
                Explicación completa sobre el tratamiento con implantes dentales,
                planificación quirúrgica, casos complejos y resultados esperables.
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
              ¿Tienes dolor por una muela del juicio o necesitas valorar implantes
              dentales?
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/90">
              Nuestro equipo de cirugía oral y maxilofacial en Sabadell puede valorar tu
              caso y orientarte sobre el tratamiento más adecuado.
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
