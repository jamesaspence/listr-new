import { ReactNode } from 'react';
import styles from './MainContent.module.css';

export type MainContentProps = {
  children: ReactNode;
};

export const MainContent = ({ children }: MainContentProps) => (
  <div className={styles.mainContent}>{children}</div>
);
