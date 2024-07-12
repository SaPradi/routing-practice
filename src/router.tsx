import { createBrowserRouter, RouteObject } from 'react-router-dom';
import HeaderLayout from './layout/HeaderLayout';
import ErrorPage from './page/ErrorPage';
import Home from './page/Home/Home';
import Contact from './page/Contact/Contact';
import Dashboard from './page/Dashboard/Dashboard';


const routes: RouteObject[] = [
  {
    path: '/',
    element: <HeaderLayout />,
    children: [
      {
        index:true,
        element:<Home/>,
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'dashboard',
        element:<Dashboard/>
      }
    ]
    
  },
  {
    path:'*',
    element: <ErrorPage />
  }
];

export const router = createBrowserRouter(routes);
  