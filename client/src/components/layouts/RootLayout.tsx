import { Outlet } from "react-router-dom"
import Header from "../Header"
import Navbar from "../Navbar"

export default function RootLayout() {
	return (
		<>
			<Header />
			<main className="container max-w-[620px] px-4 sm:px-6">
				<Outlet />
			</main>
			<Navbar />
		</>
	)
}
