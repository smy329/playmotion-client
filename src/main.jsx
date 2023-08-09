import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Video from './pages/Video.jsx';

import MainLayout from './layouts/MainLayout.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/videos/:videoId',
    element: <Video />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <MainLayout />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
