const SiteFooter = () => {
  return (
    <footer className="w-full fixed mx-auto bottom-6 lg:max-w-full max-w-screen-md md:max-w-screen-2xl">
      <ul className="flex flex-wrap justify-center gap-4 text-xs">
        <li>
          <a href="#" className="text-gray-500 transition hover:opacity-75">
            &#169; 2023
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500 transition hover:opacity-75">
            Threads Terms
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500 transition hover:opacity-75">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500 transition hover:opacity-75">
            Cookies Policy
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500 transition hover:opacity-75">
            Report a problem
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default SiteFooter
