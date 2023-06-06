import { ReactNode } from 'react';
import styles from './Sidebar.module.css';

export type SidebarProps = {
  children: ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => <div className={styles.sidebar}>{children}</div>;
