import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export function PromoterSignup() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup
    navigate("/promoter/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-sm">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-serif font-bold text-gray-900">
            Devenir Partenaire
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Créez votre compte promoteur et publiez vos biens
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Prénom" required />
              <Input placeholder="Nom" required />
            </div>
            <Input placeholder="Nom de la société" required />
            <Input placeholder="Adresse email" type="email" required />
            <Input placeholder="Téléphone" type="tel" required />
            <Input placeholder="Mot de passe" type="password" required />
            <Input placeholder="Confirmer le mot de passe" type="password" required />
          </div>

          <div>
            <Button type="submit" className="w-full">
              Créer mon compte
            </Button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Déjà inscrit ?{" "}
            <Link to="/promoter/login" className="font-medium text-primary hover:text-primary-hover">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
