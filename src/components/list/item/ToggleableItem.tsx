import { ListItem } from '../../../util/list';
import styles from './ToggleableItem.module.css';
import { Button } from '../../common/Button';

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
  <div className={styles.wrapper}>
    <input
      className={styles.checkbox}
      type="checkbox"
      checked={item.checked}
      onChange={() => onToggle(item)}
    />
    <p className={styles.text}>{item.text}</p>
    <Button
      className={styles.removeButton}
      type="button"
      onClick={() => onRemove(item)}
    >
      Delete
    </Button>
  </div>
);
