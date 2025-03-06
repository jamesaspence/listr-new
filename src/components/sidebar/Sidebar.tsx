import styles from './Sidebar.module.css';
import { NewListInput } from './NewListInput.tsx';
import classNames from 'classnames';
import { SidebarList } from './SidebarList.tsx';
import { useSelector } from 'react-redux';
import { selectActiveListId, selectLists } from '../../redux/slices/list.ts';
import { SidebarHandle } from './SidebarHandle.tsx';
import packageInfo from '../../../package.json';

export const Sidebar = () => {
  const activeListId = useSelector(selectActiveListId);
  const lists = useSelector(selectLists);

  return (
    <div className={classNames(styles.sidebar, styles.open)}>
      <SidebarHandle />
      <div className={styles.sidebarContents}>
        <div className={styles.sidebarContentHeader}>
          <h5 className={styles.headerText}>Listr</h5>
          <small className={styles.headerVersion}>v{packageInfo.version}</small>
        </div>
        <NewListInput />
        <SidebarList lists={lists} activeListId={activeListId} />
        <small className={styles.logoDisclaimer}>
          Uicons by{' '}
          <a
            className={styles.logoDisclaimerLink}
            href="https://www.flaticon.com/uicons"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Flaticon
          </a>
        </small>
      </div>
    </div>
  );
};
