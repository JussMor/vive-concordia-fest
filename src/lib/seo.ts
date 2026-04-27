import { heroImage } from "../components/landing/landing-data";

export const festivalBasePath = "/";

export const festivalSeo = {
  title:
    "Show Principal Vive Concordia 2026 | Festival Internacional de Danza Ecuador",
  description:
    "Conoce el show principal del VI Festival Nacional e Internacional de Danza Vive Concordia 2026 en La Concordia, Ecuador. Oportunidad de patrocinio para marcas con alcance cultural y visibilidad internacional.",
  keywords:
    "show principal danza Ecuador, patrocinio cultural Ecuador, festival internacional de danza 2026, Vive Concordia 2026, sponsors eventos culturales Ecuador, marketing cultural latinoamérica, branding en festivales de danza, festival folklórico internacional",
  siteName: "Vive Concordia 2026",
  locale: "es_EC",
  type: "website",
  image: heroImage,
};

export function buildFestivalHead(pathname = festivalBasePath) {
  return {
    meta: [
      { title: festivalSeo.title },
      { name: "description", content: festivalSeo.description },
      { name: "keywords", content: festivalSeo.keywords },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: festivalSeo.title },
      { property: "og:description", content: festivalSeo.description },
      { property: "og:type", content: festivalSeo.type },
      { property: "og:locale", content: festivalSeo.locale },
      { property: "og:site_name", content: festivalSeo.siteName },
      { property: "og:image", content: festivalSeo.image },
      { property: "og:url", content: pathname },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: festivalSeo.title },
      { name: "twitter:description", content: festivalSeo.description },
      { name: "twitter:image", content: festivalSeo.image },
    ],
    links: [{ rel: "canonical", href: pathname }],
  };
}
