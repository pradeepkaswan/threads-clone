import { Outlet } from 'react-router-dom'
import SiteHeader from '../sections/site-header'
import MobileNav from '../sections/mobile-nav'

const MainLayout = () => {
  return (
    <>
      <SiteHeader />
      <main className="container max-w-[620px] px-4 sm:px-6">
        <Outlet />
      </main>
      <div className="fixed sm:hidden bottom-0 left-0 z-50 w-full h-16 dark:bg-[#101010D9] bg-background backdrop-blur-2xl">
        <div className="grid grid-cols-5 mx-auto h-full w-full">
          <MobileNav />
        </div>
      </div>
    </>
  )
}

export default MainLayout
