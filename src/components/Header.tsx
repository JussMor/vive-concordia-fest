import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex w-full max-w-360 items-center justify-between gap-6 rounded-full border border-white/8 bg-[rgba(42,42,42,0.6)] px-5 py-3 backdrop-blur-[20px] shadow-[0_0_50px_-12px_rgba(229,226,225,0.08)] sm:px-7">
        <h2 className="m-0 shrink-0 text-base font-semibold tracking-tight">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.28em] text-white no-underline"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,#ffb1c7,#db2777)] shadow-[0_0_18px_rgba(219,39,119,0.7)]" />
            Vive Concordia
          </Link>
        </h2>

        <div className="hidden items-center gap-8 md:flex">
          {["Lineup", "Workshops", "Tickets", "Venue"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-bold uppercase tracking-[0.22em] text-white/58 no-underline transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#tickets"
          className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,#ffb1c7,#db2777)] px-5 py-2.5 text-xs font-black uppercase tracking-[0.22em] text-[#650031] no-underline shadow-[0_20px_40px_-16px_rgba(219,39,119,0.7)] transition hover:-translate-y-0.5"
        >
          Get Passes
        </a>
      </nav>
    </header>
  );
}
