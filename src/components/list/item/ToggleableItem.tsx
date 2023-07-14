import { ListItem } from '../../../util/list';

type ToggleableItemProps = {
  onToggle: (item: ListItem) => void;
  onRemove: (item: ListItem) => void;
  item: ListItem;
};

export const ToggleableItem = ({
  onToggle,
  onRemove,
  item,
}: ToggleableItemProps) => (
  <li>
    {item.text}
    <input
      type="checkbox"
      checked={item.checked}
      onChange={() => onToggle(item)}
    />
    <button type="button" onClick={() => onRemove(item)}>
      Remove
    </button>
  </li>
);
