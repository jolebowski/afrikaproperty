import { motion } from 'framer-motion';
import {
    Briefcase,
    Building2,
    CheckCircle,
    Clock,
    Download,
    Eye,
    Filter,
    Mail,
    Phone,
    Search
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { calculateTotalCommissions, mockServiceLeads } from '../../data/serviceLeads';
import { useTranslation } from '../../i18n/I18nProvider';
import type { ServiceLead } from '../../types/professionalServices';

export default function ServiceLeads() {
  const { t } = useTranslation();
  const [filterStatus, setFilterStatus] = useState<'all' | 'new' | 'pending' | 'paid'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLead, setSelectedLead] = useState<ServiceLead | null>(null);

  // Filter Logic
  const filteredLeads = mockServiceLeads.filter(lead => {
    const matchesSearch = 
      lead.clientName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      lead.trackingCode.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterStatus === 'all') return matchesSearch;
    if (filterStatus === 'paid') return matchesSearch && lead.commissionStatus === 'paid';
    return matchesSearch && lead.status === filterStatus;
  });

  // KPI Calculations
  const totalCommission = calculateTotalCommissions();
  const pendingCommission = calculateTotalCommissions('pending');
  const totalLeads = mockServiceLeads.length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new': return <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">Nouveau</span>;
      case 'contacted': return <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">Contacté</span>;
      case 'in_progress': return <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">En cours</span>;
      case 'completed': return <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">Terminé</span>;
      case 'cancelled': return <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-medium">Annulé</span>;
      default: return null;
    }
  };

  const getCommissionBadge = (status: string) => {
    switch (status) {
        case 'paid': return <span className="px-2 py-1 rounded-full border border-green-200 text-green-700 text-xs font-medium flex items-center gap-1"><CheckCircle className="h-3 w-3" /> Payée</span>;
        case 'pending': return <span className="px-2 py-1 rounded-full border border-orange-200 text-orange-700 text-xs font-medium flex items-center gap-1"><Clock className="h-3 w-3" /> En attente</span>;
        case 'invoiced': return <span className="px-2 py-1 rounded-full border border-blue-200 text-blue-700 text-xs font-medium">Facturée</span>;
        default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              {t('leads.services.title', { fallback: 'Suivi des Apporteurs' })}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Gérez vos commissions et suivez l'avancement des dossiers partenaires.
            </p>
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-sm font-medium text-gray-500 mb-2">Commissions Gagnées</p>
                <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-gray-900">{totalCommission.toLocaleString('fr-FR')} €</span>
                    <span className="text-xs text-green-600 font-medium mb-1">+12% vs last month</span>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-sm font-medium text-gray-500 mb-2">Commissions En Attente</p>
                <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-primary">{pendingCommission.toLocaleString('fr-FR')} €</span>
                    <span className="text-xs text-gray-400 mb-1">~ 15-30 jours</span>
                </div>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-sm font-medium text-gray-500 mb-2">Leads Totaux</p>
                <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-gray-900">{totalLeads}</span>
                    <span className="text-xs text-gray-400 mb-1">depuis le début</span>
                </div>
            </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder={t('leads.search.placeholder', { fallback: 'Rechercher par nom ou code...' })}
                        className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
                    <Button 
                        variant={filterStatus === 'all' ? 'primary' : 'ghost'} 
                        size="sm"
                        onClick={() => setFilterStatus('all')}
                    >
                        Tout voir
                    </Button>
                    <Button 
                        variant={filterStatus === 'new' ? 'primary' : 'ghost'} 
                        size="sm"
                        onClick={() => setFilterStatus('new')}
                    >
                        Nouveaux
                    </Button>
                    <Button 
                        variant={filterStatus === 'pending' ? 'primary' : 'ghost'} 
                        size="sm"
                        onClick={() => setFilterStatus('pending')} // Actually filtering by commission status might be better logic, keeping simple for now
                    >
                        En attente
                    </Button>
                     <Button 
                        variant={filterStatus === 'paid' ? 'primary' : 'ghost'} 
                        size="sm"
                        onClick={() => setFilterStatus('paid')}
                    >
                        Payés
                    </Button>
                </div>
            </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4">Tracking ID</th>
                            <th className="px-6 py-4">Partenaire</th>
                            <th className="px-6 py-4">Client</th>
                            <th className="px-6 py-4">Montant Est.</th>
                            <th className="px-6 py-4">Commission</th>
                            <th className="px-6 py-4">Statut</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredLeads.map((lead) => (
                            <motion.tr 
                                key={lead.id} 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="group hover:bg-gray-50 transition-colors"
                            >
                                <td className="px-6 py-4">
                                    <span className="font-mono text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{lead.trackingCode}</span>
                                    <div className="text-xs text-gray-400 mt-1">{new Date(lead.dateCreated).toLocaleDateString()}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 bg-primary/5 rounded-md text-primary">
                                            <Building2 className="h-4 w-4" />
                                        </div>
                                        <span className="font-medium text-gray-900">{lead.serviceName}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-medium text-gray-900">{lead.clientName}</div>
                                    <div className="text-xs text-gray-500">{lead.clientEmail}</div>
                                </td>
                                <td className="px-6 py-4">
                                    {lead.estimatedAmount?.toLocaleString('fr-FR')} €
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-bold text-gray-900">
                                        {lead.expectedCommissionAmount.toLocaleString('fr-FR')} €
                                    </div>
                                    {getCommissionBadge(lead.commissionStatus)}
                                </td>
                                <td className="px-6 py-4">
                                    {getStatusBadge(lead.status)}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Button variant="ghost" size="sm" onClick={() => setSelectedLead(lead)}>
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {filteredLeads.length === 0 && (
                <div className="p-12 text-center text-gray-500">
                    <Filter className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                    <p>Aucun lead trouvé pour ces critères.</p>
                </div>
            )}
        </div>
      </div>

      {/* Detail Modal (Simple Implementation) */}
      {selectedLead && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedLead(null)}>
            <div className="bg-white rounded-2xl w-full max-w-2xl p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-xl font-bold">Détails du Lead</h2>
                        <p className="text-sm text-gray-500 font-mono">{selectedLead.trackingCode}</p>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setSelectedLead(null)}>Fermer</Button>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                        <h3 className="font-semibold text-sm text-gray-900 uppercase tracking-wide">Info Client</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="font-medium text-gray-900">{selectedLead.clientName}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Mail className="h-4 w-4" /> {selectedLead.clientEmail}
                            </div>
                             <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Phone className="h-4 w-4" /> {selectedLead.clientPhone}
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                         <h3 className="font-semibold text-sm text-gray-900 uppercase tracking-wide">Commission</h3>
                         <div className="p-4 bg-gray-50 rounded-lg">
                            <div className="flex justify-between mb-2 text-sm">
                                <span className="text-gray-500">Montant estimé</span>
                                <span className="font-medium">{selectedLead.estimatedAmount?.toLocaleString()} €</span>
                            </div>
                            <div className="flex justify-between mb-2 text-sm">
                                <span className="text-gray-500">Taux</span>
                                <span className="font-medium">{selectedLead.expectedCommissionRate}%</span>
                            </div>
                            <div className="pt-2 border-t border-gray-200 flex justify-between">
                                <span className="font-bold text-gray-900">Commission</span>
                                <span className="font-bold text-primary">{selectedLead.expectedCommissionAmount.toLocaleString()} €</span>
                            </div>
                         </div>
                    </div>
                </div>

                <div className="mb-6">
                     <h3 className="font-semibold text-sm text-gray-900 uppercase tracking-wide mb-2">Message</h3>
                     <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg italic">
                        "{selectedLead.clientMessage || 'Aucun message'}"
                     </p>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                    <Button variant="outline">Contacter le Partenaire</Button>
                    <Button>Mettre à jour le statut</Button>
                </div>
            </div>
         </div>
      )}
    </div>
  );
}
