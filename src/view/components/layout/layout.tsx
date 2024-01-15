import { ReactNode } from 'react';
import { Inter } from '@/public/fonts';

type LayoutProps = {
 children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
 return <main className={`${Inter.variable}`}>{children}</main>;
};

export default Layout;
