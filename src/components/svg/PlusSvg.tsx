import styles from './PlusSvg.module.css';
import { SVGAttributes } from 'react';
import * as classNames from 'classnames';

export type PlusSvgProps = Omit<SVGAttributes<SVGElement>, 'viewBox'>;

export const PlusSvg = ({ className, ...props }: PlusSvgProps) => (
  <svg
    className={classNames(styles.svg, className)}
    viewBox="0 0 16 16"
    {...props}
  >
    <circle className={styles.circle} cx="8" cy="8" r="7" />
    <polyline className={styles.plusLine} points="4,8 12,8" />
    <polyline className={styles.plusLine} points="8,4 8,12" />
  </svg>
);
