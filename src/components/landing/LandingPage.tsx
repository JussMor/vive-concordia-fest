import { useEffect, useRef } from "react";
import { loadGsap } from "../../lib/gsap";
import {
  benefits,
  featuredProgramImage,
  featuredProgramImageAlt,
  galleryItems,
  heroImage,
  heroImageAlt,
  importantDates,
  programBlocks,
  requirements,
  sponsors,
  storyImage,
  storyImageAlt,
} from "./landing-data";
import { useSectionReveal } from "./useSectionReveal";

function SectionShell({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useSectionReveal();

  return (
    <section id={id} ref={ref} className={`relative ${className}`}>
      {children}
    </section>
  );
}

function HeroSection() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (
      !ref.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let isDisposed = false;
    let cleanup = () => {};

    void loadGsap()
      .then(({ gsap }) => {
        if (isDisposed || !ref.current) {
          return;
        }

        const ctx = gsap.context(() => {
          gsap.fromTo(
            "[data-hero-kicker], [data-hero-title], [data-hero-copy], [data-hero-actions], [data-hero-panel]",
            { autoAlpha: 0, y: 56 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1,
              stagger: 0.12,
              ease: "power3.out",
            },
          );

          gsap.to("[data-hero-image]", {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }, ref);

        cleanup = () => ctx.revert();
      })
      .catch(() => {
        cleanup = () => {};
      });

    return () => {
      isDisposed = true;
      cleanup();
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-screen overflow-hidden px-4 pb-18 pt-30 sm:px-6 sm:pt-36"
    >
      <img
        data-hero-image
        src={heroImage}
        alt={heroImageAlt}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(219,39,119,0.28),transparent_35%),linear-gradient(180deg,rgba(19,19,19,0.14),#131313_72%)]" />
      <div className="mx-auto grid w-full max-w-360 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="max-w-5xl">
          <p data-hero-kicker className="hype-chip mb-6 inline-flex">
            14 al 16 de octubre de 2026 · La Concordia · Ecuador
          </p>
          <h1
            data-hero-title
            className="max-w-5xl font-headline text-[clamp(3.8rem,10vw,8.3rem)] leading-[0.86] font-black uppercase tracking-[-0.08em] text-white"
          >
            IV FEST
            <span className="mt-2 block text-[#ffb1c7]">
              Vive Concordia 2026
            </span>
          </h1>
          <p
            data-hero-copy
            className="mt-8 max-w-3xl text-base leading-8 text-white/72 sm:text-lg"
          >
            El  festival está diseñado como una plataforma de
            alto impacto escénico y mediático para posicionar la Concordia como centro 
            cultural nacional e internacional en Ecuador.
          </p>
          <div data-hero-actions className="mt-10 flex flex-wrap gap-4">
            <a href="#contacto" className="stage-button">
              Solicitar ser sponsor
            </a>
            <a href="#programacion" className="ghost-button">
              Ver show principal
            </a>
          </div>
        </div>

        <div data-hero-panel className="lg:justify-self-end">
          <div className="glass-panel max-w-md p-6 sm:p-8">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-white/46">
              Valor para sponsors
            </p>
            <div className="space-y-5">
              {[
                ["03", "noches de show principal"],
                ["360", "experiencia escénica y digital"],
                ["LATAM", "alcance cultural internacional"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-4"
                >
                  <span className="font-headline text-4xl font-black tracking-[-0.06em] text-white">
                    {value}
                  </span>
                  <span className="text-sm uppercase tracking-[0.2em] text-white/56">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MainShowSection() {
  return (
    <SectionShell id="show-principal" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-360 gap-10 md:grid-cols-12 md:items-center">
        <div data-animate className="md:col-span-5">
          <div className="relative overflow-visible rounded-4xl bg-[#1c1b1b]">
            <img
              src={storyImage}
              alt={storyImageAlt}
              className="h-full w-full rounded-4xl object-cover grayscale transition duration-700 hover:grayscale-0"
            />
            <div className="absolute -bottom-6 -right-4 rounded-[1.1rem] bg-[linear-gradient(135deg,#ffb1c7,#db2777)] p-6 text-[#650031] shadow-[0_30px_60px_-24px_rgba(219,39,119,0.75)] sm:-right-8 sm:w-56">
              <p className="font-headline text-4xl font-black tracking-[-0.06em]">
                2026
              </p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.2em]">
                Escenario premium para alianzas de marca
              </p>
            </div>
          </div>
        </div>
        <div data-animate className="md:col-span-7 md:pl-10">
          <p id="historia" className="section-kicker">
            Evento principal
          </p>
          <h2 className="section-title max-w-4xl">
            Un Show Cultural Diseñado para Máxima Visibilidad
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Vive Concordia 2026 propone una experiencia artística de alto
            impacto visual y narrativo, con pasacalles, galas y bloques
            coreográficos que concentran audiencia presencial y digital durante
            tres jornadas.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">
            El formato integra contenido cultural, activación territorial y
            cobertura multiplataforma, permitiendo a los sponsors asociarse con
            identidad, tradición y entretenimiento en un entorno de reputación
            positiva.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

function AudienceSection() {
  return (
    <SectionShell
      id="audiencia"
      className="bg-[#1c1b1b] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-360">
        <div data-animate className="mb-14 max-w-4xl">
          <p className="section-kicker">Alcance</p>
          <h2 className="section-title">Audiencia y Potencial de Marca</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {requirements.map((item) => (
            <article key={item.title} data-animate className="surface-card p-7">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ffb1c7]">
                Insight
              </p>
              <h3 className="mt-4 font-headline text-3xl font-black uppercase tracking-tighter text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-white/72">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function ProgramSection() {
  return (
    <SectionShell id="programacion" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-360">
        <div
          data-animate
          className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="section-kicker">Agenda</p>
            <h2 className="section-title">Programación del Show Principal</h2>
          </div>
          <p className="max-w-sm text-sm uppercase tracking-[0.22em] text-white/38">
            Tres jornadas para exhibición artística, impacto mediático y
            presencia de marca.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          <article
            data-animate
            className="relative overflow-hidden rounded-4xl bg-[#db2777] p-8 text-white lg:row-span-2"
          >
            <img
              src={featuredProgramImage}
              alt={featuredProgramImageAlt}
              className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-overlay"
            />
            <div className="relative z-10 flex h-full flex-col justify-end">
              <span className="mb-5 inline-flex w-fit rounded-[0.8rem] bg-black/18 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em]">
                Evento central
              </span>
              <h3 className="font-headline text-4xl font-black uppercase leading-none tracking-[-0.07em]">
                Pasacalle cultural y gala internacional
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/80">
                Momento clave para activaciones, presencia escénica de
                patrocinadores y contenido de alto valor para campañas de marca.
              </p>
            </div>
          </article>
          <div className="grid gap-6 lg:col-span-3">
            {programBlocks.map((block) => (
              <article
                key={block.label}
                data-animate
                className="surface-card p-8"
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <p className="font-headline text-4xl font-black uppercase tracking-[-0.06em] text-[#ffb1c7]">
                    {block.label}
                  </p>
                  <span className="hype-chip bg-[#353535] text-white">
                    {block.date}
                  </span>
                </div>
                <div className="space-y-6">
                  {block.items.map(([time, title]) => (
                    <div
                      key={title}
                      className="flex items-center justify-between gap-6"
                    >
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-white/34">
                          {time}
                        </p>
                        <h3 className="mt-2 text-xl font-bold text-white">
                          {title}
                        </h3>
                      </div>
                      <span className="text-2xl text-[#ffb1c7]">+</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function SponsorBenefitsSection() {
  return (
    <SectionShell
      id="sponsors"
      className="bg-[#353535] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto grid max-w-360 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div data-animate className="lg:sticky lg:top-32 lg:self-start">
          <p className="section-kicker">Patrocinios</p>
          <h2 className="section-title max-w-xl">Beneficios para Sponsors</h2>
          <p className="mt-6 max-w-md text-base leading-8 text-white/70">
            Cada alianza se diseña para convertir patrocinio en posicionamiento
            real: visibilidad, contenido, reputación y conexión comunitaria
            alrededor del evento principal.
          </p>
        </div>
        <div className="grid gap-5">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              data-animate
              className="glass-panel p-7 sm:p-8"
            >
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ffb1c7]">
                Beneficio
              </p>
              <h3 className="mt-4 text-2xl font-black uppercase tracking-[-0.04em] text-white">
                {benefit.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
                {benefit.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function DatesSection() {
  return (
    <SectionShell id="fechas" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-360">
        <div data-animate className="mb-14 text-center">
          <p className="section-kicker">Cronograma comercial</p>
          <h2 className="section-title mx-auto max-w-4xl">
            Fechas Clave para Sponsors
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-5">
          {importantDates.map(([label, value]) => (
            <article
              key={label}
              data-animate
              className="surface-card p-6 lg:min-h-58"
            >
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ffb1c7]">
                {label}
              </p>
              <p className="mt-6 font-headline text-3xl font-black uppercase tracking-tighter text-white">
                {value}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function GallerySection() {
  return (
    <SectionShell
      id="galeria"
      className="bg-[#1c1b1b] px-4 py-24 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-360">
        <div data-animate className="mb-10">
          <p className="section-kicker">Evidencia visual</p>
          <h3 className="font-headline text-4xl font-black uppercase tracking-tighter text-white">
            Galería del Evento Principal
          </h3>
        </div>
        <div className="columns-1 gap-6 md:columns-2 lg:columns-4">
          {galleryItems.map((item) => (
            <img
              key={item.src}
              data-animate
              src={item.src}
              alt={item.alt}
              className="mb-6 w-full rounded-[1.8rem] object-cover opacity-92 transition duration-500 hover:-translate-y-1 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function SponsorContactSection() {
  return (
    <SectionShell id="contacto" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-360 gap-10 lg:grid-cols-2 lg:items-start">
        <div data-animate>
          <p className="section-kicker">Alianzas</p>
          <h2 className="section-title max-w-xl">
            Aliados Estratégicos y Sponsors
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            La Corporación Cultural Sariri articula alianzas institucionales y
            comerciales para escalar el show principal, ampliar su alcance y
            asegurar una experiencia de alto nivel.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {sponsors.map((sponsor) => (
              <article key={sponsor} className="surface-card p-6">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffb1c7]">
                  Aliado
                </p>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  {sponsor}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div data-animate className="glass-panel p-8">
          <p className="section-kicker">Contacto comercial</p>
          <h3 className="mt-4 font-headline text-4xl font-black uppercase tracking-tighter text-white">
            Dossier Sponsors Vive Concordia 2026
          </h3>
          <p className="mt-4 text-base leading-8 text-white/70">
            Escríbenos para recibir propuesta comercial, paquetes de
            visibilidad, activaciones de marca y oportunidades de integración
            durante el show principal.
          </p>
          <div className="mt-8 space-y-3 text-sm text-white/75">
            <p>Correo: contacto@viveconcordiafest.com</p>
            <p>Instagram: @viveconcordiafest</p>
            <p>Facebook: Vive Concordia Festival de Danza</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:contacto@viveconcordiafest.com"
              className="stage-button"
            >
              Enviar solicitud comercial
            </a>
            <a href="#show-principal" className="ghost-button">
              Ver concepto del show
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <MainShowSection />
      <AudienceSection />
      <ProgramSection />
      <SponsorBenefitsSection />
      <DatesSection />
      <GallerySection />
      <SponsorContactSection />
    </main>
  );
}
