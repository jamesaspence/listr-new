import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';
import * as classNames from 'classnames';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  onClick,
  disabled = false,
  className,
  ...props
}: ButtonProps) => (
  <button
    className={classNames(styles.button, className)}
    disabled={disabled}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);
