import { useState } from 'react';

export type AddNewItemInputProps = {
  onSubmit: (text: string) => void;
};

export const AddNewItemInput = ({ onSubmit }: AddNewItemInputProps) => {
  const [text, setText] = useState('');

  const onFormSubmit = () => {
    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" onChange={e => setText(e.target.value)} />
    </form>
  );
};
