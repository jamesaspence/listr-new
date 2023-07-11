import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  removeItem,
  selectActiveList,
  toggleItem,
} from '../../redux/slices/list.ts';
import { List } from '../../util/list.ts';
import { AddNewItemInput } from './AddNewItemInput.tsx';
import { ListNameHeader } from './name/ListNameHeader';

export const ActiveListContainer = () => {
  const activeList = useSelector(selectActiveList) as List;
  const dispatch = useDispatch();

  return (
    <div>
      <ListNameHeader listId={activeList.id} name={activeList.name} />
      <ul>
        {activeList.items.map(item => (
          <li key={item.id}>
            {item.text}
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() =>
                dispatch(toggleItem({ listId: activeList.id, itemId: item.id }))
              }
            />
            <button
              type="button"
              onClick={() =>
                dispatch(removeItem({ listId: activeList.id, itemId: item.id }))
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <AddNewItemInput
        onSubmit={text => dispatch(addItem({ listId: activeList.id, text }))}
      />
    </div>
  );
};
