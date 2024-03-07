import { Icons } from "./Icons"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/DropdownMenu"
import { useTheme } from "@/context/ThemeContext"

export default function NavMenu() {
	const { theme, setTheme } = useTheme()
	const dropdownItemClasses =
		"px-4 py-3 text-[15px] focus:bg-transparent tracking-normal select-none font-semibold cursor-pointer active:bg-primary-foreground rounded-none"

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<div>
						<Icons.menu className="h-[22px] w-[22px] text-secondary transform transition-all duration-150 ease-out hover:scale-100 active:scale-90 cursor-pointer hover:text-foreground active:text-foreground" />
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					align="end"
					className="bg-background shadow-xl dark:bg-[#181818] z-[999] rounded-2xl w-[185px] p-0 sm:-mr-4 -mr-3"
				>
					<DropdownMenuItem
						onClick={() => setTheme(theme === "light" ? "dark" : "light")}
						className={dropdownItemClasses}
					>
						Appearance
					</DropdownMenuItem>
					<DropdownMenuSeparator className="h-[1.2px] my-0" />
					<DropdownMenuItem className={dropdownItemClasses}>
						<div
							aria-label="Log out"
							onClick={() => {}}
						>
							Log out
						</div>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}
