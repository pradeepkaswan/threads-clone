import { useState } from "react"
import { Button } from "../ui/Button"
import { Icons } from "../Icons"

export default function LoginForm() {
	const [loading, setLoading] = useState(false)

	const inputClasses =
		"h-14 w-full px-4 rounded-xl text-white text-[15px] font-medium tracking-normal outline-none ring-0 focus-visible:ring-1 focus-visible:ring-[#393939] dark:focus-visible:ring-[#393939] bg-[#1e1e1e] placeholder:text-[#777777]"

	return (
		<form className="flex flex-col max-w-[370px] mx-auto gap-2.5">
			<input
				type="text"
				className={inputClasses}
				placeholder="Username"
			/>
			<input
				type="password"
				className={inputClasses}
				placeholder="Password"
			/>
			<Button
				type="submit"
				className="h-14 bg-white text-base text-black font-semibold rounded-xl"
				disabled={loading}
			>
				{loading ? <Icons.loading className="h-10 w-10" /> : "Log in"}
			</Button>
		</form>
	)
}
