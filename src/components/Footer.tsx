export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 rounded-t-[2.5rem] bg-[#181717] px-4 pb-10 pt-16 text-[#e5e2e1] sm:px-6">
      <div className="mx-auto grid w-full max-w-360 gap-12 px-4 md:grid-cols-[1.4fr_0.8fr_0.8fr] md:px-8">
        <div>
          <p className="mb-4 font-headline text-3xl font-black uppercase tracking-[-0.04em]">
            Vive Concordia
          </p>
          <p className="max-w-md text-sm leading-7 text-white/58">
            A festival landing page built for rhythm, contrast, and movement.
            Editorial scale up front, cinematic surfaces underneath.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-white/45">
            Explore
          </p>
          <div className="space-y-3 text-sm text-white/68">
            <a
              href="#lineup"
              className="block no-underline transition hover:text-white"
            >
              Artists
            </a>
            <a
              href="#workshops"
              className="block no-underline transition hover:text-white"
            >
              Workshops
            </a>
            <a
              href="#tickets"
              className="block no-underline transition hover:text-white"
            >
              Tickets
            </a>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-white/45">
            Contact
          </p>
          <p className="text-sm text-white/68">hello@viveconcordiafest.com</p>
          <p className="mt-2 text-sm text-white/68">London, United Kingdom</p>
        </div>
      </div>
      <div className="mx-auto mt-12 flex w-full max-w-360 items-center justify-between border-t border-white/8 px-4 pt-6 text-[11px] font-bold uppercase tracking-[0.22em] text-white/38 md:px-8">
        <p>&copy; {year} Vive Concordia Fest</p>
        <p>TanStack Start x Tailwind x GSAP</p>
      </div>
    </footer>
  );
}
