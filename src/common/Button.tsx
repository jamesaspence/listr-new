import { ReactNode, MouseEvent } from 'react';
import styles from './Button.module.css';

export type ButtonProps = {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export const Button = ({
  children,
  onClick,
  disabled = false,
}: ButtonProps) => (
  <button className={styles.button} disabled={disabled} onClick={onClick}>
    {children}
  </button>
);
