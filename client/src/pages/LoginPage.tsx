import Footer from "@/components/Footer"
import { Icons } from "@/components/Icons"
import { useWindowSize } from "@/hooks/useWindowSize"
import bgImage from "@/assets/bg.webp"
import LoginForm from "@/components/forms/LoginForm"
import QRCode from "@/components/QRCode"

export default function LoginPage() {
	const { isMobile } = useWindowSize()

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
							className="h-[570px] w-full object-cover -mb-72"
							src={bgImage}
							alt="bg"
						/>
					</nav>
				)}
			</header>
			<LoginForm />
			<Footer />
			<QRCode />
		</>
	)
}
