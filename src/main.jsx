import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from '../Routes/Routes';
import Home from '../pages/home';
import LoginPage from '../pages/LoginPage';
import JobPostPage from '../pages/JobPostPage';
import SignupPage from '../pages/SignupPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/signup',
        element: <SignupPage></SignupPage>
      },
      {
        path: '/jobs',
        element: <JobPostPage></JobPostPage>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
