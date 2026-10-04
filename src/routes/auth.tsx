import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/studio/Logo";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Connexion — Maquettiste" },
      { name: "description", content: "Créez votre compte Maquettiste pour concevoir vos sections web avec l'IA." },
      { property: "og:title", content: "Connexion — Maquettiste" },
      { property: "og:description", content: "Créez votre compte pour concevoir vos pages web section par section." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const nav = useNavigate();
  const { session } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (session) nav({ to: "/app" });
  }, [session, nav]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const { error } =
      mode === "signup"
        ? await supabase.auth.signUp({ email, password, options: { emailRedirectTo: window.location.origin } })
        : await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) setError(error.message === "Invalid login credentials" ? "Email ou mot de passe incorrect." : error.message);
  }

  return (
    <div className="board-grid flex min-h-screen items-center justify-center p-4" style={{ backgroundSize: "22px 22px" }}>
      <div className="panel w-full max-w-sm p-8">
        <Logo />
        <h1 className="mt-6 text-2xl font-bold">{mode === "signup" ? "Créer un compte" : "Bon retour"}</h1>
        <p className="mt-1 text-sm text-muted-foreground">Décrivez, annotez, assemblez. Votre page prend forme.</p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="pw">Mot de passe</Label>
            <Input id="pw" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full" disabled={busy}>
            {busy ? "…" : mode === "signup" ? "Créer mon compte" : "Se connecter"}
          </Button>
        </form>
        <button
          className="mt-4 w-full text-center text-sm text-muted-foreground hover:text-foreground"
          onClick={() => setMode(mode === "signup" ? "signin" : "signup")}
        >
          {mode === "signup" ? "Déjà un compte ? Se connecter" : "Pas de compte ? En créer un"}
        </button>
      </div>
    </div>
  );
}
