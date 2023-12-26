import useWindowSize from '@/hooks/use-window-size'

const QRCode = () => {
  const { isMobile } = useWindowSize()

  return isMobile ? null : (
    <div>
      <span>Scan to get the app</span>
      <div>
        {/* <Zoom> */}
        {/* <QRCodeSvg /> */}
        {/* </Zoom> */}
      </div>
    </div>
  )
}

export default QRCode
