import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// import Home from './components/Home';
import Layout from './components/Layout';
import ErrorPage from './components/Error';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Art from './components/pages/Art';
import Code from './components/pages/Code';
import Gamedev from './components/pages/Gamedev';
import Blog from './components/pages/Blog';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
    ]
  },
  {
    path: "/website",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/website",
        element: <Home />
      },
      {
        path: "/website/about",
        element: <About />
      },
      {
        path: "/website/blog",
        element: <Blog />
      },
      {
        path: "/website/art",
        element: <Art />
      },
      {
        path: "/website/code",
        element: <Code />
      },
      {
        path: "/website/gamedev",
        element: <Gamedev />
      }
    ]
  },
  {
    path: "*",
    element: <Layout />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
