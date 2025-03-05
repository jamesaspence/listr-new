// import { Sidebar } from '../sidebar/Sidebar.tsx';
import { MainContent } from './MainContent.tsx';
import { ReactNode } from 'react';
import styles from './SidebarLayout.module.css';

export type SidebarLayoutProps = {
  children: ReactNode;
};

export const SidebarLayout = ({ children }: SidebarLayoutProps) => (
  <section className={styles.sidebarLayout}>
    {/*<Sidebar />*/}
    <MainContent>{children}</MainContent>
  </section>
);
