import ReactDOM from "react-dom/client"
import HomePage from "./pages/HomePage.tsx"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage.tsx"
import RootLayout from "./components/layouts/RootLayout.tsx"
import SearchPage from "./pages/SearchPage.tsx"
import ActivityPage from "./pages/ActivityPage.tsx"
import LoginPage from "./pages/LoginPage.tsx"
import { ThemeProvider } from "./context/ThemeContext.tsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "search", element: <SearchPage /> },
			{ path: "activity", element: <ActivityPage /> },
			{ path: ":username", element: <div>Profile</div> },
		],
	},
	{ path: "/login", element: <LoginPage /> },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ThemeProvider
		defaultTheme="system"
		storageKey="vite-ui-theme"
	>
		<RouterProvider router={router} />,
	</ThemeProvider>,
)
