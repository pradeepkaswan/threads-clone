import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Separator } from "../ui/separator"

const CreateThread = () => {
  return (
    <div className="flex flex-col w-full select-none">
      <div className="flex w-full my-4">
        <div className="w-full flex select-none">
          <Avatar className="mr-4">
            <AvatarImage />
            <AvatarFallback />
          </Avatar>
          <input
            placeholder="Start a thread..."
            className="resize-none bg-transparent w-full placeholder:text-[#777777] outline-none placeholder:text-[16px]"
          />
        </div>
        <span className="rounded-full font-semibold text-[17px] inline-flex items-center justify-center text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 text-primary-foreground cursor-not-allowed opacity-30  bg-foreground hover:bg-foreground select-none text-white dark:text-black ">
          Post
        </span>
      </div>
      <Separator />
    </div>
  )
}

export default CreateThread
