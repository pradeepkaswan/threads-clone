import Footer from "@/components/Footer"
import { Icons } from "@/components/Icons"
import { useWindowSize } from "@/hooks/useWindowSize"
import console from "console"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import bgImage from "@/assets/bg.webp"
import LoginForm from "@/components/forms/LoginForm"

export default function LoginPage() {
	const { isMobile } = useWindowSize()

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const user = checkIfUserExists(username, password)

		if (user) {
			console.log("User exists")
			try {
				const res = await fetch("/api/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ username, password }),
				})
				if (res.ok) {
					const data = await res.json()
					console.log(data)
				}
			} catch (error) {
				console.error(error)
			}
		} else {
			return <Navigate to="/account-setup" />
		}
	}

	return (
		<>
			<header className="mx-auto max-w-screen-md md:max-w-screen-2xl lg:max-w-w[1800px]">
				{isMobile ? (
					<div className="flex items-center justify-center">
						<Icons.logo className="h-[68px] w-[68px] mt-36 mb-6" />
					</div>
				) : (
					<nav className="">
						<img
							className="h-[500px] w-full object-cover absolute"
							src={bgImage}
							alt="bg"
						/>
					</nav>
				)}
			</header>
			<LoginForm />
			<Footer />
		</>
	)
}
