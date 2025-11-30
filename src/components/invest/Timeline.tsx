
const STEPS = [
  {
    title: "Découverte & Sélection",
    description: "Nos experts vous présentent les meilleures opportunités selon vos objectifs (rendement, plus-value, usage personnel)."
  },
  {
    title: "Réservation",
    description: "Signature du contrat de réservation et versement de l'acompte pour bloquer le bien."
  },
  {
    title: "Accompagnement Juridique",
    description: "Notre avocat partenaire vérifie tous les documents et prépare le contrat de vente final."
  },
  {
    title: "Signature & Paiement",
    description: "Signature de l'acte authentique et règlement du solde. Vous devenez officiellement propriétaire."
  },
  {
    title: "Gestion Locative",
    description: "Mise en place de la gestion locative pour générer vos premiers revenus dès la remise des clés."
  }
];

export function Timeline() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Votre Parcours d'Investisseur
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un processus simple et sécurisé en 5 étapes clés.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

          <div className="space-y-12">
            {STEPS.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Number Bubble */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:translate-y-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold z-10 border-4 border-white shadow-sm">
                  {index + 1}
                </div>

                {/* Left Side */}
                <div className={`w-full md:w-[calc(50%-40px)] ${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-serif text-xl font-bold mb-2 text-primary">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Right Side (Empty for spacing) */}
                <div className="hidden md:block w-[calc(50%-40px)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
