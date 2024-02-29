import {Layout} from '@/features/app/layout/Layout';
import Home from '@/features/home/view/Home';
import {NotFound} from '@/features/notFound/NotFound';
import {createBrowserRouter} from 'react-router-dom';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "about",
      //   // Single route in lazy file
      //   lazy: () => import("./pages/About"),
      // },
      // {
      //   path: "dashboard",
      //   async lazy() {
      //     // Multiple routes in lazy file
      //     let { DashboardLayout } = await import("./pages/Dashboard");
      //     return { Component: DashboardLayout };
      //   },
      //   children: [
      //     {
      //       index: true,
      //       async lazy() {
      //         let { DashboardIndex } = await import("./pages/Dashboard");
      //         return { Component: DashboardIndex };
      //       },
      //     },
      //     {
      //       path: "messages",
      //       async lazy() {
      //         let { dashboardMessagesLoader, DashboardMessages } = await import(
      //           "./pages/Dashboard"
      //         );
      //         return {
      //           loader: dashboardMessagesLoader,
      //           Component: DashboardMessages,
      //         };
      //       },
      //     },
      //   ],
      // },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
