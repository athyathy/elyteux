import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/project/$id")({
  head: () => ({
    meta: [
      { title: "Atelier — Maquettiste" },
      { name: "description", content: "Tableau de conception des sections de votre page." },
      { property: "og:title", content: "Atelier — Maquettiste" },
      { property: "og:description", content: "Tableau de conception des sections." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  return (
    <div className="board-grid grid min-h-screen place-items-center p-6" style={{ backgroundSize: "22px 22px" }}>
      <div className="panel max-w-md p-8 text-center">
        <h1 className="text-2xl font-bold">Atelier en construction</h1>
        <p className="mt-2 text-sm text-muted-foreground">Le tableau de conception de ce projet n'est pas encore terminé.</p>
        <Link to="/app" className="mt-4 inline-block text-sm text-accent">Retour aux projets</Link>
      </div>
    </div>
  );
}
