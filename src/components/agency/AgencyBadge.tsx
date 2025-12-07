import { Building2 } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import type { Agency } from '../../types';

interface AgencyBadgeProps {
  agency?: Agency;
  className?: string;
  minimal?: boolean;
}

export const AgencyBadge: React.FC<AgencyBadgeProps> = ({ agency, className, minimal = false }) => {
  if (!agency) return null;

  const content = (
    <>
      <div className="relative overflow-hidden rounded-full border border-gray-200 bg-white">
        {agency.logoUrl ? (
          <img 
            src={agency.logoUrl} 
            alt={agency.name} 
            className="h-6 w-6 object-cover" 
          />
        ) : (
          <div className="h-6 w-6 flex items-center justify-center bg-gray-100 text-gray-400">
            <Building2 size={12} />
          </div>
        )}
      </div>
      {!minimal && (
        <div className="flex flex-col items-start gap-0.5">
           <div className="flex items-center gap-1.5">
              <span className={cn(
                "text-xs font-medium text-gray-600 transition-colors truncate max-w-[120px]",
                agency.type !== 'promoter' && "group-hover:text-primary"
              )}>
                {agency.name}
              </span>
              {agency.type === 'promoter' && (
                <span className="shrink-0 text-[9px] uppercase font-bold tracking-wider text-primary bg-primary/5 px-1.5 py-0.5 rounded-md border border-primary/10">
                  Promoteur
                </span>
              )}
           </div>
        </div>
      )}
    </>
  );

  if (agency.type === 'promoter') {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        {content}
      </div>
    );
  }

  return (
    <Link
      to={`/agency/${agency.id}`}
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "flex items-center gap-2 group hover:opacity-80 transition-opacity",
        className
      )}
    >
      {content}
    </Link>
  );
};
