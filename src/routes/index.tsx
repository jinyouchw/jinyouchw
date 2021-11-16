import { lazy, FC } from 'react';
import { PartialRouteObject } from 'react-router';
import WrapperRouteComponent from './config';
import { useRoutes } from 'react-router-dom';
import LoginPage from 'pages/login';
import HomePage from 'pages/home';
// const HomePage = lazy(() => import(/* webpackChunkName: "404'"*/ 'pages/home'));
// const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ 'pages/404'));

const routeList: PartialRouteObject[] = [
  {
    path: 'login',
    element: <WrapperRouteComponent element={<LoginPage />} titleId="title.login" />
  },
  {
    path: 'home',
    element: <WrapperRouteComponent element={<HomePage />} titleId="title.home" />
  }
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;
