import styles from './NewListInput.module.css';
import { addList } from '../../redux/slices/list.ts';
import { useDispatch } from 'react-redux';
import { PlusSvg } from '../svg/PlusSvg.tsx';

export const NewListInput = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.listsHeader}>Lists</h4>
      <PlusSvg
        className={styles.newListButton}
        onClick={() => dispatch(addList('New list'))}
      />
    </div>
  );
};
