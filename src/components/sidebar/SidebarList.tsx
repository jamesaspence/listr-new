import styles from './SidebarList.module.css';
import { SidebarItem } from './SidebarItem.tsx';
import { List } from '../../util/list.ts';
import { Nullable } from '../../types';

export type SidebarListProps = {
  lists: List[];
  activeListId: Nullable<string>;
  onListSelect: (listId: string) => void;
  onListDelete: (listId: string) => void;
};

export const SidebarList = ({
  lists,
  activeListId,
  onListSelect,
  onListDelete,
}: SidebarListProps) => {
  return (
    <ul className={styles.sidebarList}>
      {lists.map(list => (
        <SidebarItem
          listId={list.id}
          key={list.id}
          name={list.name}
          onSelect={onListSelect}
          onDelete={onListDelete}
          isActive={activeListId === list.id}
        />
      ))}
    </ul>
  );
};
