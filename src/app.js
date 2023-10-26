import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    return (
      <Provider store={appStore}>
        <div>
            <Header />
            <Outlet />
        </div>
      </Provider>
        
    )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>About is loading suspensefully...</h1>}><About /></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resid",
        element: <RestaurantMenu />
      },
      {
        path: "cart",
        element: <Cart/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);