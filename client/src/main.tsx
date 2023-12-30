import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/globals.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider.tsx"
import { Toaster } from "sonner"
import { routes } from "./routes/index.tsx"

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster position="bottom-center" />
    </ThemeProvider>
  </React.StrictMode>
)
