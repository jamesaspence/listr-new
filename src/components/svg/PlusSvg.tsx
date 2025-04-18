import styles from './PlusSvg.module.css';
import classNames from 'classnames';
import { CommonSvgProps } from './util.ts';

export type PlusSvgProps = CommonSvgProps;

export const PlusSvg = ({ className, ...props }: PlusSvgProps) => (
  <svg
    className={classNames(className, styles.svg)}
    viewBox="0 0 16 16"
    {...props}
  >
    <polyline className={styles.plusLine} points="3,8 13,8" />
    <polyline className={styles.plusLine} points="8,3 8,13" />
  </svg>
);
