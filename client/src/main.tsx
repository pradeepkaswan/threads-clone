import ReactDOM from "react-dom/client"
import HomePage from "./pages/HomePage.tsx"
import "./index.css"
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage.tsx"
import RootLayout from "./components/layouts/RootLayout.tsx"
import SearchPage from "./pages/SearchPage.tsx"
import ActivityPage from "./pages/ActivityPage.tsx"
import LoginPage from "./pages/LoginPage.tsx"
import { ThemeProvider } from "./context/ThemeContext.tsx"
import { AuthProvider, AuthContext } from "./context/AuthContext.tsx"

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
	{
		path: "/login",
		element: (
			<AuthContext.Consumer>
				{(authContext) =>
					authContext?.isLoggedIn ? <Navigate to="/" /> : <LoginPage />
				}
			</AuthContext.Consumer>
		),
	},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ThemeProvider
		defaultTheme="dark"
		storageKey="vite-ui-theme"
	>
		<AuthProvider>
			<RouterProvider router={router} />,
		</AuthProvider>
	</ThemeProvider>,
)
