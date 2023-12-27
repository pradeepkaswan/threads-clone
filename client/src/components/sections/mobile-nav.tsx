import { Icons } from '@/assets/Icons'
import { cn } from '@/lib/utils'
import { Link, useLocation } from 'react-router-dom'
import NewThreadCard from './new-thread-card'

const MobileNav = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <>
      <Link
        to="/"
        className="p-4 sm:py-5 sm:px-8 rounded-lg transform transition-all duration-150 ease-out hover:bg-primary hover:scale-100 active:scale-90 flex items-center justify-center w-full"
      >
        <Icons.home
          className={cn(
            'h-[26px] w-[26px] text-lg',
            path === '/' ? 'text-foreground' : 'text-secondary'
          )}
          fill={path === '/' ? 'currentColor' : 'transparent'}
        />
      </Link>
      <Link
        to="/search"
        className="p-4 sm:py-5 sm:px-8 rounded-lg transform transition-all duration-150 ease-out hover:bg-primary hover:scale-100 active:scale-90 flex items-center justify-center w-full"
      >
        <Icons.search
          className={cn(
            'h-6 w-6 text-lg',
            path === '/search' ? 'text-foreground' : 'text-secondary'
          )}
        />
      </Link>
      {/* <NewThreadCard /> */}
      <Link
        to="/activity"
        className="p-4 sm:py-5 sm:px-8 rounded-lg transform transition-all duration-150 ease-out hover:bg-primary hover:scale-100 active:scale-90 flex items-center justify-center w-full"
      >
        <Icons.activity
          className={cn(
            'h-[26px] w-[26px]',
            path === '/activity' ? 'text-foreground' : 'text-secondary'
          )}
          fill={path === '/activity' ? 'currentColor' : 'transparent'}
        />
      </Link>
      <Link
        to="/:username"
        className="p-4 sm:py-5 sm:px-8 rounded-lg transform transition-all duration-150 ease-out hover:bg-primary hover:scale-100 active:scale-90 flex items-center justify-center w-full"
      >
        <Icons.profile
          className={cn(
            'h-[26px] w-[26px]',
            path === '/:username' ? 'text-foreground' : 'text-secondary'
          )}
          fill={path === '/:username' ? 'currentColor' : 'transparent'}
        />
      </Link>
    </>
  )
}

export default MobileNav
