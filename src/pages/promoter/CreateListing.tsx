
import { ArrowLeft, FileText, Upload } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DashboardHeader } from "../../components/dashboard/DashboardHeader";
import { AdPromotionOptions, PROMOTION_DEFINITIONS } from "../../components/publish/AdPromotionOptions";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Reveal } from "../../components/ui/Reveal";
import { useToast } from "../../components/ui/Toast";
import { useTranslation } from "../../i18n/I18nProvider";

export function CreateListing() {
  const { addToast } = useToast();
  const navigate = useNavigate();
  const { t, formatCurrency } = useTranslation();
  const [promotionOptions, setPromotionOptions] = useState<string[]>([]);

  const totalPrice = promotionOptions.reduce((total, optionId) => {
    const option = PROMOTION_DEFINITIONS.find(o => o.id === optionId);
    return total + (option?.price || 0);
  }, 0);

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    addToast("Annonce publiée avec succès !", "success");
    setTimeout(() => navigate("/promoter/dashboard"), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <DashboardHeader promoterName="Horizon Immobilier" />

      <main className="container-custom py-8">
        <Reveal>
          <div className="mb-6">
            <Link to="/promoter/dashboard" className="inline-flex items-center text-gray-500 hover:text-[#C7A86A] transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t<string>("createListing.backToDashboard")}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl mx-auto">
            <div className="p-6 border-b border-gray-100">
              <h1 className="font-serif text-2xl font-bold text-gray-900">{t<string>("createListing.title")}</h1>
              <p className="text-gray-500 text-sm">{t<string>("createListing.subtitle")}</p>
            </div>

            <form className="p-8 space-y-8" onSubmit={handlePublish}>
              {/* General Info */}
              <section className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2 text-gray-900">{t<string>("createListing.general.title")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t<string>("createListing.general.listingTitle")}</label>
                    <Input placeholder={t<string>("createListing.general.listingTitlePlaceholder")} className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t<string>("createListing.general.transactionType")}</label>
                    <select className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A86A] focus:border-[#C7A86A]">
                      <option>{t<string>("createListing.general.types.sale")}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t<string>("createListing.general.propertyType")}</label>
                    <select className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A86A] focus:border-[#C7A86A]">
                      <option>{t<string>("createListing.general.types.apartment")}</option>
                      <option>{t<string>("createListing.general.types.house")}</option>
                      <option>{t<string>("createListing.general.types.land")}</option>
                      <option>{t<string>("createListing.general.types.commercial")}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t<string>("createListing.general.price")}</label>
                    <Input type="number" placeholder="0" className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t<string>("createListing.general.surface")}</label>
                    <Input type="number" placeholder="0" className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                </div>
              </section>

              {/* Location */}
              <section className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2 text-gray-900">{t<string>("createListing.location.title")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t<string>("createListing.location.island")}</label>
                    <select className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A86A] focus:border-[#C7A86A]">
                      <option>Sal</option>
                      <option>Boa Vista</option>
                      <option>Santiago</option>
                      <option>São Vicente</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t<string>("createListing.location.city")}</label>
                    <Input placeholder={t<string>("createListing.location.cityPlaceholder")} className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t<string>("createListing.location.address")}</label>
                    <Input placeholder={t<string>("createListing.location.addressPlaceholder")} className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                </div>
              </section>

              {/* Details */}
              <section className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2 text-gray-900">{t<string>("createListing.details.title")}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t<string>("createListing.details.bedrooms")}</label>
                    <Input type="number" className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t<string>("createListing.details.bathrooms")}</label>
                    <Input type="number" className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">{t<string>("createListing.details.amenities")}</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      { key: "pool", label: t<string>("createListing.details.list.pool") },
                      { key: "garden", label: t<string>("createListing.details.list.garden") },
                      { key: "garage", label: t<string>("createListing.details.list.garage") },
                      { key: "seaview", label: t<string>("createListing.details.list.seaview") },
                      { key: "ac", label: t<string>("createListing.details.list.ac") },
                      { key: "furnished", label: t<string>("createListing.details.list.furnished") },
                      { key: "elevator", label: t<string>("createListing.details.list.elevator") },
                      { key: "security", label: t<string>("createListing.details.list.security") }
                    ].map((item) => (
                      <label key={item.key} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="rounded border-gray-300 text-[#C7A86A] focus:ring-[#C7A86A]" />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t<string>("createListing.details.description")}</label>
                  <textarea className="w-full min-h-[150px] rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A86A] focus:border-[#C7A86A]" placeholder={t<string>("createListing.details.descriptionPlaceholder")} />
                </div>
              </section>

              {/* Media */}
              <section className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2 text-gray-900">{t<string>("createListing.media.title")}</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group hover:border-[#C7A86A]/50">
                  <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4 group-hover:text-[#C7A86A] transition-colors" />
                  <p className="text-sm text-gray-600 font-medium">{t<string>("createListing.media.dragDrop")}</p>
                  <p className="text-xs text-gray-400 mt-1">{t<string>("createListing.media.format")}</p>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <FileText className="h-8 w-8 text-gray-400" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{t<string>("createListing.media.documents")}</p>
                    <p className="text-xs text-gray-500">{t<string>("createListing.media.docTypes")}</p>
                  </div>
                  <Button variant="outline" size="sm" type="button">{t<string>("createListing.media.add")}</Button>
                </div>
              </section>

              {/* Promotion Options */}
              <AdPromotionOptions 
                selectedOptions={promotionOptions} 
                onChange={setPromotionOptions} 
              />

              {/* Sticky Actions Footer */}
              <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-20 shadow-lg">
                <div className="container-custom max-w-4xl flex justify-end gap-4">
                  <Button variant="ghost" type="button">{t<string>("createListing.draft")}</Button>
                  <div className="flex items-center gap-4">
                    {totalPrice > 0 && (
                      <div className="text-right">
                        <span className="block text-xs text-gray-500">{t<string>("promotion.totalToPay")}</span>
                        <span className="block font-bold text-xl text-gray-900">{formatCurrency(totalPrice)}</span>
                      </div>
                    )}
                    <Button className="bg-[#C7A86A] hover:bg-[#B6965A]" type="submit">
                      {totalPrice > 0 ? t<string>("promotion.payAndPublish") : t<string>("promotion.publish")}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Reveal>
      </main>
    </div>
  );
}
