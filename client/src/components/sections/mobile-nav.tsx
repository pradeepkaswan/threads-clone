import Nav from "./nav"

const MobileNav = () => {
  return (
    <div className="fixed sm:hidden bottom-0 left-0 z-50 w-full h-16 dark:bg-[#101010D9] bg-background backdrop-blur-2xl">
      <div className="grid h-full grid-cols-5 mx-auto w-full">
        <Nav />
      </div>
    </div>
  )
}

export default MobileNav
