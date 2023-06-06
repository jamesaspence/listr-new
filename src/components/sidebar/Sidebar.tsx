import styles from './Sidebar.module.css';
import { useSelector } from 'react-redux';
import { selectActiveList, selectLists } from '../../redux/slices/list.ts';
import { SidebarItem } from './SidebarItem.tsx';
import { NewListInput } from './NewListInput.tsx';

export const Sidebar = () => {
  const activeList = useSelector(selectActiveList);
  const lists = useSelector(selectLists);

  return (
    <div className={styles.sidebar}>
      {lists.map(list => (
        <SidebarItem
          listId={list.id}
          key={list.id}
          name={list.name}
          onSelect={listId => console.log(`${listId} selected!`)}
          isActive={activeList === list.id}
        />
      ))}
      <hr className={styles.divider} />
      <NewListInput />
    </div>
  );
};
