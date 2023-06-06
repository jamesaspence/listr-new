import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  onClick,
  disabled = false,
  ...props
}: ButtonProps) => (
  <button
    className={styles.button}
    disabled={disabled}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);
