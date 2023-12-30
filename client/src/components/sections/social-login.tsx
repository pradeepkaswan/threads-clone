import { Icons } from '@/assets/Icons'
import { Button } from '../ui/button'

const SocialLogin: React.FC = () => {
  return (
    <Button
      aria-label={'Contine with Google'}
      variant="outline"
      className="flex justify-center items-center py-5 px-3 rounded-2xl transform active:scale-95 transition-transform cursor-pointer select-none h-20 w-full text-base bg-transparent hover:bg-transparent border-[#333333] text-white hover:text-white"
    >
      <Icons.googleColor className="mr-4" aria-hidden="true" />
      Continue with Google
    </Button>
  )
}

export default SocialLogin
