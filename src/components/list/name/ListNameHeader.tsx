import { useEffect, useRef, useState } from 'react';
import styles from './ListNameHeader.module.css';
import { Button } from '../../common/Button';
import { Nullable } from '../../../types';
import { useDispatch } from 'react-redux';
import { renameList } from '../../../redux/slices/list';

type ListNameHeaderProps = {
  listId: string;
  name: string;
};

export const ListNameHeader = ({ listId, name }: ListNameHeaderProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(name);
  const editingRef = useRef<Nullable<HTMLInputElement>>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEditing && editingRef.current !== null) {
      const node = editingRef.current as HTMLInputElement;
      node.focus();
      node.select();
    }
  }, [isEditing]);

  const onSubmit = async event => {
    event.preventDefault();

    await dispatch(
      renameList({
        listId,
        name: value,
      })
    );

    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form onSubmit={onSubmit}>
        <input
          className={styles.input}
          type="text"
          name="list-name"
          value={value}
          onChange={e => setValue(e.target.value)}
          ref={editingRef}
        />
        <div className={styles.flex}>
          <Button
            className={styles.button}
            onClick={() => setIsEditing(false)}
            type="button"
          >
            Cancel
          </Button>
          <Button className={styles.button} type="submit">
            Save
          </Button>
        </div>
      </form>
    );
  }

  return (
    <h2 className={styles.header} onClick={() => setIsEditing(true)}>
      {name}
    </h2>
  );
};
