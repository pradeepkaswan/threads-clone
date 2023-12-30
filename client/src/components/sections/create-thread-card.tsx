import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"
import { Icons } from "@/assets/icons"
import { cn } from "@/lib/utils"
import { useLocation } from "react-router-dom"
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { useMemo } from "react"

const CreateThreadCard: React.FC = () => {
  const location = useLocation()
  const path = location.pathname
  // const { postPrivacy, setPostPrivacy } = usePost()

  const privacyText = {
    ["ANYONE"]: "Anyone can reply",
    ["FOLLOWED"]: "Profiles you follow can reply",
    ["MENTIONED"]: "Profiles you mention can reply",
  }

  // const privacyDisplayText = useMemo(() => {
  //   return privacyText[postPrivacy]
  // }, [postPrivacy])

  return (
    <Dialog>
      <DialogTrigger>
        <div className="hover:bg-primary p-4 sm:py-5 sm:px-[34px]  rounded-lg transform transition-all duration-150 ease-out hover:scale-100 active:scale-90 flex items-center justify-center w-full">
          <Icons.create
            className={cn(
              "h-6 w-6",
              path === "/create" ? "text-forground" : "text-secondary"
            )}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="border-none bg-transparent sm:max-w-[668px] max-w-lg w-full shadow-none select-none outline-none">
        <h1 className="w-full text-center font-semibold mb-2 text-white">
          <>New thread</>
        </h1>
        <Card className="rounded-2xl">
          <div className="flex justify-between items-center w-full p-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-[15px] text-[#777777] tracking-normal select-none cursor-pointer outline-none z-50">
                  Anyone can reply
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className=" bg-background shadow-2xl dark:bg-[#181818] rounded-2xl w-[190px] mt-1 z-[1000] p-0"
              >
                <DropdownMenuItem
                  className="focus:bg-transparent px-4 tracking-normal select-none font-semibold py-3 cursor-pointer text-[15px] rounded-none active:bg-primary-foreground"
                  onClick={() => setPostPrivacy("ANYONE")}
                >
                  Anyone
                </DropdownMenuItem>
                <DropdownMenuSeparator className=" h-[1.2px] my-0" />
                <DropdownMenuItem
                  className="focus:bg-transparent px-4 tracking-normal  select-none font-semibold py-3 cursor-pointer text-[15px] rounded-none active:bg-primary-foreground"
                  onClick={() => setPostPrivacy("FOLLOWED")}
                >
                  Profiles you follow
                </DropdownMenuItem>
                <DropdownMenuSeparator className=" h-[1.2px] my-0" />
                <DropdownMenuItem
                  className="focus:bg-transparent px-4 tracking-normal  select-none font-semibold py-3 cursor-pointer text-[15px] rounded-none active:bg-primary-foreground"
                  onClick={() => setPostPrivacy("MENTIONED")}
                >
                  Mentioned only
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              size={"sm"}
              className="rounded-full px-4 font-semibold bg-foreground hover:bg-foreground select-none text-white dark:text-black"
            >
              Post
              <span className="sr-only">Post</span>
            </Button>
          </div>
        </Card>
      </DialogContent>
    </Dialog>
  )
}

export default CreateThreadCard
