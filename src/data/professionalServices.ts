import type { ProfessionalService } from '../types/professionalServices';

export const professionalServices: ProfessionalService[] = [
  // BANKS
  {
    id: 'bank_bca',
    type: 'bank',
    name: 'Banco Comercial do Atlântico',
    description: 'Leader bancaire au Cap-Vert avec solutions de crédit immobilier adaptées aux non-résidents et à la diaspora.',
    email: 'credito.imobiliario@bca.cv',
    phone: '+238 260 8000',
    website: 'https://www.bca.cv',
    address: 'Praia, Santiago, Cap-Vert',
    specialties: [
      'Crédit immobilier jusqu\'à 90%',
      'Comptes non-résidents',
      'Transferts internationaux',
      'Taux préférentiels diaspora'
    ],
    commissionRate: 0.5,
    featured: true,
    status: 'active',
    partneredSince: '2023-01-15',
    totalLeadsGenerated: 127,
    totalCommissionsEarned: 45250
  },
  {
    id: 'bank_caixa',
    type: 'bank',
    name: 'Caixa Económica',
    description: 'La banque de référence pour vos projets immobiliers. Service personnalisé et traitement rapide des dossiers.',
    email: 'info@caixa.cv',
    phone: '+238 260 3600',
    website: 'https://www.caixa.cv',
    address: 'Plateau, Praia, Cap-Vert',
    specialties: [
      'Simulateur crédit en ligne',
      'Garanties flexibles',
      'Service Diaspora dédié',
    ],
    commissionRate: 0.6,
    featured: false,
    status: 'active',
    partneredSince: '2023-03-10',
    totalLeadsGenerated: 85,
    totalCommissionsEarned: 28400
  },
  {
    id: 'bank_bi',
    type: 'bank',
    name: 'Banco Interatlântico',
    description: 'Une expertise internationale pour sécuriser vos transactions. Partenaire privilégié du groupe CGD.',
    email: 'bi.clientes@bi.cv',
    phone: '+238 262 5000',
    website: 'https://www.bi.cv',
    address: 'Av. Cidade de Lisboa, Praia',
    specialties: [
      'Financement promoteurs',
      'Conseil en investissement',
      'Solutions devises étrangères'
    ],
    commissionRate: 0.55,
    featured: false,
    status: 'active',
    partneredSince: '2023-06-20',
    totalLeadsGenerated: 42,
    totalCommissionsEarned: 12600
  },

  // CONSULTANTS
  {
    id: 'cons_caboverde_invest',
    type: 'consultant',
    name: 'CV Invest Partners',
    description: 'Cabinet de conseil spécialisé dans l\'accompagnement de la diaspora pour l\'investissement sécurisé au pays.',
    email: 'contact@cvinvest.com',
    phone: '+33 1 45 67 89 00',
    address: 'Paris, France & Praia, Cap-Vert',
    specialties: [
      'Stratégie d\'investissement',
      'Études de marché',
      'Conciergerie administrative'
    ],
    commissionRate: 10, // 10% de leurs honoraires
    featured: true,
    status: 'active',
    partneredSince: '2023-02-01',
    totalLeadsGenerated: 56,
    totalCommissionsEarned: 8400
  },
  {
    id: 'cons_diaspora_connect',
    type: 'consultant',
    name: 'Diaspora Connect USA',
    description: 'Votre pont entre les USA et le Cap-Vert. Nous facilitons toutes vos démarches administratives et financières.',
    email: 'hello@diasporaconnect.us',
    phone: '+1 617 555 0123',
    address: 'Boston, MA, USA',
    specialties: [
      'Gestion de patrimoine',
      'Retraite au Cap-Vert',
      'Création d\'entreprise'
    ],
    commissionRate: 12,
    featured: false,
    status: 'active',
    partneredSince: '2023-08-15',
    totalLeadsGenerated: 34,
    totalCommissionsEarned: 5100
  },

  // LAWYERS
  {
    id: 'law_santos_associados',
    type: 'lawyer',
    name: 'Santos & Associados',
    description: 'Cabinet d\'avocats leader en droit immobilier et des affaires. Sécurisation juridique totale de vos acquisitions.',
    email: 'secretaria@santoslaw.cv',
    phone: '+238 261 1010',
    address: 'Praia, Santiago',
    specialties: [
      'Droit immobilier',
      'Due diligence',
      'Contrats de vente',
      'Régularisation foncière'
    ],
    commissionRate: 15, // 15% des honoraires
    featured: true,
    status: 'active',
    partneredSince: '2022-11-10',
    totalLeadsGenerated: 92,
    totalCommissionsEarned: 14800
  },
  {
    id: 'law_evora_legal',
    type: 'lawyer',
    name: 'Évora Legal Group',
    description: 'Avocats multilingues (FR/EN/PT) spécialisés dans l\'assistance aux investisseurs étrangers.',
    email: 'contact@evoralegal.cv',
    phone: '+238 232 4040',
    address: 'Mindelo, São Vicente',
    specialties: [
      'Fiscalité internationale',
      'Golden Visa',
      'Successions'
    ],
    commissionRate: 15,
    featured: false,
    status: 'active',
    partneredSince: '2023-05-05',
    totalLeadsGenerated: 45,
    totalCommissionsEarned: 6750
  }
];

export const getServicesByType = (type: 'bank' | 'consultant' | 'lawyer') => {
  return professionalServices.filter(s => s.type === type && s.status === 'active');
};

export const getFeaturedServices = () => {
  return professionalServices.filter(s => s.featured && s.status === 'active');
};

export const getServiceById = (id: string) => {
  return professionalServices.find(s => s.id === id);
};
