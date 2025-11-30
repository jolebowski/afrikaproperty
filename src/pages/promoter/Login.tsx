import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export function PromoterLogin() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    navigate("/promoter/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-sm">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-serif font-bold text-gray-900">
            Espace Promoteur
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Connectez-vous pour gérer vos annonces
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Adresse email
              </label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Adresse email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Mot de passe
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Mot de passe"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Se souvenir de moi
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-primary hover:text-primary-hover">
                Mot de passe oublié ?
              </a>
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full">
              Se connecter
            </Button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Pas encore de compte ?{" "}
            <Link to="/promoter/signup" className="font-medium text-primary hover:text-primary-hover">
              Devenir partenaire
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
