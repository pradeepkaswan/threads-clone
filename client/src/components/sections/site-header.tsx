import { Icons } from "@/assets/icons"
import useWindowSize from "@/hooks/use-window-size"
import { cn } from "@/lib/utils"
import Menu from "./menu"
import { Link } from "react-router-dom"
import Nav from "./nav"

const SiteHeader = () => {
  const { isMobile } = useWindowSize()

  return (
    <header aria-label="Header" className={cn("sticky top-0 z-[100] w-full")}>
      <nav className="sm:container sm:max-w[1250px] px-4">
        <div className="relative py-1 flex w-full justify-between items-center z-50 max-h-[60px] sm:max-h-full h-full">
          <Link
            to="/"
            className="text-2xl font-semibold tracking-wide flex gap-2.5 items-center cursor-pointer active:scale-95  transform transition-all duration-150 ease-out hover:scale-105 z-[50] w-full sm:w-fit py-4 justify-center"
          >
            <Icons.logo className="h-[38px] w-[38px]" />
          </Link>
          <div className="hidden sm:flex justify-between items-center max-w-[480px] w-full scale-110">
            <Nav />
          </div>
          {isMobile ? (
            <div className="absolute right-0 -translate-y-2/4 top-2/4 z-[999]">
              <Menu />
            </div>
          ) : (
            <Menu />
          )}
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader
