import React, { type ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl", className)}>
      {children}
    </div>
  );
};
