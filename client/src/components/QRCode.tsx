import { useWindowSize } from "@/hooks/useWindowSize"
import qrCode from "@/assets/qr.png"

export default function QRCode() {
	const { isMobile } = useWindowSize()

	return (
		!isMobile && (
			<div className="fixed bottom-2 right-2 flex  flex-col items-center justify-center lg:bottom-10 lg:right-10">
				<span className="text-[13px] tracking-wide text-[#777777] lg:mb-4">
					Scan to see the repo
				</span>
				<div className="z-50 scale-75 transform select-none transition-transform hover:scale-90 lg:scale-100">
					<img
						src={qrCode}
						height={175}
						width={175}
						className="z-50 cursor-pointer rounded-3xl border border-[#393939] bg-[#181818] p-4 lg:rounded-2xl lg:p-2 "
						alt="qr"
					/>
				</div>
			</div>
		)
	)
}
