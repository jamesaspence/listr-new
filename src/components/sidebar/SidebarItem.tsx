import classNames from 'classnames';
import styles from './SidebarItem.module.css';
import { TrashSvg } from '../svg/TrashSvg.tsx';

export type SidebarItemProps = {
  name: string;
  listId: string;
  onSelect: (listId: string) => void;
  onDelete: (listId: string) => void;
  isActive?: boolean;
};

export const SidebarItem = ({
  name,
  listId,
  onSelect,
  onDelete,
  isActive = false,
}: SidebarItemProps) => (
  <div
    className={classNames(styles.sidebarItem, {
      [styles.selected]: isActive,
    })}
    onClick={() => onSelect(listId)}
  >
    <p className={styles.sidebarItemText}>{name}</p>
    <TrashSvg
      onClick={e => {
        // Stop propagation so we don't fire event to parent to select list
        e.stopPropagation();
        onDelete(listId);
      }}
      className={styles.deleteButton}
    />
  </div>
);
