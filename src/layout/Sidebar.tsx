import styles from './Sidebar.module.css';
import { useSelector } from 'react-redux';
import { selectActiveList, selectLists } from '../redux/slices/list.ts';
import { SidebarItem } from './SidebarItem.tsx';

export const Sidebar = () => {
  const activeList = useSelector(selectActiveList);
  const lists = useSelector(selectLists);

  return (
    <div className={styles.sidebar}>
      {Object.entries(lists).map(([listId, list]) => (
        <SidebarItem
          listId={listId}
          name={list.name}
          onSelect={listId => console.log(`${listId} selected!`)}
          isActive={activeList === listId}
        />
      ))}
    </div>
  );
};
