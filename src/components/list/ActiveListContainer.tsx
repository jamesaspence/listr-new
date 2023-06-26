import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  removeItem,
  selectActiveList,
} from '../../redux/slices/list.ts';
import { List } from '../../util/list.ts';
import { AddNewItemInput } from './AddNewItemInput.tsx';
import { ListNameHeader } from './name/ListNameHeader';

export const ActiveListContainer = () => {
  const activeList = useSelector(selectActiveList) as List;
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <ListNameHeader listId={activeList.id} name={activeList.name} />
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
