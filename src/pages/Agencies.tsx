import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { AgencyCard } from '../components/agency/AgencyCard';
import { Container } from '../components/ui/Container';
import { PageHero } from '../components/ui/PageHero';
import { AGENCIES } from '../data/agencies';
import { useTranslation } from '../i18n/I18nProvider';

export const Agencies: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const filteredAgencies = AGENCIES
      .filter(a => a.type === 'agency')
      .filter(agency => {
        const matchesSearch = agency.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLocation = locationFilter ? agency.address?.toLowerCase().includes(locationFilter.toLowerCase()) : true;
        return matchesSearch && matchesLocation;
      });

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <PageHero 
        title={t('agencies.title', { fallback: 'Nos Agences Partenaires' })} 
        description={t('agencies.subtitle', { fallback: 'Découvrez les meilleurs professionnels de l\'immobilier au Cap-Vert' })}
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <Container className="mt-12">
        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder={t('agencies.searchPlaceholder', { fallback: 'Rechercher une agence...' })}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <div className="flex-1/3 min-w-[200px]">
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full h-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
              >
                <option value="">{t('agencies.allLocations', { fallback: 'Toutes les îles' })}</option>
                <option value="Sal">Sal</option>
                <option value="Boa Vista">Boa Vista</option>
                <option value="Santiago">Santiago</option>
                <option value="São Vicente">São Vicente</option>
                <option value="Maio">Maio</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAgencies.map(agency => (
            <AgencyCard key={agency.id} agency={agency} />
          ))}
        </div>

        {filteredAgencies.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">{t('agencies.noResults', { fallback: 'Aucune agence trouvée.' })}</p>
          </div>
        )}
      </Container>
    </div>
  );
};
