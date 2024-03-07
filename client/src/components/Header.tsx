import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import NavItems from "./NavItems"
import { Icons } from "./Icons"
import { useWindowSize } from "@/hooks/useWindowSize"
import NavMenu from "./NavMenu"

export default function Header() {
	const { isMobile } = useWindowSize()

	return (
		<header
			aria-label="Header"
			className={cn("sticky top-0 z-[100] w-full")}
		>
			<nav className="sm:container sm:max-w-[1250px] px-6">
				<div className="relative flex justify-between items-center py-1 w-full z-50 max-h-[60px] sm:max-h-full h-full">
					<Link
						to="/"
						className="cursor-pointer active:scale-95 transform transition-all duration-150 ease-out hover:scale-105 z-[50] w-full sm:w-fit py-4 flex justify-center"
					>
						<Icons.logo className="h-[38px] w-[38px]" />
					</Link>
					<div className="hidden sm:flex justify-between items-center w-full max-w-[480px]">
						<NavItems />
					</div>
					{isMobile ? (
						<div className="absolute right-0 -translate-y-2/4 top-2/4 z-[999]">
							<NavMenu />
						</div>
					) : (
						<NavMenu />
					)}
				</div>
			</nav>
		</header>
	)
}
