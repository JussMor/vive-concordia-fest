import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "../components/landing";
import { buildFestivalHead } from "../lib/seo";

export const Route = createFileRoute("/")({
  head: () => buildFestivalHead(),
  component: LandingPage,
});
