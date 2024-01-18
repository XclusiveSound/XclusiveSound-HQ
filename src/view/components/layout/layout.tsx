import { ReactNode } from 'react';
import { Inter } from '@/public/fonts';
import { Header } from '@/src/view/components';

const Layout = ({ children }: { children: ReactNode }) => {
 return (
  <main className={`${Inter.variable}`}>
   <Header />
   {children}
  </main>
 );
};

export default Layout;
