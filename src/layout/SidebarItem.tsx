import * as classNames from 'classnames';
import styles from './SidebarItem.module.css';

export type SidebarItemProps = {
  name: string;
  listId: string;
  onSelect: (listId: string) => void;
  isActive?: boolean;
};

export const SidebarItem = ({
  name,
  listId,
  onSelect,
  isActive = false,
}: SidebarItemProps) => (
  <div
    className={classNames(styles.sidebarItem, {
      [styles.selected]: isActive,
    })}
    onClick={() => onSelect(listId)}
  >
    {name}
  </div>
);
