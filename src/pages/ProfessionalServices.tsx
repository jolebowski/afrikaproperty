import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Handshake, Search, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { ServiceCard } from '../components/services/ServiceCard';
import { ServiceLeadForm } from '../components/services/ServiceLeadForm';
import { Button } from '../components/ui/Button';
import { getServicesByType, professionalServices } from '../data/professionalServices';
import { useTranslation } from '../i18n/I18nProvider';
import { cn } from '../lib/utils';
import type { ProfessionalService } from '../types/professionalServices';

export default function ProfessionalServices() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'all' | 'bank' | 'consultant' | 'lawyer'>('all');
  const [selectedService, setSelectedService] = useState<ProfessionalService | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const filteredServices = activeTab === 'all' 
    ? professionalServices.filter(s => s.status === 'active')
    : getServicesByType(activeTab);

  const handleRequestQuote = (service: ProfessionalService) => {
    setSelectedService(service);
    setIsFormOpen(true);
  };

  const tabs = [
    { id: 'all', label: t('services.filters.all', { fallback: 'Tous' }) },
    { id: 'bank', label: t('services.types.bank', { fallback: 'Banques' }) },
    { id: 'consultant', label: t('services.types.consultant', { fallback: 'Conseil' }) },
    { id: 'lawyer', label: t('services.types.lawyer', { fallback: 'Avocats' }) },
  ];

  const steps = [
    {
      icon: <Search className="h-6 w-6 text-primary" />,
      title: "1. Choisissez un expert",
      desc: "Comparez nos partenaires certifiés par spécialité."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "2. Décrivez votre besoin",
      desc: "Remplissez le formulaire de demande de devis simple."
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-primary" />,
        title: "3. Recevez une offre",
        desc: "Obtenez un devis personnalisé sous 24h ouvrées."
    },
    {
      icon: <Handshake className="h-6 w-6 text-primary" />,
      title: "4. Bénéficiez du tarif",
      desc: "Profitez de nos conditions négociées sans surcoût."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* Hero Section */}
      <div className="bg-primary/90 text-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container-custom relative z-10 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-serif font-bold mb-6"
            >
                {t('services.hero.title', { fallback: 'Services Professionnels' })}
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-light"
            >
                {t('services.hero.subtitle', { fallback: 'Banques, avocats et conseillers : les meilleurs experts pour réussir votre investissement au Cap-Vert.' })}
            </motion.p>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-medium"
            >
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary-light" />
                    {t('services.stats.partners', { count: professionalServices.length } as any)}
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary-light" />
                    {t('services.stats.clients', { fallback: 'Plus de 500 clients accompagnés' })}
                </div>
            </motion.div>
        </div>
      </div>

      <div className="container-custom">
        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-2 bg-white p-1 rounded-xl shadow-sm border border-gray-200 overflow-x-auto max-w-full">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-50"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="text-sm text-gray-500 hidden md:block">
            {filteredServices.length} {t('services.list.results', { fallback: 'partenaires disponibles' })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard 
                service={service} 
                onRequestQuote={handleRequestQuote} 
              />
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-20">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12">
                {t('services.howItWorks.title', { fallback: 'Comment ça marche ?' })}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map((step, idx) => (
                    <div key={idx} className="relative flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
                            {step.icon}
                        </div>
                        <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                        <p className="text-gray-500 text-sm">{step.desc}</p>
                        
                        {/* Connector line for desktop */}
                        {idx < steps.length - 1 && (
                            <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/20 to-transparent" />
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gray-900 rounded-3xl p-12 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
             
             <div className="relative z-10">
                <h2 className="text-3xl font-serif font-bold mb-4">
                    {t('services.cta.partner.title', { fallback: 'Vous êtes un professionnel ?' })}
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                    {t('services.cta.partner.desc', { fallback: 'Rejoignez notre réseau de partenaires certifiés et développez votre clientèle internationale.' })}
                </p>
                <Button variant="primary" className="bg-white text-gray-900 hover:bg-gray-100">
                    {t('services.cta.becomePartner', { fallback: 'Devenir partenaire' })}
                </Button>
             </div>
        </div>
      </div>

      {/* Model Form */}
      <ServiceLeadForm
        service={selectedService}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSuccess={() => {
            // Optional: Refresh any user state if needed
        }}
      />
    </div>
  );
}
