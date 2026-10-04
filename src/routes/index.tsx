import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/studio/Logo";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maquettiste — Concevez vos pages web section par section avec l'IA" },
      { name: "description", content: "Décrivez votre page, générez chaque section, annotez-la, assemblez et exportez le code HTML." },
      { property: "og:title", content: "Maquettiste — Maquettes de sections web par IA" },
      { property: "og:description", content: "Décrivez, annotez, assemblez : votre page web et son code HTML en quelques minutes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const STEPS = [
  ["01", "Décrivez la page", "Une phrase suffit : l'IA définit la direction artistique et propose les sections."],
  ["02", "Détaillez chaque section", "Contenu, disposition, animations : la maquette se construit en direct."],
  ["03", "Annotez & dessinez", "Placez des marqueurs, entourez, commentez. La section est régénérée."],
  ["04", "Assemblez & exportez", "Choisissez et ordonnez vos sections, obtenez la page réelle et son code HTML."],
];

function Home() {
  const { session } = useAuth();
  return (
    <div className="board-grid min-h-screen" style={{ backgroundSize: "22px 22px" }}>
      <header className="mx-auto flex max-w-6xl items-center justify-between p-5">
        <Logo />
        <Button asChild variant={session ? "default" : "outline"}>
          <Link to={session ? "/app" : "/auth"}>{session ? "Ouvrir l'atelier" : "Se connecter"}</Link>
        </Button>
      </header>
      <main className="mx-auto max-w-6xl px-5 pb-20 pt-12 md:pt-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Atelier de maquettes IA</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[0.95] md:text-7xl">
          Votre page web, <span className="text-accent">section</span> par section.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Un tableau infini pour décrire, générer, annoter et assembler vos sections — puis récupérer le code HTML prêt à l'emploi.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link to={session ? "/app" : "/auth"}>Commencer gratuitement</Link>
        </Button>
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(([n, t, d]) => (
            <div key={n} className="panel p-5">
              <span className="font-mono text-sm text-accent">{n}</span>
              <h3 className="mt-2 text-lg font-bold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
