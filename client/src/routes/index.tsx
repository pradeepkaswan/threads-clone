import MainLayout from "@/components/layouts/main-layout"
import ActivityPage from "@/pages/activity"
import LoginPage from "@/pages/auth/login"
import ErrorPage from "@/pages/error-page"
import HomePage from "@/pages/home"
import ProfilePage from "@/pages/profile"
import SearchPage from "@/pages/search"

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "activity",
        element: <ActivityPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: ":username",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/settings",
    element: <h1>settings</h1>,
  },
]
