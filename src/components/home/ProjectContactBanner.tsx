import { ArrowRight, MessageSquare } from "lucide-react";
import { useTranslation } from "../../i18n/I18nProvider";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Reveal } from "../ui/Reveal";

export function ProjectContactBanner() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-40 bg-[#111111]">
      
      {/* Background Texture (Top) */}
      <div className="absolute inset-0 h-[600px] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Background Texture" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/50 to-[#111111]" />
      </div>

      {/* Light Bottom Background */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gray-50 z-0" />

      <div className="container-custom relative z-10">
        
        {/* Header Content (on dark background) */}
        <div className="text-center mb-16 md:mb-24">
          <Reveal>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm font-medium mb-8">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span>{t("home.contactBanner.tag", { fallback: "Consultation Offerte" })}</span>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t("home.contactBanner.title", { fallback: "Votre vision, notre expertise." })}
            </h2>
          </Reveal>
          
          <Reveal delay={0.4}>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              {t("home.contactBanner.description", {
                fallback:
                  "Discutons de vos ambitions immobilières au Cap-Vert. Nos directeurs de projet sont à votre disposition pour une étude personnalisée.",
              })}
            </p>
          </Reveal>
        </div>

        {/* Floating Card (Overlapping) */}
        <Reveal delay={0.6} direction="up">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.1)] p-8 md:p-12 lg:p-16 relative">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                    {t("common.firstName", { fallback: "Prénom" })}
                  </label>
                  <Input 
                    className="h-14 bg-gray-100 border-gray-200 focus:bg-white focus:border-primary/20 rounded-xl text-lg text-gray-900 placeholder:text-gray-500 transition-all"
                    placeholder={t("home.contactBanner.placeholders.firstName", { fallback: "Votre prénom" })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                    {t("common.lastName", { fallback: "Nom" })}
                  </label>
                  <Input 
                    className="h-14 bg-gray-100 border-gray-200 focus:bg-white focus:border-primary/20 rounded-xl text-lg text-gray-900 placeholder:text-gray-500 transition-all"
                    placeholder={t("home.contactBanner.placeholders.lastName", { fallback: "Votre nom" })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                  {t("common.emailOrPhone", { fallback: "Email ou téléphone" })}
                </label>
                <Input 
                  className="h-14 bg-gray-100 border-gray-200 focus:bg-white focus:border-primary/20 rounded-xl text-lg text-gray-900 placeholder:text-gray-500 transition-all"
                  placeholder={t("common.emailOrPhone", { fallback: "Email ou téléphone" })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                  {t("common.project", { fallback: "Votre Projet" })}
                </label>
                <textarea 
                  className="w-full min-h-[120px] rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-lg text-gray-900 ring-offset-background placeholder:text-gray-500 focus:bg-white focus:border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                  placeholder={t("home.contactBanner.placeholders.project", { fallback: "Je souhaite investir dans..." })}
                />
              </div>

              <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-sm text-gray-400 text-center md:text-left">
                  {t("common.consent", {
                    fallback: "En cliquant sur envoyer, vous acceptez d'être recontacté par nos équipes.",
                  })}
                </p>
                <Button size="lg" className="w-full md:w-auto h-16 px-12 text-lg bg-primary hover:bg-primary-hover text-white rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300">
                  {t("home.contactBanner.submit", { fallback: "Envoyer ma demande" })}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
