import useDialog from "@/app/store"
import CreateThread from "@/components/sections/create-thread"
import Loader from "@/components/ui/loader"

const HomePage: React.FC = () => {
  const { setOpenDialog } = useDialog()

  return (
    <div>
      <div className="w-full sm:flex hidden">
        <CreateThread onClick={() => setOpenDialog(true)} />
      </div>
      <Loader />
    </div>
  )
}

export default HomePage
