import { Search } from "lucide-react";
import { useTranslation } from "../../i18n/I18nProvider";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function Hero() {
  const { t } = useTranslation();

  const title = t<string>("home.hero.title", { fallback: "L'Immobilier d'Exception" });
  const accent = t<string>("home.hero.accent", { fallback: "au Cap-Vert" });

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop" 
          alt="Cape Verde Coastline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white pt-20">
        <div className="flex flex-col items-center">
          <Reveal delay={0.2}>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-[1.1]">
              {title} <br />
              <span className="italic font-light">{accent}</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.4}>
            <p className="text-lg md:text-xl mb-10 max-w-2xl text-gray-200 font-light">
              {t("home.hero.subtitle", {
                fallback:
                  "Découvrez une sélection exclusive de propriétés de luxe, villas en bord de mer et opportunités d'investissement uniques.",
              })}
            </p>
          </Reveal>

          <Reveal delay={0.6} width="100%">
            {/* Search Bar */}
            <div className="bg-white p-2 rounded-3xl md:rounded-full shadow-2xl max-w-3xl mx-auto flex flex-col md:flex-row gap-2">
              <div className="flex-1 px-6 py-3 border-b md:border-b-0 md:border-r border-gray-100">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 text-left">
                  {t("home.hero.locationLabel", { fallback: "Localisation" })}
                </label>
                <select className="w-full outline-none text-gray-900 font-medium bg-transparent cursor-pointer appearance-none">
                  <option value="">{t("home.hero.locationPlaceholder", { fallback: "Toutes les îles" })}</option>
                  <option value="sal">{t("home.hero.islands.sal", { fallback: "Sal" })}</option>
                  <option value="boaVista">{t("home.hero.islands.boaVista", { fallback: "Boa Vista" })}</option>
                  <option value="santiago">{t("home.hero.islands.santiago", { fallback: "Santiago" })}</option>
                  <option value="saoVicente">{t("home.hero.islands.saoVicente", { fallback: "São Vicente" })}</option>
                  <option value="santoAntao">{t("home.hero.islands.santoAntao", { fallback: "Santo Antão" })}</option>
                  <option value="maio">{t("home.hero.islands.maio", { fallback: "Maio" })}</option>
                  <option value="fogo">{t("home.hero.islands.fogo", { fallback: "Fogo" })}</option>
                  <option value="saoNicolau">{t("home.hero.islands.saoNicolau", { fallback: "São Nicolau" })}</option>
                  <option value="brava">{t("home.hero.islands.brava", { fallback: "Brava" })}</option>
                </select>
              </div>
              <div className="flex-1 px-6 py-3 border-b md:border-b-0 md:border-r border-gray-100">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 text-left">
                  {t("home.hero.typeLabel", { fallback: "Type de bien" })}
                </label>
                <select className="w-full outline-none text-gray-900 font-medium bg-transparent cursor-pointer appearance-none">
                  <option>{t("home.hero.typeAny", { fallback: "Tous types" })}</option>
                  <option>{t("home.hero.typeVilla", { fallback: "Villa" })}</option>
                  <option>{t("home.hero.typeApartment", { fallback: "Appartement" })}</option>
                  <option>{t("home.hero.typeLand", { fallback: "Terrain" })}</option>
                </select>
              </div>
              <div className="flex-1 px-6 py-3">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 text-left">
                  {t("home.hero.budgetLabel", { fallback: "Budget" })}
                </label>
                <select className="w-full outline-none text-gray-900 font-medium bg-transparent cursor-pointer appearance-none">
                  <option>{t("home.hero.budgetAny", { fallback: "Tout budget" })}</option>
                  <option>{t("home.hero.budget1", { fallback: "100k - 250k €" })}</option>
                  <option>{t("home.hero.budget2", { fallback: "250k - 500k €" })}</option>
                  <option>{t("home.hero.budget3", { fallback: "500k € +" })}</option>
                </select>
              </div>
              <Button size="lg" className="rounded-full px-8 h-auto py-3 md:py-0">
                <Search className="h-5 w-5 md:mr-2" />
                <span className="hidden md:inline">
                  {t("home.hero.search", { fallback: "Rechercher" })}
                </span>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
