import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import ProductPage from './pages/ProductPage.tsx';
import Cart from './pages/Cart.tsx';
import ProductList from './pages/ProductList.tsx';
import { Provider } from 'react-redux';
import store from './redux/Store.ts';

const router=createBrowserRouter([{
  path:"/",
  element: <Home/>,
  errorElement:<ErrorPage/>
},
{
  path:"/home",
  element: <Home/>,
  errorElement:<ErrorPage/>,
},
{
  path:"/login",
  element:<Login/>,
  errorElement:<ErrorPage/>,
},
{
  path:"/register",
  element:<Register/>,
  errorElement:<ErrorPage/>
},
{
  path:"/products/:cat",
  element:<ProductList/>,
  errorElement:<ErrorPage/>,
},
{
  path:'/products',
  element:<ProductList/>,
  errorElement:<ErrorPage/>,
},
{
  path:"/cart",
  element:<Cart/>,
  errorElement:<ErrorPage/>
},
{
  path:"/product/:productId",
  element:<ProductPage/>,
  errorElement:<ErrorPage/> 
}
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
