import { SidebarLayout } from './layout/SidebarLayout.tsx';
import { useSelector } from 'react-redux';
import { selectLists } from '../redux/slices/list.ts';
import { ActiveListContainer } from './list/ActiveListContainer.tsx';
import styles from './App.module.css';

export const App = () => {
  const lists = useSelector(selectLists);

  return (
    <SidebarLayout>
      {lists.length < 1 ? (
        <>
          <h2>Start by creating a list</h2>
          <p>
            <small>
              Add a new list, or select a list, via the sidebar on the left, and
              start organizing.
            </small>
          </p>
        </>
      ) : (
        <>
          <ActiveListContainer />
          <small className={styles.logoDisclaimer}>
            Uicons by{' '}
            <a
              className={styles.logoDisclaimerLink}
              href="https://www.flaticon.com/uicons"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Flaticon
            </a>
          </small>
        </>
      )}
    </SidebarLayout>
  );
};
