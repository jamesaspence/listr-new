import { Sidebar } from '../sidebar/Sidebar.tsx';
import { MainContent } from './MainContent.tsx';
import { ReactNode } from 'react';
import styles from './SidebarLayout.module.css';
import { Header } from '../common/Header.tsx';

export type SidebarLayoutProps = {
  children: ReactNode;
};

export const SidebarLayout = ({ children }: SidebarLayoutProps) => (
  <section className={styles.sidebarLayout}>
    <Sidebar />
    <MainContent>
      <Header />
      {children}
    </MainContent>
  </section>
);
