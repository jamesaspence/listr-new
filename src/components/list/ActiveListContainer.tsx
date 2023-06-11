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

export const ActiveListContainer = () => {
  const activeList = useSelector(selectActiveList) as List;
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.listNameWrapper}>
        <h2>{activeList.name}</h2>
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
