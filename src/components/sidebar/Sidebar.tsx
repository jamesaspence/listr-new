import styles from './Sidebar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteList,
  selectActiveListId,
  selectLists,
  setActiveList,
} from '../../redux/slices/list.ts';
import { SidebarItem } from './SidebarItem.tsx';
import { NewListInput } from './NewListInput.tsx';
import classNames from 'classnames';

export const Sidebar = () => {
  const activeList = useSelector(selectActiveListId);
  const lists = useSelector(selectLists);
  const dispatch = useDispatch();

  return (
    <div className={classNames(styles.sidebar, styles.open)}>
      <NewListInput />
      {lists.map(list => (
        <SidebarItem
          listId={list.id}
          key={list.id}
          name={list.name}
          onSelect={listId => dispatch(setActiveList(listId))}
          onDelete={listId => dispatch(deleteList(listId))}
          isActive={activeList === list.id}
        />
      ))}
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
  );
};
