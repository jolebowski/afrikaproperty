import { PageHero } from "../components/ui/PageHero";

export function Legal({ type }: { type: 'privacy' | 'terms' | 'cookies' }) {
  const content = {
    privacy: {
      title: "Politique de Confidentialité",
      text: "Détails sur la collecte et l'utilisation de vos données..."
    },
    terms: {
      title: "Mentions Légales",
      text: "Informations légales sur l'éditeur du site..."
    },
    cookies: {
      title: "Gestion des Cookies",
      text: "Explication sur l'utilisation des cookies..."
    }
  };

  const { title, text } = content[type];

  return (
    <main>
      <PageHero title={title} />
      <section className="py-20">
        <div className="container-custom max-w-4xl prose prose-lg">
          <p>{text}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </section>
    </main>
  );
}
