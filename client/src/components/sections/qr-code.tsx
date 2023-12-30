import useWindowSize from "@/hooks/use-window-size"
import qr from "../../assets/qr.png"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

const QRCode = () => {
  const { isMobile } = useWindowSize()

  return isMobile ? null : (
    <div className="flex flex-col justify-center items-center  fixed right-2 bottom-2 lg:right-10 lg:bottom-10">
      <span className="text-[#777777] text-[13px] tracking-wide lg:mb-4">
        Scan to see the repo
      </span>
      <div className="z-50 scale-75 lg:scale-100 hover:scale-90 transform transition-transform select-none">
        <Zoom zoomMargin={200} classDialog="zoom-image">
          <img
            src={qr}
            className="w-[175px] h-[175px] p-4 lg:p-2 cursor-pointer border border-[#393939] z-50 rounded-3xl lg:rounded-2xl bg-[#181818] "
            alt="qr"
          />
        </Zoom>
      </div>
    </div>
  )
}

export default QRCode
