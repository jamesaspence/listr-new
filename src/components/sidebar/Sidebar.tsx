import styles from './Sidebar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectActiveList,
  selectLists,
  setActiveList,
} from '../../redux/slices/list.ts';
import { SidebarItem } from './SidebarItem.tsx';
import { NewListInput } from './NewListInput.tsx';

export const Sidebar = () => {
  const activeList = useSelector(selectActiveList);
  const lists = useSelector(selectLists);
  const dispatch = useDispatch();

  return (
    <div className={styles.sidebar}>
      {lists.map(list => (
        <SidebarItem
          listId={list.id}
          key={list.id}
          name={list.name}
          onSelect={listId => dispatch(setActiveList(listId))}
          isActive={activeList === list.id}
        />
      ))}
      <hr className={styles.divider} />
      <NewListInput />
    </div>
  );
};
