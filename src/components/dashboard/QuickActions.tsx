import { ArrowRight, PlusCircle, Settings, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function QuickActions() {
  const actions = [
    { label: "Créer une annonce", icon: PlusCircle, primary: true, path: "/promoter/listings/create" },
    { label: "Voir mes leads", icon: Users, path: "/promoter/leads" },
    { label: "Mon profil", icon: Settings, path: "/promoter/profile" },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden p-6">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-4">Actions Rapides</h2>
      <div className="space-y-3">
        {actions.map((action, index) => (
          <Link
            key={index}
            to={action.path}
            className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
              action.primary
                ? "bg-[#C7A86A]/5 border-[#C7A86A]/20 text-[#C7A86A] hover:bg-[#C7A86A]/10"
                : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center gap-3">
              <action.icon className="w-5 h-5" />
              <span className="font-medium text-sm">{action.label}</span>
            </div>
            <ArrowRight className="w-4 h-4 opacity-50" />
          </Link>
        ))}
      </div>
    </div>
  );
}
