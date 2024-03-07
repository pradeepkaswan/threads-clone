import { Link } from "react-router-dom"

export default function ErrorPage() {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center">
			<div className="flex w-[380px] flex-col items-center justify-center gap-3">
				<h1 className="font-bold">Sorry, this page isn&apos;t available</h1>
				<p className="text-center text-base font-light text-zinc-500">
					The link that you followed may be broken or the page may have been
					removed.
				</p>
				<Link
					to="/"
					className="inline-flex items-center justify-center font-medium border border-input bg-background h-9 rounded-xl px-4"
				>
					Back
				</Link>
			</div>
		</div>
	)
}
