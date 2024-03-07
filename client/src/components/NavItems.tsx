import { Link, useLocation } from "react-router-dom"
import { Icons } from "./Icons"
import { cn } from "@/lib/utils"
import CreateThreadCard from "./CreateThreadCard"

export default function NavItems() {
	const location = useLocation()
	const path = location.pathname

	const linkClasses =
		"hover:bg-primary p-4 sm:py-5 sm:px-8 rounded-lg transform transition-all duration-150 ease-out hover:scale-100 active:scale-90 flex items-center justify-center w-full"

	return (
		<>
			<Link
				to="/"
				className={linkClasses}
			>
				<Icons.home
					className={cn(
						"h-7 w-7",
						path === "/" ? "text-foreground" : "text-secondary",
					)}
					stroke="red"
					fill={path === "/" ? "currentColor" : "transparent"}
				/>
			</Link>
			<Link
				to="/search"
				className={linkClasses}
			>
				<Icons.search
					className={cn(
						"h-7 w-7",
						path === "/search" ? "text-foreground" : "text-secondary",
					)}
				/>
			</Link>
			<CreateThreadCard />
			<Link
				to="/activity"
				className={linkClasses}
			>
				<Icons.activity
					className={cn(
						"h-7 w-7",
						path === "/activity" ? "text-foreground" : "text-secondary",
					)}
					fill={path === "/activity" ? "currentColor" : "transparent"}
				/>
			</Link>
			<Link
				to="/:username"
				className={linkClasses}
			>
				<Icons.profile
					className={cn(
						"h-7 w-7",
						path === "/:username" ? "text-foreground" : "text-secondary",
					)}
					fill={path === "/:username" ? "currentColor" : "transparent"}
				/>
			</Link>
		</>
	)
}
