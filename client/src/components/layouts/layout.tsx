import { Toaster } from 'sonner'
import { ThemeProvider } from '../theme-provider'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
        <Toaster position="bottom-center" />
      </ThemeProvider>
    </>
  )
}

export default Layout
