import { Header } from './common/Header.tsx';
import { Button } from './common/Button.tsx';
import { SidebarLayout } from './layout/SidebarLayout.tsx';

function App() {
  return (
    <>
      <Header />
      <SidebarLayout>
        <h1>Hello</h1>
        <Button onClick={() => console.log('button click')}>
          This is a button
        </Button>
      </SidebarLayout>
    </>
  );
}

export default App;
