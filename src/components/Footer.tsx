import { festivalBasePath } from "../lib/seo";

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
            Plataforma cultural de alto impacto en La Concordia, Ecuador. El
            show principal de Vive Concordia 2026 abre oportunidades de
            posicionamiento para marcas aliadas.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-white/45">
            Enlaces internos
          </p>
          <div className="space-y-3 text-sm text-white/68">
            <a
              href={`${festivalBasePath}#show-principal`}
              className="block no-underline transition hover:text-white"
            >
              Show principal
            </a>
            <a
              href={`${festivalBasePath}#sponsors`}
              className="block no-underline transition hover:text-white"
            >
              Beneficios para sponsors
            </a>
            <a
              href={`${festivalBasePath}#contacto`}
              className="block no-underline transition hover:text-white"
            >
              Solicitar dossier comercial
            </a>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-white/45">
            Contacto y redes sociales
          </p>
          <p className="text-sm text-white/68">
            contacto@viveconcordiafest.com
          </p>
          <p className="mt-2 text-sm text-white/68">La Concordia, Ecuador</p>
          <a
            href={`${festivalBasePath}#contacto`}
            className="mt-3 block text-sm text-white/68 no-underline transition hover:text-white"
          >
            Contacto comercial
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex w-full max-w-360 items-center justify-between border-t border-white/8 px-4 pt-6 text-[11px] font-bold uppercase tracking-[0.22em] text-white/38 md:px-8">
        <p>&copy; {year} Vive Concordia Fest</p>
        <p>Festival cultural · Ecuador 2026</p>
      </div>
    </footer>
  );
}
