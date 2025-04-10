import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './components/App.tsx';
import './index.css';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
