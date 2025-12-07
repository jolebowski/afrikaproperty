import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, Loader2, Send, X } from 'lucide-react';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { useTranslation } from '../../i18n/I18nProvider';
import type { ProfessionalService, ServiceLead } from '../../types/professionalServices';
import { Button } from '../ui/Button';

interface ServiceLeadFormProps {
  service: ProfessionalService | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function ServiceLeadForm({ service, isOpen, onClose, onSuccess }: ServiceLeadFormProps) {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [trackingCode, setTrackingCode] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    country: '',
    message: '',
    consent: false
  });

  if (!isOpen || !service) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate Tracking Code
    const date = new Date();
    const code = `CAPVERT-${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
    setTrackingCode(code);

    // Calculate Commission (Simulation)
    const amount = parseFloat(formData.amount) || 0;
    const expectedCommission = service.type === 'bank' 
      ? (amount * service.commissionRate) / 100 
      : (service.commissionRate * 10); // Simple mock calculation for non-banks

    // Create Lead Object
    const newLead: ServiceLead = {
      id: `lead_${Date.now()}`,
      trackingCode: code,
      serviceId: service.id,
      serviceName: service.name,
      serviceType: service.type,
      clientName: formData.name,
      clientEmail: formData.email,
      clientPhone: formData.phone,
      clientMessage: formData.message,
      estimatedAmount: amount,
      expectedCommissionRate: service.commissionRate,
      expectedCommissionAmount: expectedCommission,
      status: 'new',
      commissionStatus: 'pending',
      dateCreated: new Date().toISOString(),
    };

    // Save to LocalStorage (Simulating DB)
    const existingLeads = JSON.parse(localStorage.getItem('serviceLeads') || '[]');
    localStorage.setItem('serviceLeads', JSON.stringify([newLead, ...existingLeads]));

    setIsLoading(false);
    setIsSuccess(true);
    
    // Reset after success view
    setTimeout(() => {
        onSuccess();
        setIsSuccess(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            amount: '',
            country: '',
            message: '',
            consent: false
        })
    }, 4000); // Close automatically after 4s
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {t('services.lead.form.title', { fallback: 'Demander un devis' })}
                </h3>
                <p className="text-sm text-gray-500">{service.name}</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {isSuccess ? (
                <div className="text-center py-8">
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="h-8 w-8" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Demande envoyée !</h4>
                  <p className="text-gray-600 mb-6">
                    Votre demande a bien été transmise à notre partenaire. Voici votre code de suivi :
                  </p>
                  <div className="bg-gray-100 py-3 px-6 rounded-lg font-mono text-lg font-semibold text-primary mb-6 inline-block border border-gray-200">
                    {trackingCode}
                  </div>
                  <p className="text-sm text-gray-400">
                    Cette fenêtre va se fermer automatiquement...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1 space-y-1">
                      <label className="text-xs font-medium text-gray-700">{t('services.lead.form.name', { fallback: 'Nom complet' })}</label>
                      <input 
                        required 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="col-span-2 sm:col-span-1 space-y-1">
                        <label className="text-xs font-medium text-gray-700">{t('services.lead.form.email', { fallback: 'Email' })}</label>
                        <input 
                            required 
                            type="email" 
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1 space-y-1">
                        <label className="text-xs font-medium text-gray-700">{t('services.lead.form.phone', { fallback: 'Téléphone' })}</label>
                        <input 
                            required 
                            type="tel" 
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                            value={formData.phone}
                            onChange={e => setFormData({...formData, phone: e.target.value})}
                        />
                    </div>
                    
                    <div className="col-span-2 sm:col-span-1 space-y-1">
                    {service.type === 'bank' ? (
                        <>
                            <label className="text-xs font-medium text-gray-700">{t('services.lead.form.amount', { fallback: 'Montant du prêt (€)' })}</label>
                            <input 
                                required 
                                type="number" 
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                                value={formData.amount}
                                onChange={e => setFormData({...formData, amount: e.target.value})}
                                placeholder="ex: 150000"
                            />
                        </>
                    ) : service.type === 'consultant' ? (
                       <>
                            <label className="text-xs font-medium text-gray-700">{t('services.lead.form.country', { fallback: 'Pays de résidence' })}</label>
                            <input 
                                required 
                                type="text" 
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                                value={formData.country}
                                onChange={e => setFormData({...formData, country: e.target.value})}
                            />
                       </>
                    ) : (
                        <>
                            <label className="text-xs font-medium text-gray-700">Type de transaction</label>
                            <select 
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm bg-white"
                                value={formData.amount} // Using amount field for type storage simplification or create new field
                                onChange={e => setFormData({...formData, amount: e.target.value})}
                            >
                                <option value="">Choisir...</option>
                                <option value="purchase">Achat Immobilier</option>
                                <option value="legal">Conseil Juridique</option>
                                <option value="visa">Visa / Résidence</option>
                            </select>
                        </>
                    )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-700">{t('services.lead.form.message', { fallback: 'Message (optionnel)' })}</label>
                    <textarea 
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm h-24 resize-none"
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input 
                        required 
                        type="checkbox" 
                        id="consent"
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        checked={formData.consent}
                        onChange={e => setFormData({...formData, consent: e.target.checked})}
                    />
                    <label htmlFor="consent" className="text-xs text-gray-500 leading-tight">
                        {t('services.lead.form.consent', { fallback: 'J\'accepte que mes données soient transmises à ce partenaire pour le traitement de ma demande. Je comprends que Afrika Property peut percevoir une commission en tant qu\'apporteur d\'affaires.' })}
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading} 
                    className="w-full mt-4"
                  >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                            Traitement...
                        </>
                    ) : (
                        <>
                            <Send className="mr-2 h-4 w-4" /> 
                            {t('services.lead.form.submit', { fallback: 'Envoyer la demande gratuitement' })}
                        </>
                    )}
                  </Button>
                </form>
              )}
            </div>
            
            {/* Footer decoration */}
            <div className="h-1 bg-gradient-to-r from-primary to-primary/40" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
