import { useState } from 'react';
import styles from './AddNewItemInput.module.css';
import { Button } from '../common/Button';

export type AddNewItemInputProps = {
  onSubmit: (text: string) => void;
};

export const AddNewItemInput = ({ onSubmit }: AddNewItemInputProps) => {
  const [text, setText] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <form className={styles.wrapper} onSubmit={onFormSubmit}>
      <input
        className={styles.input}
        type="text"
        onChange={e => setText(e.target.value)}
        placeholder="Add new item"
        value={text}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
