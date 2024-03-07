import { useState, useEffect } from "react"

interface WindowSize {
	width: number
	height: number
}

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: window.innerWidth,
		height: window.innerHeight,
	})

	const [isMobile, setIsMobile] = useState<boolean>(false)
	const [isDesktop, setIsDesktop] = useState<boolean>(false)

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})

			setIsMobile(window.innerWidth < 768) // Example: consider width less than 768px as mobile
			setIsDesktop(window.innerWidth >= 768) // Example: consider width greater than or equal to 768px as desktop
		}

		window.addEventListener("resize", handleResize)

		// Initial setup
		handleResize()

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return { ...windowSize, isMobile, isDesktop }
}
