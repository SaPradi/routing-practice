import { createBrowserRouter, RouteObject } from 'react-router-dom';
import HeaderLayout from './layout/HeaderLayout';
import ErrorPage from './page/ErrorPage';


const routes: RouteObject[] = [
  {
    path: '/',
    element: <HeaderLayout />,
    children: [
    //   {
    //     index:true,
    //     element:<Overview/>,
    //   },
    //   {
    //     path:'contacts',
    //     element:<Contacts/>
    //   },
    //   {
    //     path:'favorites',
    //     element:<Favorites/>
    //   }
    ]
    
  },
  {
    path:'*',
    element: <ErrorPage />
  }
];

export const router = createBrowserRouter(routes);
  