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
import { ToggleableItem } from './item/ToggleableItem';

export const ActiveListContainer = () => {
  const activeList = useSelector(selectActiveList) as List;
  const dispatch = useDispatch();

  return (
    <div>
      <ListNameHeader listId={activeList.id} name={activeList.name} />
      <ul>
        {activeList.items.map(item => (
          <ToggleableItem
            key={item.id}
            onToggle={item =>
              dispatch(toggleItem({ listId: activeList.id, itemId: item.id }))
            }
            onRemove={item =>
              dispatch(removeItem({ listId: activeList.id, itemId: item.id }))
            }
            item={item}
          />
        ))}
      </ul>
      <AddNewItemInput
        onSubmit={text => dispatch(addItem({ listId: activeList.id, text }))}
      />
    </div>
  );
};
