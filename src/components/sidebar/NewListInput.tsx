import styles from './NewListInput.module.css';
import { addList } from '../../redux/slices/list.ts';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PlusSvg } from '../svg/PlusSvg.tsx';

export const NewListInput = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (value.length < 2) {
      return;
    }

    dispatch(addList(value));
    setValue('');
  };

  return (
    <form
      className={styles.inputWrapper}
      onSubmit={event => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <input
        className={styles.input}
        type="text"
        name="new-list"
        value={value}
        placeholder="Create new list"
        onChange={e => setValue(e.target.value)}
      />
      <PlusSvg className={styles.plusSvg} onClick={onSubmit} />
    </form>
  );
};
