import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Building2, CircleDollarSign, Scale } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../../i18n/I18nProvider';
import { Button } from '../ui/Button';

export function ProfessionalServicesSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const services = [
    {
      id: 'bank',
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: t('services.types.bank', { fallback: 'Banques Partenaires' }),
      description: t('services.descriptions.bank', { fallback: 'Financements adaptés aux non-résidents avec taux préférentiels.' }),
      count: '3 Partenaires'
    },
    {
      id: 'consultant',
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: t('services.types.consultant', { fallback: 'Conseil & Accompagnement' }),
      description: t('services.descriptions.consultant', { fallback: 'Solutions sur mesure pour la diaspora cap-verdienne.' }),
      count: '2 Cabinets'
    },
    {
      id: 'lawyer',
      icon: <Scale className="h-8 w-8 text-primary" />,
      title: t('services.types.lawyer', { fallback: 'Avocats Spécialisés' }),
      description: t('services.descriptions.lawyer', { fallback: 'Sécurisez votre acquisition avec nos experts juridiques.' }),
      count: '2 Cabinets'
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t('services.title', { fallback: 'Services Professionnels' })}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              {t('services.section.title', { fallback: 'Des experts pour sécuriser votre projet' })}
            </h2>
            <p className="text-lg text-gray-600">
              {t('services.section.subtitle', { fallback: 'Nous avons sélectionné les meilleurs partenaires bancaires, juridiques et conseils pour vous accompagner.' })}
            </p>
          </div>
          <Button variant="outline" onClick={() => navigate('/services')} className="shrink-0">
            {t('services.cta.viewAll', { fallback: 'Voir tous les experts' })}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer"
              onClick={() => navigate('/services')}
            >
              <div className="mb-6 p-4 bg-primary/5 rounded-xl inline-block group-hover:bg-primary/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                <span className="text-sm font-medium text-gray-500">{service.count}</span>
                <span className="text-sm font-medium text-primary flex items-center group-hover:translate-x-1 transition-transform">
                  Découvrir <ArrowRight className="ml-1 h-3 w-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-primary/5 via-white to-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-3 bg-white rounded-full shadow-sm">
                <CircleDollarSign className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h4 className="font-bold text-lg text-gray-900 mb-1">
                {t('services.commission.noFees', { fallback: 'Service 100% transparent et sans surcoût' })}
              </h4>
              <p className="text-gray-600 max-w-2xl">
                {t('services.commission.explanation', { fallback: 'Nos partenaires nous rémunèrent directement en tant qu\'apporteur d\'affaires. Vous bénéficiez de tarifs négociés identiques ou inférieurs à ceux pratiqués en direct.' })}
              </p>
            </div>
            <Button onClick={() => navigate('/services')}>
                {t('services.cta.start', { fallback: 'Commencer mes démarches' })}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
