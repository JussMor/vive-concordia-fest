import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <main className="page-wrap px-4 py-32 sm:px-6">
      <section className="surface-card rounded-4xl p-8 sm:p-12">
        <p className="section-kicker mb-4">About The Festival</p>
        <h1 className="section-title max-w-4xl">
          A landing surface built as an editorial stage.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
          Vive Concordia Fest now sits on a custom TanStack Start front page
          with Tailwind-driven styling, section components, and GSAP-powered
          reveal motion. The visual language stays dark, layered, and
          high-contrast so adjacent pages can extend the same system.
        </p>
      </section>
    </main>
  );
}
