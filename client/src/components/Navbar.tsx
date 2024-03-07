import NavItems from "./NavItems"

export default function Navbar() {
	return (
		<div className="sm:hidden fixed bottom-0 left-0 z-50 w-full h-16 dark:bg-[#101010D9] bg-background backdrop-blur-2xl">
			<div className="grid h-full grid-cols-5 mx-auto w-full">
				<NavItems />
			</div>
		</div>
	)
}
