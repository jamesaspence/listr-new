import styles from './SidebarHandle.module.css';
import { LogoSvg } from '../svg/LogoSvg.tsx';

export const SidebarHandle = () => {
  return (
    <div className={styles.sidebarHandle}>
      <LogoSvg className={styles.sidebarLogo} />
    </div>
  );
};
