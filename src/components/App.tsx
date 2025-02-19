import { Header } from './common/Header.tsx';
import { SidebarLayout } from './layout/SidebarLayout.tsx';
import { useSelector } from 'react-redux';
import { selectLists } from '../redux/slices/list.ts';
import { ActiveListContainer } from './list/ActiveListContainer.tsx';
import { Button } from './common/Button.tsx';
import { useTheme } from '../hooks/useTheme.ts';

export const App = () => {
  const lists = useSelector(selectLists);
  const [theme, setTheme] = useTheme();

  return (
    <>
      <Header />
      <SidebarLayout>
        {lists.length < 1 ? (
          <>
            <h2>Start by creating a list</h2>
            <p>
              <small>
                Add a new list, or select a list, via the sidebar on the left,
                and start organizing.
              </small>
            </p>
          </>
        ) : (
          <>
            <ActiveListContainer />
            <Button
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
              }}
            >
              Toggle Theme
            </Button>
          </>
        )}
      </SidebarLayout>
    </>
  );
};
