import { ArrowUpRight, Handshake, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { calculateTotalCommissions, mockServiceLeads } from '../../data/serviceLeads';
import { useTranslation } from '../../i18n/I18nProvider';
import { Button } from '../ui/Button';

export function ServiceCommissionWidget() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Calculate stats
  const totalEarned = calculateTotalCommissions('paid');
  const pending = calculateTotalCommissions('pending');
  const activeLeads = mockServiceLeads.filter(l => l.status === 'new' || l.status === 'in_progress').length;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <Handshake className="h-5 w-5 text-primary" />
            {t('dashboard.services.title', { fallback: 'Services & Apporteur' })}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {t('dashboard.services.subtitle', { fallback: 'Suivez vos commissions partenaires' })}
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={() => navigate('/promoter/leads/services')}>
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
          <p className="text-xs text-gray-500 mb-1">{t('dashboard.services.activeLeads', { fallback: 'Leads Actifs' })}</p>
          <div className="text-2xl font-bold text-gray-900">{activeLeads}</div>
        </div>
        <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
          <p className="text-xs text-primary/80 mb-1">{t('dashboard.services.pendingCommissions', { fallback: 'Commissions à venir' })}</p>
          <div className="text-2xl font-bold text-primary">{pending.toLocaleString('fr-FR')} €</div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
         <div className="flex items-center gap-2">
            <div className="p-1.5 bg-green-100 rounded-md text-green-700">
                <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
                <span className="text-xs text-gray-500">Total gagné</span>
                <span className="text-sm font-bold text-green-700">+{totalEarned.toLocaleString('fr-FR')} €</span>
            </div>
         </div>
         <Button variant="outline" size="sm" onClick={() => navigate('/promoter/leads/services')} className="text-xs">
            {t('common.viewDetails', { fallback: 'Voir détails' })}
         </Button>
      </div>
    </div>
  );
}
