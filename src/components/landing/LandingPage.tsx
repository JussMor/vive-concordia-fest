import { useEffect, useRef } from "react";
import { loadGsap } from "../../lib/gsap";
import {
  artists,
  featuredSessionImage,
  galleryImages,
  heroImage,
  passes,
  storyImage,
  workshops,
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
      <div
        data-hero-image
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-55"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(219,39,119,0.28),transparent_35%),linear-gradient(180deg,rgba(19,19,19,0.14),#131313_72%)]" />
      <div className="mx-auto grid w-full max-w-360 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="max-w-5xl">
          <p data-hero-kicker className="hype-chip mb-6 inline-flex">
            15-22 Oct 2026 London UK
          </p>
          <h1
            data-hero-title
            className="max-w-5xl font-headline text-[clamp(4.2rem,12vw,9.5rem)] leading-[0.86] font-black uppercase tracking-[-0.08em] text-white"
          >
            Dance the city
            <span className="block text-[#ffb1c7]">into voltage</span>
          </h1>
          <p
            data-hero-copy
            className="mt-8 max-w-2xl text-base leading-8 text-white/72 sm:text-lg"
          >
            Vive Concordia Fest turns the landing page into a festival poster in
            motion: global artists, nocturnal workshops, and layered atmospheres
            built for impact on desktop and mobile.
          </p>
          <div data-hero-actions className="mt-10 flex flex-wrap gap-4">
            <a href="#tickets" className="stage-button">
              Claim Festival Pass
            </a>
            <a href="#lineup" className="ghost-button">
              Explore Lineup
            </a>
          </div>
        </div>

        <div data-hero-panel className="lg:justify-self-end">
          <div className="glass-panel max-w-md p-6 sm:p-8">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-white/46">
              Pulse Index
            </p>
            <div className="space-y-5">
              {[
                ["200+", "performers from 30 countries"],
                ["09", "nights of stage collisions"],
                ["24", "intensive workshop rooms"],
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

function StorySection() {
  return (
    <SectionShell className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-360 gap-10 md:grid-cols-12 md:items-center">
        <div data-animate className="md:col-span-5">
          <div className="relative overflow-visible rounded-4xl bg-[#1c1b1b]">
            <img
              src={storyImage}
              alt="Festival dancers in vivid costume"
              className="h-full w-full rounded-4xl object-cover grayscale transition duration-700 hover:grayscale-0"
            />
            <div className="absolute -bottom-6 -right-4 rounded-[1.1rem] bg-[linear-gradient(135deg,#ffb1c7,#db2777)] p-6 text-[#650031] shadow-[0_30px_60px_-24px_rgba(219,39,119,0.75)] sm:-right-8 sm:w-52">
              <p className="font-headline text-4xl font-black tracking-[-0.06em]">
                50+
              </p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.2em]">
                Global dance styles colliding live
              </p>
            </div>
          </div>
        </div>
        <div data-animate className="md:col-span-7 md:pl-10">
          <p className="section-kicker">Creative North Star</p>
          <h2 className="section-title max-w-3xl">
            A collision of movement, city light, and staged editorial tension.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
            The experience leans into asymmetry, negative space, and dark
            atmospheric layering. This is not a template landing page. It is a
            living poster for a dance festival with rhythm built into the
            interface itself.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              [
                "Performers",
                "Over 200 elite artists shaping a week-long city takeover.",
              ],
              [
                "Workshops",
                "Immersive masterclasses from street forms to neo-classical hybrids.",
              ],
            ].map(([title, copy]) => (
              <article key={title} className="surface-card p-6">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ffb1c7]">
                  {title}
                </p>
                <p className="mt-3 text-base leading-7 text-white/74">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function ScheduleSection() {
  return (
    <SectionShell className="bg-[#1c1b1b] px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-360">
        <div
          data-animate
          className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="section-kicker">Festival Flow</p>
            <h2 className="section-title">
              Built like a setlist, not a spreadsheet.
            </h2>
          </div>
          <p className="max-w-sm text-sm uppercase tracking-[0.22em] text-white/38">
            Program blocks stretch, stack, and hit with contrast instead of
            rigid dividers.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          <article data-animate className="surface-card p-8 lg:col-span-2">
            <div className="mb-8 flex items-start justify-between gap-4">
              <p className="font-headline text-4xl font-black uppercase tracking-[-0.06em] text-[#ffb1c7]">
                Day 01
              </p>
              <span className="hype-chip bg-[#353535] text-white">Oct 15</span>
            </div>
            <div className="space-y-7">
              {[
                ["10:00", "Opening Ceremony: World Pulse"],
                ["14:00", "The Art of Vogue Showcase"],
                ["20:00", "Main Stage: Afro-Fusion Night"],
              ].map(([time, title]) => (
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

          <article
            data-animate
            className="relative overflow-hidden rounded-4xl bg-[#db2777] p-8 text-white lg:row-span-2"
          >
            <img
              src={featuredSessionImage}
              alt="Midnight dance performance"
              className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-overlay"
            />
            <div className="relative z-10 flex h-full flex-col justify-end">
              <span className="mb-5 inline-flex w-fit rounded-[0.8rem] bg-black/18 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em]">
                Flash performance
              </span>
              <h3 className="font-headline text-4xl font-black uppercase leading-none tracking-[-0.07em]">
                Midnight Cyber-Jazz Improv
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/80">
                An underground session in the Pavilion basement with live
                reactive visuals and unscripted sets.
              </p>
            </div>
          </article>

          <article data-animate className="surface-card p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <p className="text-2xl font-black uppercase tracking-[-0.04em] text-white/62">
                Day 02
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/35">
                Oct 16
              </span>
            </div>
            <div className="space-y-5 text-white">
              {[
                "Krump Essentials",
                "Dance & Digital Art",
                "Ballroom Heritage",
              ].map((item) => (
                <div key={item} className="rounded-[1.4rem] bg-white/4 p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#ffb1c7]">
                    Session
                  </p>
                  <p className="mt-2 font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article
            data-animate
            className="rounded-4xl bg-[#353535] p-8 text-white lg:col-span-2"
          >
            <h3 className="font-headline text-3xl font-black uppercase leading-tight tracking-tighter">
              Want the full lineup in your pocket?
            </h3>
            <a href="#tickets" className="stage-button mt-8 inline-flex">
              Download digital guide
            </a>
          </article>
        </div>
      </div>
    </SectionShell>
  );
}

function ArtistsSection() {
  return (
    <SectionShell id="lineup" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-360">
        <div data-animate className="mb-14 text-center">
          <p className="section-kicker">Master of Motion</p>
          <h2 className="section-title mx-auto max-w-4xl">
            Artists framed like cast posters, offset and ready to move.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {artists.map((artist) => (
            <article
              key={artist.name}
              data-animate
              className={`group relative aspect-3/4 overflow-hidden rounded-4xl ${artist.offset ? "lg:translate-y-10" : ""}`}
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(19,19,19,0.92))] opacity-70 transition duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-headline text-3xl font-black uppercase tracking-tighter text-white">
                  {artist.name}
                </h3>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.22em] text-[#ffb1c7]">
                  {artist.style}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function WorkshopsSection() {
  return (
    <SectionShell
      id="workshops"
      className="bg-[#353535] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto grid max-w-360 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div data-animate className="lg:sticky lg:top-32 lg:self-start">
          <p className="section-kicker">Elevate Your Skills</p>
          <h2 className="section-title max-w-xl">
            Masterclasses built for proximity, pressure, and precision.
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-white/70">
            Limited-capacity sessions keep the feedback direct and the energy
            high. Each room feels like a rehearsal studio moments before
            curtain.
          </p>
        </div>
        <div className="space-y-5">
          {workshops.map((workshop) => (
            <article
              key={workshop.title}
              data-animate
              className="glass-panel flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:p-8"
            >
              <img
                src={workshop.image}
                alt={workshop.title}
                className="h-20 w-20 rounded-full object-cover grayscale transition duration-500 hover:grayscale-0"
              />
              <div className="flex-1">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-[-0.04em] text-white">
                      {workshop.title}
                    </h3>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/36">
                      Level: {workshop.level}
                    </p>
                  </div>
                  <span className="text-sm font-black uppercase tracking-[0.18em] text-[#ffb1c7]">
                    {workshop.status}
                  </span>
                </div>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
                  {workshop.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function GallerySection() {
  return (
    <SectionShell className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-360">
        <div data-animate className="mb-14">
          <p className="section-kicker">The Vibe</p>
          <h2 className="section-title max-w-3xl">
            Texture, sweat, light trails, and crowd heat.
          </h2>
        </div>
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {galleryImages.map((image) => (
            <img
              key={image}
              data-animate
              src={image}
              alt="Festival atmosphere"
              className="mb-6 w-full rounded-[1.8rem] object-cover opacity-92 transition duration-500 hover:-translate-y-1 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function TicketsSection() {
  return (
    <SectionShell
      id="tickets"
      className="bg-[#1c1b1b] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-360">
        <div data-animate className="mb-14 text-center">
          <p className="section-kicker">Choose Your Journey</p>
          <h2 className="section-title mx-auto max-w-4xl">
            Ticketing with weight, offset, and a clear focal pass.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {passes.map((pass) => (
            <article
              key={pass.name}
              data-animate
              className={`rounded-4xl p-8 ${pass.featured ? "bg-[linear-gradient(160deg,#ffb1c7,#db2777)] text-[#650031] shadow-[0_35px_70px_-30px_rgba(219,39,119,0.8)] lg:-translate-y-6" : "surface-card text-white"}`}
            >
              <p
                className={`text-xs font-black uppercase tracking-[0.24em] ${pass.featured ? "text-[#650031]/75" : "text-[#ffb1c7]"}`}
              >
                {pass.label}
              </p>
              <h3 className="mt-6 font-headline text-4xl font-black uppercase tracking-tighter">
                {pass.name}
              </h3>
              <p className="mt-5 text-6xl font-black tracking-[-0.06em]">
                {pass.price}
              </p>
              <div className="mt-8 space-y-4 text-sm leading-7">
                {pass.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <a
                href="#"
                className={
                  pass.featured
                    ? "ghost-button mt-10 inline-flex border-[#650031]/30 text-[#650031] hover:bg-[#650031]/8"
                    : "ghost-button mt-10 inline-flex"
                }
              >
                Select pass
              </a>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function VenueSection() {
  return (
    <SectionShell className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-360 gap-10 lg:grid-cols-2 lg:items-center">
        <div data-animate>
          <p className="section-kicker">The Grand Pavilion</p>
          <h2 className="section-title max-w-xl">
            A venue built for scale shifts, side rooms, and late-night
            spillover.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            Four studios, open-air stages, projection-mapped domes, and transit
            links that keep the festival moving without flattening the mood.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              ["By Bus", "Routes 12, 45, and 99 stop directly at the venue."],
              [
                "By Train",
                "Stratford Station is a 10 minute walk from the main gate.",
              ],
            ].map(([title, copy]) => (
              <article key={title} className="surface-card p-6">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffb1c7]">
                  {title}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/68">{copy}</p>
              </article>
            ))}
          </div>
        </div>
        <div
          data-animate
          className="relative min-h-105 overflow-hidden rounded-4xl bg-[#353535]"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_0Xlx6aiGUr6jBcOA4yrGRFbc7nI9uDOEUalfKF0s5zbHUKxeZeC8kvwLwy5km77KtLpt-5Qs0u98SxbMgpK4HKq0cFQWMcvhkvNJrZF-h5EuGLZUwQro-rJjelQylDG6ca8XDUis71CJlDcYqIWDFwWwFS7ol03yb_VuaQMnFoPvCyMsSXKcJodxR5jyoY2MEJU_s9Xe1rB-87Kd_P04nVB_AjcTTgUPPecibhLVOTjAK0APairMv8dL19qv6TGVuNzhnDBscow"
            alt="Venue map"
            className="absolute inset-0 h-full w-full object-cover opacity-80 grayscale"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,19,19,0.16),rgba(19,19,19,0.78))]" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-white/45">
              Location
            </p>
            <p className="mt-3 max-w-sm font-headline text-3xl font-black uppercase tracking-tighter text-white">
              45 Olympic Way, London E20 2ST
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function SponsorsSection() {
  return (
    <SectionShell className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-360 border-t border-white/6 pt-10">
        <p
          data-animate
          className="text-center text-[11px] font-black uppercase tracking-[0.26em] text-white/34"
        >
          Empowered by
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-3xl font-headline font-black uppercase tracking-tighter text-white/48 sm:gap-x-20">
          {["Adidas", "Red Bull", "Spotify", "Vogue", "Samsung"].map(
            (sponsor) => (
              <span key={sponsor} data-animate>
                {sponsor}
              </span>
            ),
          )}
        </div>
      </div>
    </SectionShell>
  );
}

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <ScheduleSection />
      <ArtistsSection />
      <WorkshopsSection />
      <GallerySection />
      <TicketsSection />
      <VenueSection />
      <SponsorsSection />
    </main>
  );
}
