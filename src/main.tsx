import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './App/Routes';
// eslint-disable-next-line import/order
import { spy } from 'mobx';
import RootStories from './store/RootStores';
import { RootStoresContext } from './utils/context/root-context-store';

// spy((event) => {
//   if (event.type == 'action') {
//     console.log(event);
//   }
// });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RootStoresContext.Provider value={new RootStories()}>
      <RouterProvider router={router} />
    </RootStoresContext.Provider>
  </React.StrictMode>
);
