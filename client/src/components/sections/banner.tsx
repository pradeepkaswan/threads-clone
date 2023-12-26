import { Icons } from '@/assets/Icons'
import useWindowSize from '@/hooks/use-window-size'
import bgImage from '../../assets/bg.webp'

const Banner = () => {
  const { isMobile } = useWindowSize()

  return (
    <header className="max-w-screen-md md:max-w-screen-2xl lg:max-w-[1800px] mx-auto">
      {isMobile ? (
        <div className="flex justify-center items-center">
          <Icons.logo className="h-[68px] w-[68px] mb-6 mt-[168px]" />
        </div>
      ) : (
        <nav className="z-50 flex -mb-52 justify-between items-center w-full pointer-events-none select-none">
          <img
            src={bgImage}
            height={1000}
            width={1000}
            className="w-full h-[500px] object-cover"
            alt="bg"
          />
        </nav>
      )}
    </header>
  )
}

export default Banner
