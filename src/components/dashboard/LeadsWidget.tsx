import { ChevronRight, Mail, Phone } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  property: string;
  date: string;
  status: "new" | "open" | "closed";
}

const MOCK_LEADS: Lead[] = [
  {
    id: "1",
    name: "Jean Dupont",
    email: "jean.dupont@email.com",
    phone: "+33 6 12 34 56 78",
    property: "Villa Océane - Phase 2",
    date: "Il y a 2h",
    status: "new"
  },
  {
    id: "2",
    name: "Marie Martin",
    email: "marie.m@email.com",
    phone: "+33 6 98 76 54 32",
    property: "Penthouse Vue Mer",
    date: "Hier",
    status: "open"
  },
  {
    id: "3",
    name: "Pierre Durand",
    email: "p.durand@email.com",
    phone: "+41 79 123 45 67",
    property: "Villa Océane - Phase 2",
    date: "28 Nov",
    status: "new"
  }
];

export function LeadsWidget() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-full flex flex-col">
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-serif font-bold text-gray-900">Derniers Leads</h2>
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold">
          2
        </span>
      </div>

      <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
        {MOCK_LEADS.map((lead) => (
          <div key={lead.id} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-gray-900 group-hover:text-[#C7A86A] transition-colors">
                  {lead.name}
                </h3>
                <p className="text-xs text-gray-500">{lead.date}</p>
              </div>
              {lead.status === "new" && (
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wide">
                  Nouveau
                </span>
              )}
            </div>
            
            <p className="text-sm text-gray-600 mb-3 line-clamp-1">
              Intéressé par <span className="font-medium">{lead.property}</span>
            </p>
            
            <div className="flex items-center gap-3">
              <a 
                href={`mailto:${lead.email}`}
                className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href={`tel:${lead.phone}`}
                className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
        
        {MOCK_LEADS.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            Aucun lead pour le moment.
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <button className="w-full flex items-center justify-center text-sm font-medium text-gray-600 hover:text-[#C7A86A] transition-colors">
          Voir tous les leads
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
}
