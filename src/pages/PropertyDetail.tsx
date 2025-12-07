import { ArrowLeft, Bath, Bed, MapPin, Maximize, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { AgencyBadge } from "../components/agency/AgencyBadge";
import { ContactForm } from "../components/property/ContactForm";
import { PropertyAmenities } from "../components/property/PropertyAmenities";
import { PropertyGallery } from "../components/property/PropertyGallery";
import { PropertyInvestmentProjection } from "../components/property/PropertyInvestmentProjection";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { AGENCIES } from "../data/agencies";
import { PROPERTIES } from "../data/properties";
import { useTranslation } from "../i18n/I18nProvider";

export function PropertyDetail() {
  const { id } = useParams();
  const property = PROPERTIES.find((p) => p.id === id);
  const { t, formatCurrency } = useTranslation();

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-serif font-bold mb-4">
          {t("property.detail.notFound", { fallback: "Propriété non trouvée" })}
        </h1>
        <Link to="/properties">
          <Button>{t("property.detail.back", { fallback: "Retour aux propriétés" })}</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="container-custom">
        {/* Breadcrumb / Back */}
        <div className="mb-6">
          <Link to="/properties" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("property.detail.back", { fallback: "Retour aux propriétés" })}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  {property.isNew && (
                    <Badge variant="default">
                      {t("property.badges.new", { fallback: "Nouveau" })}
                    </Badge>
                  )}
                  {property.isExclusive && (
                    <Badge variant="secondary">
                      {t("property.badges.exclusive", { fallback: "Exclusif" })}
                    </Badge>
                  )}
                  <Badge variant="outline" className="uppercase">
                    {t("property.badges.sale", { fallback: "Achat" })}
                  </Badge>
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {property.title}
                </h1>
                <div className="flex items-center text-gray-500">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  {property.location}
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary mb-2">
                  {formatCurrency(property.price, property.currency)}
                </div>
                <Button variant="ghost" size="sm" className="text-gray-500">
                  <Share2 className="h-4 w-4 mr-2" />
                  {t("property.detail.share", { fallback: "Partager" })}
                </Button>
              </div>
            </div>

            {/* Gallery */}
            <PropertyGallery images={property.images} />

            {/* Key Specs */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200">
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                <Bed className="h-6 w-6 text-primary mb-2" />
                <span className="font-bold text-lg">{property.bedrooms}</span>
                <span className="text-xs text-gray-500 uppercase">
                  {t("property.metrics.bedrooms", { fallback: "Chambres" })}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                <Bath className="h-6 w-6 text-primary mb-2" />
                <span className="font-bold text-lg">{property.bathrooms}</span>
                <span className="text-xs text-gray-500 uppercase">
                  {t("property.metrics.bathrooms", { fallback: "Salles de bain" })}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                <Maximize className="h-6 w-6 text-primary mb-2" />
                <span className="font-bold text-lg">{property.area}</span>
                <span className="text-xs text-gray-500 uppercase">
                  {t("property.metrics.areaUnit", { fallback: "m²" })}{" "}
                  {t("property.metrics.area", { fallback: "Surface" })}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold mb-4">
                {t("property.detail.descriptionTitle", { fallback: "Description" })}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t("property.detail.descriptionParagraph1", {
                  fallback:
                    "Découvrez cette magnifique propriété située au cœur de {{location}}. Offrant des prestations haut de gamme et une architecture moderne, ce bien est idéal pour un investissement locatif ou une résidence secondaire. Profitez d'une vue imprenable et d'un cadre de vie exceptionnel.",
                  params: { location: property.location },
                })}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t("property.detail.descriptionParagraph2", {
                  fallback:
                    "Les finitions sont soignées, avec des matériaux nobles importés. La résidence dispose de toutes les commodités nécessaires pour un confort optimal.",
                })}
              </p>
            </div>

            {/* Amenities */}
            <PropertyAmenities />

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold mb-4">
                {t("property.detail.locationTitle", { fallback: "Localisation" })}
              </h2>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MapPin className="h-10 w-10 mx-auto mb-2 opacity-50" />
                  <p>
                    {t("property.detail.mapPlaceholder", {
                      fallback: "Carte interactive indisponible dans la maquette",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Agency Info */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
               <h3 className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-wider">
                  {t('property.detail.presentedBy', { fallback: 'Proposé par' })}
               </h3>
               {property.agencyId && (
                  <AgencyBadge 
                    agency={AGENCIES.find(a => a.id === property.agencyId)} 
                  />
               )}
            </div>
            <ContactForm />
            <PropertyInvestmentProjection price={property.price} currency={property.currency} />
          </div>
        </div>
      </div>
    </div>
  );
}
