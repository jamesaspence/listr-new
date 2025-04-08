import styles from './SidebarHandle.module.css';
import { LogoSvg } from '../svg/LogoSvg.tsx';
import { List } from '../../util/list.ts';
import classNames from 'classnames/bind';
import { Nullable } from '../../types';

export type SidebarHandleProps = {
  onToggleOpen: () => void;
  lists: List[];
  onListSelect: (listId: string) => void;
  activeListId: Nullable<string>;
};

const cx = classNames.bind(styles);

export const SidebarHandle = ({
  onToggleOpen,
  lists,
  onListSelect,
  activeListId,
}: SidebarHandleProps) => {
  return (
    <div className={styles.sidebarHandle}>
      <LogoSvg className={styles.sidebarLogo} onClick={onToggleOpen} />
      <ul className={styles.listNameIcons}>
        {lists.map(list => {
          const firstCharacter = list.name.charAt(0).toUpperCase();
          const listIconColorNumber = (firstCharacter.charCodeAt(0) % 4) + 1;

          return (
            <li
              className={cx(
                styles.listNameIcon,
                styles[`listNameIcon-${listIconColorNumber}`],
                {
                  [styles.selected]: list.id === activeListId,
                }
              )}
              onClick={() => onListSelect(list.id)}
              key={list.id}
            >
              {firstCharacter}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
