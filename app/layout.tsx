

import type { ReactNode } from 'react';
import ThemeWrapper from './ThemeWrapper';

export const metadata = {
  title: 'Soap Store',
  description: 'Handmade soaps with love',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
