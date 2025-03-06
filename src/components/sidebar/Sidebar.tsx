import styles from './Sidebar.module.css';
import { NewListInput } from './NewListInput.tsx';
import classNames from 'classnames';
import { SidebarList } from './SidebarList.tsx';
import { useSelector } from 'react-redux';
import { selectActiveListId, selectLists } from '../../redux/slices/list.ts';
import { SidebarHandle } from './SidebarHandle.tsx';
import packageInfo from '../../../package.json';
import { useState } from 'react';

export const Sidebar = () => {
  const activeListId = useSelector(selectActiveListId);
  const lists = useSelector(selectLists);
  const [open, setOpen] = useState(false);

  return (
    <div
      className={classNames(styles.sidebar, {
        [styles.open]: open,
      })}
    >
      <SidebarHandle onToggleOpen={() => setOpen(!open)} />
      <div className={classNames(styles.sidebarContents)}>
        <div className={styles.sidebarContentHeader}>
          <h5 className={styles.headerText}>Listr</h5>
          <small className={styles.headerVersion}>v{packageInfo.version}</small>
        </div>
        <NewListInput />
        <SidebarList lists={lists} activeListId={activeListId} />
      </div>
    </div>
  );
};
