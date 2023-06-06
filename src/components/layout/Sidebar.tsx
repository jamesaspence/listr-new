import styles from './Sidebar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addList,
  selectActiveList,
  selectLists,
} from '../../redux/slices/list.ts';
import { SidebarItem } from './SidebarItem.tsx';
import { Button } from '../common/Button.tsx';
import { useState } from 'react';

export const Sidebar = () => {
  const activeList = useSelector(selectActiveList);
  const lists = useSelector(selectLists);

  console.log('lists', lists);

  const dispatch = useDispatch();

  const [value, setValue] = useState('');

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
      <form
        onSubmit={event => {
          event.preventDefault();

          if (value.length < 2) {
            return;
          }

          dispatch(addList(value));
          setValue('');
        }}
      >
        <input
          type="text"
          name="new-list"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Button type="submit">+ New</Button>
      </form>
    </div>
  );
};
