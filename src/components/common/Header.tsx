import packageInfo from '../../../package.json';
import styles from './Header.module.css';
import logo from '../../logo.svg';

export const Header = () => (
  <header className={styles.header}>
    <img className={styles.logo} src={logo} alt="Listr logo" />
    <div className={styles.textWrapper}>
      <h1 className={styles.headerText}>Listr</h1>
      <small className={styles.headerVersion}>v{packageInfo.version}</small>
    </div>
  </header>
);
