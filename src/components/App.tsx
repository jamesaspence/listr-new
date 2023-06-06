import { Header } from './common/Header.tsx';
import { Button } from './common/Button.tsx';
import { SidebarLayout } from './layout/SidebarLayout.tsx';
import { RootState } from '../redux/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/list.ts';

export const App = () => {
  const dispatch = useDispatch();
  const activeListId = useSelector(
    (state: RootState) => state.list.activeList
  ) as string;

  return (
    <>
      <Header />
      <SidebarLayout>
        <h1>Hello</h1>
        <Button
          onClick={() =>
            dispatch(
              addItem({
                listId: activeListId,
                text: 'Hello',
              })
            )
          }
        >
          This is a button
        </Button>
      </SidebarLayout>
    </>
  );
};

export default App;
