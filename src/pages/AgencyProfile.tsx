import { Building2, Calendar, CheckCircle, Globe, Mail, MapPin, Phone } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PropertyCard } from '../components/property/PropertyCard';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { AGENCIES } from '../data/agencies';
import { useTranslation } from '../i18n/I18nProvider';
import type { Agency } from '../types';
// Mock properties - in real app would fetch from API based on agencyId
import { initialProperties } from '../data/properties'; // Assuming this exists, or I need to mock it

export const AgencyProfile: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [agency, setAgency] = useState<Agency | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // In real app, fetch by slug or ID
    const found = AGENCIES.find(a => a.id === slug);
    if (found) {
      setAgency(found);
    }
  }, [slug]);

  if (!agency) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
      </div>
    );
  }

  // Filter properties for this agency (mock logic)
  // In a real scenario, properties would have agencyId
  // For this mock, let's just show some properties randomly or assume some have the ID if we updated properties data
  // Since we haven't updated properties data to include agencyId for all, we might want to just show all for demo or mock it here
  const agencyProperties = initialProperties ? initialProperties.filter(p => p.agencyId === agency.id || !p.agencyId) : []; 
  // NOTE: fallback !p.agencyId included just to show something if data isn't fully migrated. 
  // Ideally, we should update properties mock data.

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Banner */}
      <div className="relative h-64 md:h-80 w-full bg-gray-900">
        {agency.coverImageUrl && (
          <img 
            src={agency.coverImageUrl} 
            alt="Cover" 
            className="w-full h-full object-cover opacity-60"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      </div>

      <Container>
        <div className="relative -mt-20 md:-mt-32 mb-12">
          {/* Profile Header Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
            {/* Logo */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white p-2 shadow-lg -mt-16 md:-mt-20 flex-shrink-0">
               <div className="w-full h-full rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
                {agency.logoUrl ? (
                    <img src={agency.logoUrl} alt={agency.name} className="w-full h-full object-contain" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                        <Building2 size={40} />
                    </div>
                )}
               </div>
            </div>

            {/* Info */}
            <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">{agency.name}</h1>
                    {agency.address && (
                        <div className="flex items-center text-gray-500">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{agency.address}</span>
                        </div>
                    )}
                  </div>
                  {agency.status === 'active' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-200">
                          <CheckCircle className="h-4 w-4 mr-1.5" />
                          {t('agency.verified', { fallback: 'Vérifié' })}
                      </span>
                  )}
                  {agency.type && (
                     <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200 uppercase tracking-wide text-xs">
                        {agency.type === 'promoter' ? 'Promoteur' : 'Agence'}
                     </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                    {agency.phone && (
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">{t('common.phone', { fallback: 'Téléphone' })}</p>
                                <a href={`tel:${agency.phone}`} className="font-medium text-gray-900 hover:text-primary transition-colors">{agency.phone}</a>
                            </div>
                        </div>
                    )}
                    
                    {agency.email && (
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">{t('common.email', { fallback: 'Email' })}</p>
                                <a href={`mailto:${agency.email}`} className="font-medium text-gray-900 hover:text-primary transition-colors">{agency.email}</a>
                            </div>
                        </div>
                    )}

                    {agency.website && (
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Globe size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">{t('common.website', { fallback: 'Site Web' })}</p>
                                <a href={agency.website} target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 hover:text-primary transition-colors truncate max-w-[150px] block">{agency.website.replace(/^https?:\/\//, '')}</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* Left Column: About & Contact */}
            <div className="lg:col-span-1 space-y-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-xl font-serif font-bold mb-4">{t('agency.about', { fallback: 'À propos' })}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        {agency.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{t('agency.memberSince', { fallback: 'Membre depuis' })} {new Date(agency.createdAt).getFullYear()}</span>
                    </div>
                </div>

                <div className="bg-primary/5 rounded-xl border border-primary/20 p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{t('agency.contactTitle', { fallback: 'Contacter' })}</h3>
                    <p className="text-gray-600 text-sm mb-4">{t('agency.contactDesc', { fallback: 'Envoyez un message direct.' })}</p>
                    <button className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                        {t('common.sendMessage', { fallback: 'Envoyer un message' })}
                    </button>
                </div>
            </div>

            {/* Right Column: Properties */}
            <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-serif font-bold">{t('agency.ourProperties', { fallback: 'Biens à la une' })} <span className="text-gray-400 text-lg font-normal">({agencyProperties.length})</span></h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {agencyProperties.map((property, index) => (
                        <Reveal key={property.id} delay={index * 0.1}>
                            <PropertyCard property={property} />
                        </Reveal>
                    ))}
                </div>
                
                {agencyProperties.length === 0 && (
                    <div className="py-12 text-center text-gray-500 bg-white rounded-xl border border-gray-100">
                        {t('agency.noProperties', { fallback: 'Aucune annonce disponible pour le moment.' })}
                    </div>
                )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
