import { Check, Pin, Star, TrendingUp } from "lucide-react";
import { useTranslation } from "../../i18n/I18nProvider";
import { Reveal } from "../ui/Reveal";

export interface PromotionDefinition {
  id: string;
  icon: React.ElementType;
  price: number;
}

export const PROMOTION_DEFINITIONS: PromotionDefinition[] = [
  {
    id: "boost-7",
    icon: TrendingUp,
    price: 29,
  },
  {
    id: "boost-30",
    icon: TrendingUp,
    price: 79,
  },
  {
    id: "pinned",
    icon: Pin,
    price: 49,
  },
  {
    id: "homepage",
    icon: Star,
    price: 149,
  }
];

interface AdPromotionOptionsProps {
  selectedOptions: string[];
  onChange: (options: string[]) => void;
}

export function AdPromotionOptions({ selectedOptions, onChange }: AdPromotionOptionsProps) {
  const { t, formatCurrency } = useTranslation();
  
  const toggleOption = (id: string) => {
    let newOptions = [...selectedOptions];
    
    // Handle mutual exclusivity for boosts
    if (id === 'boost-7') {
      newOptions = newOptions.filter(o => o !== 'boost-30');
    }
    if (id === 'boost-30') {
      newOptions = newOptions.filter(o => o !== 'boost-7');
    }

    if (newOptions.includes(id)) {
      newOptions = newOptions.filter(o => o !== id);
    } else {
      newOptions.push(id);
    }
    
    onChange(newOptions);
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#C7A86A] text-white font-bold text-lg">
          $
        </div>
        <h3 className="font-bold text-lg text-gray-900">
          {t("promotion.title")}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROMOTION_DEFINITIONS.map((def, index) => {
          const isSelected = selectedOptions.includes(def.id);
          const label = t<string>(`promotion.options.${def.id}.label`);
          const description = t<string>(`promotion.options.${def.id}.description`);
          const duration = t<string | undefined>(`promotion.options.${def.id}.duration`, { fallback: undefined });
          
          return (
            <Reveal key={def.id} delay={index * 0.1} width="100%" className="h-full">
              <div 
                onClick={() => toggleOption(def.id)}
                className={`
                  relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 h-full
                  hover:border-[#C7A86A]/50 hover:bg-gray-50
                  ${isSelected 
                    ? 'border-[#C7A86A] bg-[#C7A86A]/5' 
                    : 'border-gray-200 bg-white'
                  }
                `}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg transition-colors ${isSelected ? 'bg-[#C7A86A] text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <def.icon className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-1">
                    <div className={`flex justify-between items-start mb-1 ${isSelected ? 'pr-8' : ''}`}>
                      <h3 className={`font-bold ${isSelected ? 'text-[#C7A86A]' : 'text-gray-900'}`}>
                        {label}
                      </h3>
                      <span className={`font-bold ${isSelected ? 'text-[#C7A86A]' : 'text-gray-900'}`}>
                        {formatCurrency(def.price)}
                      </span>
                    </div>
                    
                    <p className="text-xs text-gray-500 leading-relaxed mb-2">
                      {description}
                    </p>
                    
                    {duration && (
                        <span className="inline-block px-2 py-0.5 bg-gray-100 rounded text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                           {duration}
                        </span>
                    )}

                    {isSelected && (
                      <div className="absolute top-4 right-4 bg-[#C7A86A] text-white p-1 rounded-full">
                        <Check className="h-3 w-3" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
