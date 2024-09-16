'use client';
import { ThemeProvider } from '~/contexts/ThemeContext';
import { ReactNode } from 'react';

const Providers = ({ children }: { children: ReactNode }) => {
     /// can add more providers as needed
     return (
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
               {children}
          </ThemeProvider>
     );
};

export default Providers;
