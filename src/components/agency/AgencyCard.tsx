import { Building2, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/I18nProvider';
import type { Agency } from '../../types';

interface AgencyCardProps {
  agency: Agency;
}

export const AgencyCard: React.FC<AgencyCardProps> = ({ agency }) => {
  const { t } = useTranslation();

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {/* Cover Image */}
      <div className="relative h-32 bg-gray-100 overflow-hidden">
        {agency.coverImageUrl ? (
          <img
            src={agency.coverImageUrl}
            alt={`${agency.name} cover`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-300">
            <Building2 size={48} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        {agency.type && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-gray-800 shadow-sm">
            {agency.type === 'promoter' ? 'Promoteur' : 'Agence'}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 pt-0 flex-grow flex flex-col relative">
        {/* Logo */}
        <div className="relative -mt-10 mb-4 self-start">
          <div className="w-20 h-20 rounded-xl border-4 border-white bg-white overflow-hidden shadow-sm">
            {agency.logoUrl ? (
              <img
                src={agency.logoUrl}
                alt={agency.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-400">
                <Building2 size={24} />
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-2">
             <Link to={`/agency/${agency.id}`} className="group-hover:text-primary transition-colors">
               <h3 className="font-serif text-xl font-bold text-gray-900">{agency.name}</h3>
             </Link>
          </div>
          
          {agency.address && (
            <div className="flex items-start text-gray-500 text-sm mb-3">
              <MapPin className="h-4 w-4 mr-1.5 shrink-0 mt-0.5" />
              <span className="line-clamp-2">{agency.address}</span>
            </div>
          )}

          {agency.description && (
             <p className="text-gray-600 text-sm line-clamp-3 mb-4">
               {agency.description}
             </p>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-100 mt-auto flex flex-col gap-2">
          {agency.phone && (
             <div className="flex items-center text-sm text-gray-500">
               <Phone className="h-3.5 w-3.5 mr-2" />
               <a href={`tel:${agency.phone}`} className="hover:text-primary transition-colors">{agency.phone}</a>
             </div>
          )}
          {agency.email && (
             <div className="flex items-center text-sm text-gray-500">
               <Mail className="h-3.5 w-3.5 mr-2" />
               <a href={`mailto:${agency.email}`} className="hover:text-primary transition-colors truncate">{agency.email}</a>
             </div>
          )}
          
          <div className="mt-4">
             <Link 
               to={`/agency/${agency.id}`}
               className="block w-full text-center py-2 px-4 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors"
             >
               {t('agency.viewProfile', { fallback: 'Voir le profil' })}
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
