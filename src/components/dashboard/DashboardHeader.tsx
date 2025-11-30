import { Bell, Menu, Search, User } from "lucide-react";

interface DashboardHeaderProps {
  promoterName: string;
  onMenuClick?: () => void;
}

export function DashboardHeader({ promoterName, onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="container-custom h-16 flex items-center justify-between">
        
        {/* Left: Mobile Menu & Title */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div>
            <h1 className="text-lg md:text-xl font-serif font-bold text-gray-900">
              Tableau de bord
            </h1>
            <p className="hidden md:block text-xs text-gray-500">
              Bienvenue, {promoterName}
            </p>
          </div>
        </div>

        {/* Right: Actions & Profile */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search (Desktop) */}
          <div className="hidden md:flex items-center relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Rechercher..." 
              className="h-9 pl-9 pr-4 rounded-full bg-gray-100 border-none text-sm focus:ring-2 focus:ring-[#C7A86A]/20 w-64"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 pl-2 md:border-l border-gray-200">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-200">
              <User className="w-5 h-5 text-gray-500" />
            </div>
            <span className="hidden md:block text-sm font-medium text-gray-700">
              {promoterName}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
