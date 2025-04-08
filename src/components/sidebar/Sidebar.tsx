import styles from './Sidebar.module.css';
import { NewListInput } from './NewListInput.tsx';
import classNames from 'classnames';
import { SidebarList } from './SidebarList.tsx';
import { useSelector } from 'react-redux';
import { selectActiveListId, selectLists } from '../../redux/slices/list.ts';
import { SidebarHandle } from './SidebarHandle.tsx';
import { useState } from 'react';
import { deleteList, setActiveList } from '../../redux/slices/list.ts';
import { useDispatch } from 'react-redux';

export const Sidebar = () => {
  const activeListId = useSelector(selectActiveListId);
  const lists = useSelector(selectLists);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const onListSelect = (listId: string) => {
    dispatch(setActiveList(listId));
    setOpen(false);
  };

  const onListDelete = (listId: string) => {
    dispatch(deleteList(listId));
    setOpen(false);
  };

  return (
    <div
      className={classNames(styles.sidebar, {
        [styles.open]: open,
      })}
    >
      <SidebarHandle
        onToggleOpen={() => setOpen(!open)}
        lists={lists}
        onListSelect={onListSelect}
        activeListId={activeListId}
      />
      <div className={classNames(styles.sidebarContents)}>
        <NewListInput />
        <SidebarList
          lists={lists}
          activeListId={activeListId}
          onListSelect={onListSelect}
          onListDelete={onListDelete}
        />
      </div>
    </div>
  );
};
