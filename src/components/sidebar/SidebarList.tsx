import styles from './SidebarList.module.css';
import { SidebarItem } from './SidebarItem.tsx';
import { deleteList, setActiveList } from '../../redux/slices/list.ts';
import { useDispatch } from 'react-redux';
import { List } from '../../util/list.ts';
import { Nullable } from '../../types';

export type SidebarListProps = {
  lists: List[];
  activeListId: Nullable<string>;
};

export const SidebarList = ({ lists, activeListId }: SidebarListProps) => {
  const dispatch = useDispatch();

  return (
    <ul className={styles.sidebarList}>
      {lists.map(list => (
        <SidebarItem
          listId={list.id}
          key={list.id}
          name={list.name}
          onSelect={listId => dispatch(setActiveList(listId))}
          onDelete={listId => dispatch(deleteList(listId))}
          isActive={activeListId === list.id}
        />
      ))}
    </ul>
  );
};
