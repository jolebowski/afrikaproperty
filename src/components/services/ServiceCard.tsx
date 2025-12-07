import { ArrowRight, BadgeCheck, Briefcase, Building2, Globe, Mail, Scale } from 'lucide-react';
import { useTranslation } from '../../i18n/I18nProvider';
import type { ProfessionalService } from '../../types/professionalServices';
import { Button } from '../ui/Button';

interface ServiceCardProps {
  service: ProfessionalService;
  onRequestQuote: (service: ProfessionalService) => void;
}

export function ServiceCard({ service, onRequestQuote }: ServiceCardProps) {
  const { t } = useTranslation();

  const getIcon = () => {
    switch (service.type) {
      case 'bank': return <Building2 className="h-6 w-6 text-primary" />;
      case 'consultant': return <Briefcase className="h-6 w-6 text-primary" />;
      case 'lawyer': return <Scale className="h-6 w-6 text-primary" />;
      default: return <Briefcase className="h-6 w-6 text-primary" />;
    }
  };

  const getTypeName = () => {
    switch (service.type) {
      case 'bank': return t('services.types.bank', { fallback: 'Banque Partenaire' });
      case 'consultant': return t('services.types.consultant', { fallback: 'Conseil' });
      case 'lawyer': return t('services.types.lawyer', { fallback: 'Avocat' });
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Header Gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-primary/10" />
      
      <div className="p-6 flex-grow flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-colors">
            {getIcon()}
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 capitalize">
            {getTypeName()}
          </span>
        </div>

        {/* Content */}
        <div className="mb-6 flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {service.name}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-3 mb-4">
            {service.description}
          </p>
          
          {/* Specialties */}
          <div className="flex flex-wrap gap-2 mb-4">
            {service.specialties.slice(0, 3).map((spec, index) => (
              <span key={index} className="inline-flex items-center text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="space-y-4 mt-auto">
           {service.featured && (
             <div className="flex items-center gap-2 text-xs text-primary font-medium bg-primary/5 px-3 py-2 rounded-lg">
               <BadgeCheck className="h-4 w-4" />
               Partenaire Premium • {service.totalLeadsGenerated}+ clients accompagnés
             </div>
           )}

          <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
             {service.website && (
                 <a href={service.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                   <Globe className="h-4 w-4" /> Site web
                 </a>
             )}
              <a href={`mailto:${service.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" /> Email
              </a>
          </div>

          <Button 
            onClick={() => onRequestQuote(service)}
            className="w-full justify-between group-hover:bg-primary group-hover:text-white"
            variant="outline"
          >
            {t('services.cta.requestQuote', { fallback: 'Demander un devis' })}
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      
      {/* Commission indicator for transparency */}
       <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
         <span>{t('services.commission.noFees', { fallback: 'Sans frais pour vous' })}</span>
         <span className="font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
           Tarifs négociés
         </span>
       </div>
    </div>
  );
}
