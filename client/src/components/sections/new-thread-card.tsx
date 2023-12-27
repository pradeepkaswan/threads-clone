import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Icons } from '@/assets/Icons'
import { cn } from '@/lib/utils'
import { useLocation } from 'react-router-dom'

const NewThreadCard: React.FC = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <Dialog>
      <DialogTrigger>
        <div className="hover:bg-primary p-4 sm:py-5 sm:px-[34px]  rounded-lg transform transition-all duration-150 ease-out hover:scale-100 active:scale-90 flex items-center justify-center w-full">
          <Icons.create
            className={cn(
              'h-6 w-6',
              path === '/create' ? 'text-forground' : 'text-secondary'
            )}
          />
        </div>
      </DialogTrigger>
      <DialogContent>
        <h1>{replyPostInfo ? <>Reply</> : <>New thread</>}</h1>
      </DialogContent>
    </Dialog>
  )
}

export default NewThreadCard
