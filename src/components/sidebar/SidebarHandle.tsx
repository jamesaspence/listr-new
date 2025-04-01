import styles from './SidebarHandle.module.css';
import { LogoSvg } from '../svg/LogoSvg.tsx';

export type SidebarHandleProps = {
  onToggleOpen: () => void;
};

export const SidebarHandle = ({ onToggleOpen }: SidebarHandleProps) => {
  return (
    <div className={styles.sidebarHandle}>
      <LogoSvg className={styles.sidebarLogo} onClick={onToggleOpen} />
    </div>
  );
};
