import { Button } from '@/components/ui/button'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center gap-2 w-[380px]">
        <h1 className="font-bold">Sorry, this page isn't available</h1>
        <p className="font-light text-base text-zinc-500 text-center">
          The link that you followed may be broken or the page may have been
          removed.
        </p>
        <Button variant="outline" size="sm" className="rounded-xl px-4">
          Back
        </Button>
      </div>
    </div>
  )
}
