import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Result from './components/Result/Result.jsx';
import Information from './components/Information/Information.jsx';
import Blog from './components/Blog/Blog.jsx';
import Users from './components/Users/Users';



const router =  createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path:'/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/result', 
        element: <Result></Result>
      },
      {
        path: '/information', 
        element: <Information></Information>
      },
      {
        path: '/blog', 
        element: <Blog></Blog>
      },
      {
        path:  '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      }
    ]
  },

 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
