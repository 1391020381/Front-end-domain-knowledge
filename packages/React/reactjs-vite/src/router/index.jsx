import {useRoutes } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx'
import CraftjsPage from '../pages/CraftjsPage.jsx';
import ZustandDemo from '../pages/ZustandDemo.jsx';
const routes = [
  {
    path: '/',
    element: <HomePage></HomePage>,
    // loader:async({request,params})=>{
    //   console.log(request,params,'Home,loader')
    //   return 1;
    // }
  },
  {
    path: '/craftjs',
    element: <CraftjsPage></CraftjsPage>
  },
  {
    path: '/zustandDemo',
    element: <ZustandDemo></ZustandDemo>
  },
  {
    path: '*',
    element:" <div>404</div>"
  }
];


  export default function Router(){
     return useRoutes(routes)
  }