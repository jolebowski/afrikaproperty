import { ArrowLeft, Mail, Phone, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { DashboardHeader } from "../../components/dashboard/DashboardHeader";
import { DashboardButton } from "../../components/dashboard/ui/DashboardButton";
import { Input } from "../../components/ui/Input";
import { Reveal } from "../../components/ui/Reveal";
import { useToast } from "../../components/ui/Toast";
import { useTranslation } from "../../i18n/I18nProvider";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  property: string;
  date: string;
  status: "new" | "open" | "closed";
  message: string;
}

const MOCK_LEADS: Lead[] = [
  {
    id: "1",
    name: "Jean Dupont",
    email: "jean.dupont@email.com",
    phone: "+33 6 12 34 56 78",
    property: "Villa Océane - Phase 2",
    date: "Il y a 2h",
    status: "new",
    message: "Bonjour, je suis intéressé par ce bien. Est-il possible de le visiter la semaine prochaine ?"
  },
  {
    id: "2",
    name: "Marie Martin",
    email: "marie.m@email.com",
    phone: "+33 6 98 76 54 32",
    property: "Penthouse Vue Mer",
    date: "Hier",
    status: "open",
    message: "Pouvez-vous m'envoyer la brochure et les plans ?"
  },
  {
    id: "3",
    name: "Pierre Durand",
    email: "p.durand@email.com",
    phone: "+41 79 123 45 67",
    property: "Villa Océane - Phase 2",
    date: "28 Nov",
    status: "new",
    message: "Quel est le rendement locatif estimé ?"
  },
  {
    id: "4",
    name: "Sophie Lefebvre",
    email: "sophie.l@email.com",
    phone: "+33 6 11 22 33 44",
    property: "Terrain Constructible",
    date: "25 Nov",
    status: "closed",
    message: "Merci pour les informations."
  }
];

export function PromoterLeads() {
  const { t } = useTranslation();
  const { addToast } = useToast();

  const handleReply = (email: string) => {
    window.location.href = `mailto:${email}`;
    addToast("Ouverture de votre client mail...", "info");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <DashboardHeader promoterName="Horizon Immobilier" />

      <main className="container-custom py-8">
        
        {/* Back Link Style (CreateListing style) */}
        <div className="mb-6 flex items-center justify-between">
            <Link to="/promoter/dashboard" className="inline-flex items-center text-gray-500 hover:text-[#C7A86A] transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("common.backToDashboard")}
            </Link>
        </div>

        <Reveal delay={0.1}>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
             
            {/* Header inside the card */}
            <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-serif font-bold text-gray-900">Mes Leads</h1>
                    <p className="text-gray-500 text-sm mt-1">Gérez vos contacts et demandes d'information.</p>
                </div>
                <div className="flex gap-2">
                    <DashboardButton variant="secondary" size="sm">Exporter CSV</DashboardButton>
                </div>
            </div>

            {/* Filters */}
            <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row gap-4 bg-gray-50/50">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Rechercher par nom, email..." className="pl-9 focus:border-[#C7A86A] focus:ring-[#C7A86A] bg-white" />
              </div>
              <select className="h-10 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A86A] focus:border-[#C7A86A] bg-white">
                <option value="all">Tous les statuts</option>
                <option value="new">Nouveaux</option>
                <option value="open">En cours</option>
                <option value="closed">Traités</option>
              </select>
            </div>

            {/* List */}
            <div className="divide-y divide-gray-100">
              {MOCK_LEADS.map((lead) => (
                <div key={lead.id} className={`p-6 hover:bg-gray-50 transition-all duration-200 ${lead.status === 'new' ? 'bg-blue-50/30' : ''}`}>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className={`font-bold text-gray-900 ${lead.status === 'new' ? 'text-lg' : ''}`}>{lead.name}</h3>
                        {lead.status === "new" && (
                          <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wide animate-pulse">
                            Nouveau
                          </span>
                        )}
                        {lead.status === "open" && (
                          <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wide">
                            En cours
                          </span>
                        )}
                        {lead.status === "closed" && (
                          <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wide">
                            Traité
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">
                        Intéressé par <span className="font-medium text-gray-900">{lead.property}</span> • {lead.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleReply(lead.email)} className="p-2 text-gray-500 hover:text-[#C7A86A] hover:bg-[#C7A86A]/10 rounded-md transition-colors" title="Envoyer un email">
                        <Mail className="w-4 h-4" />
                      </button>
                      <a href={`tel:${lead.phone}`} className="p-2 text-gray-500 hover:text-[#C7A86A] hover:bg-[#C7A86A]/10 rounded-md transition-colors" title="Appeler">
                        <Phone className="w-4 h-4" />
                      </a>
                      <DashboardButton size="sm" variant="secondary">Détails</DashboardButton>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 text-sm text-gray-600 italic shadow-sm">
                    "{lead.message}"
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="p-4 border-t border-gray-200 flex justify-center gap-2">
              <DashboardButton size="sm" variant="secondary" disabled>Précédent</DashboardButton>
              <DashboardButton size="sm" variant="primary">1</DashboardButton>
              <DashboardButton size="sm" variant="secondary">2</DashboardButton>
              <DashboardButton size="sm" variant="secondary">Suivant</DashboardButton>
            </div>
          </div>
        </Reveal>
      </main>
    </div>
  );
}
