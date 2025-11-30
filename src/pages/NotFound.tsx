import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="font-serif text-9xl font-bold text-gray-200 mb-4">404</h1>
      <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Page non trouvée</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link to="/">
        <Button size="lg">Retour à l'accueil</Button>
      </Link>
    </div>
  );
}
