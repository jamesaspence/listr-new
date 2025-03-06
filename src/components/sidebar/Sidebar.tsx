import styles from './Sidebar.module.css';
import { NewListInput } from './NewListInput.tsx';
import classNames from 'classnames';
import { SidebarList } from './SidebarList.tsx';
import { useSelector } from 'react-redux';
import { selectActiveListId, selectLists } from '../../redux/slices/list.ts';

export const Sidebar = () => {
  const activeListId = useSelector(selectActiveListId);
  const lists = useSelector(selectLists);

  return (
    <div className={classNames(styles.sidebar, styles.open)}>
      <div className={styles.sidebarContents}>
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
