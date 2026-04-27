import { Link } from "@tanstack/react-router";
import { festivalBasePath } from "../lib/seo";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <nav className="mx-auto flex w-full max-w-360 items-center justify-between gap-3 rounded-full border border-white/8 bg-[rgba(42,42,42,0.6)] px-4 py-2.5 backdrop-blur-[20px] shadow-[0_0_50px_-12px_rgba(229,226,225,0.08)] sm:px-6">
        <h2 className="m-0 shrink-0 text-sm font-semibold tracking-tight">
          <Link
            to={festivalBasePath}
            className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-white no-underline sm:text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-[linear-gradient(135deg,#ffb1c7,#db2777)] shadow-[0_0_18px_rgba(219,39,119,0.7)]" />
            IV FEST · VIVE CONCORDIA 2026
          </Link>
        </h2>

        <div className="hidden items-center gap-5 md:flex">
          {[
            ["Show", "show-principal"],
            ["Audiencia", "audiencia"],
            ["Programación", "programacion"],
            ["Sponsors", "sponsors"],
          ].map(([label, anchor]) => (
            <a
              key={anchor}
              href={`${festivalBasePath}#${anchor}`}
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/58 no-underline transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href={`${festivalBasePath}#contacto`}
          className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,#ffb1c7,#db2777)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#650031] no-underline shadow-[0_20px_40px_-16px_rgba(219,39,119,0.7)] transition hover:-translate-y-0.5 sm:px-5 sm:text-[11px]"
        >
          Solicitar ser sponsor
        </a>
      </nav>
    </header>
  );
}
