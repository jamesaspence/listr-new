import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  removeItem,
  selectActiveList,
} from '../../redux/slices/list.ts';
import { List } from '../../util/list.ts';
import { AddNewItemInput } from './AddNewItemInput.tsx';
import { EditPencil } from '../svg/EditPencil.tsx';
import styles from './ActiveListContainer.module.css';
import { useEffect, useRef, useState } from 'react';
import * as classNames from 'classnames';
import { Nullable } from '../../types';

export const ActiveListContainer = () => {
  const activeList = useSelector(selectActiveList) as List;
  const dispatch = useDispatch();

  const ref = useRef<Nullable<HTMLInputElement>>(null);

  const [name, setName] = useState(activeList.name);
  const [isEditing, setIsEditing] = useState(false);

  const listener = (event: MouseEvent) => {
    if (ref.current && ref.current.contains(event.target as Node)) {
      console.log('Hello there');
    }
  };
  useEffect(() => {
    // document.addEventListener()
  }, []);

  return (
    <div>
      <div className={styles.listNameWrapper}>
        <input
          className={classNames(styles.nameInput, {
            [styles.editing]: isEditing,
          })}
          value={name}
          placeholder="List name"
          onChange={e => setName(e.target.value)}
          onClick={() => {
            if (!isEditing) {
              console.log('isEditing being enabled!');
              setIsEditing(true);
            }
          }}
          ref={ref}
        />
        <EditPencil className={styles.pencil} />
      </div>
      <ul>
        {activeList.items.map(item => (
          <li
            onClick={() =>
              dispatch(removeItem({ listId: activeList.id, itemId: item.id }))
            }
            key={item.id}
          >
            {item.text}
          </li>
        ))}
        <AddNewItemInput
          onSubmit={text => dispatch(addItem({ listId: activeList.id, text }))}
        />
      </ul>
    </div>
  );
};
