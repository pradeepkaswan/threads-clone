import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider.tsx'
import MainLayout from './components/layouts/main-layout.tsx'
import ErrorPage from './pages/error-page.tsx'
import HomePage from './pages/home.tsx'
import LoginPage from './pages/auth/login.tsx'
import SearchPage from './pages/search.tsx'
import ActivityPage from './pages/activity.tsx'
import ProfilePage from './pages/profile.tsx'
import { Toaster } from 'sonner'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    // loader: Loader,
    // action: Action,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'activity',
        element: <ActivityPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: ':username',
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster position="bottom-center" />
    </ThemeProvider>
  </React.StrictMode>
)
