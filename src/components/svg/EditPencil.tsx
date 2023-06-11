import { CommonSvgProps } from './util.ts';
import * as classNames from 'classnames';
import styles from './EditPencil.module.css';

export type EditPencilProps = CommonSvgProps;

export const EditPencil = ({ className, ...props }: EditPencilProps) => (
  <svg
    className={classNames(styles.svg, className)}
    viewBox="0 0 24 24"
    {...props}
  >
    <polyline points="6,24 4,20 8,9 15,12" />
  </svg>
);
