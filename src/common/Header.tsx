import packageInfo from '../../package.json';
import styles from './Header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <img
      className={styles.logo}
      src="https://placehold.co/48x48"
      alt="Listr logo"
    />
    <div className={styles.textWrapper}>
      <h1 className={styles.headerText}>Listr</h1>
      <small className={styles.headerVersion}>v{packageInfo.version}</small>
    </div>
  </header>
);
