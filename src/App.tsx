import { Header } from './common/Header.tsx';
import { Button } from './common/Button.tsx';
import { SidebarLayout } from './layout/SidebarLayout.tsx';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <SidebarLayout>
        <h1>Hello</h1>
        <Button onClick={() => console.log('button click')}>
          This is a button
        </Button>
      </SidebarLayout>
    </Provider>
  );
}

export default App;
