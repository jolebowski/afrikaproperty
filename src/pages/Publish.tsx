import { Link } from "react-router-dom";
import { PromoterPricing } from "../components/publish/PromoterPricing";
import { PromoterProcess } from "../components/publish/PromoterProcess";
import { PromoterStats } from "../components/publish/PromoterStats";
import { PromoterSuccessStories } from "../components/publish/PromoterSuccessStories";
import { Button } from "../components/ui/Button";
import { ModernPageHero } from "../components/ui/ModernPageHero";
import { Reveal } from "../components/ui/Reveal";

export function Publish() {
  return (
    <main>
      <ModernPageHero
        tag="Partenariat"
        title="Donnez une Envergure Internationale à vos Projets"
        subtitle="Rejoignez le cercle exclusif des promoteurs d'élite. Une vitrine d'exception pour des biens d'exception."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />

      <PromoterStats />

      <PromoterProcess />



      <PromoterPricing />

      <PromoterSuccessStories />

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container-custom">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Prêt à accélérer vos ventes ?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Rejoignez le réseau Afrika Property et commencez à diffuser vos projets dès aujourd'hui.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <Link to="/promoter/signup">
              <Button size="lg" className="px-8">
                Créer mon compte promoteur
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
