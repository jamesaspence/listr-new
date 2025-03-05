import { SidebarLayout } from './layout/SidebarLayout.tsx';
import { useSelector } from 'react-redux';
import { selectLists } from '../redux/slices/list.ts';
import { ActiveListContainer } from './list/ActiveListContainer.tsx';

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
        <ActiveListContainer />
      )}
    </SidebarLayout>
  );
};
