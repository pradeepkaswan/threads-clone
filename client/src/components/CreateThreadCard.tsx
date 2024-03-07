import { Link } from "react-router-dom"
import { Icons } from "./Icons"

export default function CreateThreadCard() {
	return (
		<Link
			to="/create"
			className="hover:bg-primary p-4 sm:py-5 sm:px-8 rounded-lg transform transition-all duration-150 ease-out hover:scale-100 active:scale-90 flex items-center justify-center w-full"
		>
			<Icons.create className="h-7 w-7 text-secondary" />
		</Link>
	)
}
