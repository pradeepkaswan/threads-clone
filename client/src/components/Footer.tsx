export default function Footer() {
	const linkClasses = "text-gray-500 transition hover:opacity-75"

	return (
		<footer className="fixed bottom-6 mx-auto w-full max-w-screen-md md:max-w-screen-2xl lg:max-w-full">
			<ul className="flex flex-wrap justify-center gap-4 text-xs">
				<li>
					<a
						href="#"
						className={linkClasses}
					>
						&#169; 2023
					</a>
				</li>
				<li>
					<a
						href="#"
						className={linkClasses}
					>
						Threads Terms
					</a>
				</li>
				<li>
					<a
						href="#"
						className={linkClasses}
					>
						Privacy Policy
					</a>
				</li>
				<li>
					<a
						href="#"
						className={linkClasses}
					>
						Cookies Policy
					</a>
				</li>
				<li>
					<a
						href="#"
						className={linkClasses}
					>
						Report a problem
					</a>
				</li>
			</ul>
		</footer>
	)
}
