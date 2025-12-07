import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { useAuth } from "../../contexts/AuthContext";

export function PromoterSignup() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    type: "agency",
    agencyName: "",
    agencyAddress: "",
    agencyDescription: "",
    website: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(formData);
    navigate("/promoter/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-8 bg-white p-8 rounded-xl shadow-sm">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-serif font-bold text-gray-900">
            Créer votre Espace Pro
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Promoteurs, Agences : diffusez vos biens sur la référence au Cap-Vert
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            
            {/* Section Responsable */}
            <div className="border-b border-gray-100 pb-2 mb-4">
               <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Responsable</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input name="firstName" placeholder="Prénom" required onChange={handleChange} />
              <Input name="lastName" placeholder="Nom" required onChange={handleChange} />
            </div>

            {/* Section Société */}
            <div className="border-b border-gray-100 pb-2 mb-4 mt-6">
               <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Société</h3>
            </div>
            <Input name="agencyName" placeholder="Nom de la société / Agence" required onChange={handleChange} />
            <div className="relative">
              <select
                name="type"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm bg-white"
                onChange={handleChange}
                defaultValue="agency"
              >
                  <option value="agency">Agence Immobilière</option>
                  <option value="promoter">Promoteur Immobilier</option>
              </select>
            </div>
            <textarea 
              name="agencyDescription"
              placeholder="Description de votre activité"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              onChange={handleChange}
            />
            <Input name="agencyAddress" placeholder="Adresse du siège" required onChange={handleChange} />
            <Input name="website" placeholder="Site web (optionnel)" type="url" onChange={handleChange} />
            
            {/* Section Connexion */}
            <div className="border-b border-gray-100 pb-2 mb-4 mt-6">
               <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Connexion</h3>
            </div>
            <Input name="email" placeholder="Adresse email" type="email" required onChange={handleChange} />
            <Input name="phone" placeholder="Téléphone" type="tel" required onChange={handleChange} />
            <div className="grid grid-cols-2 gap-4">
                <Input name="password" placeholder="Mot de passe" type="password" required onChange={handleChange} />
                <Input name="confirmPassword" placeholder="Confirmer" type="password" required onChange={handleChange} />
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full">
              Créer mon compte professionnel
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
