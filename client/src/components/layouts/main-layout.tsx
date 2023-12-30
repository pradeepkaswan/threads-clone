import { Outlet } from "react-router-dom"
import SiteHeader from "../sections/site-header"
import MobileNav from "../sections/mobile-nav"
import GitHubCTA from "../sections/github-cta"

const MainLayout = () => {
  return (
    <>
      <SiteHeader />
      <main className="container max-w-[620px] px-4 sm:px-6">
        <Outlet />
      </main>
      <div className="fixed bottom-5 left-[8%] rounded-full py-6 px-8">
        <GitHubCTA />
      </div>
      <MobileNav />
    </>
  )
}

export default MainLayout
