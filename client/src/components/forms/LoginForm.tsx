import { useEffect, useRef, useState } from "react"
import { Button } from "../ui/Button"
import { Icons } from "../Icons"

export default function LoginForm() {
  const [loading, setLoading] = useState(false)
  // const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const body: { [key: string]: string } = {}

    for (const [key, value] of form.entries()) {
      body[key] = value as string
    }

    console.log(body)
    // setLoading(false)
  }

  const inputClasses =
    "py-5 w-full px-4 rounded-xl text-white text-[15px] font-medium tracking-normal outline-none ring-0 focus-visible:ring-1 focus-visible:ring-[#393939] dark:focus-visible:ring-[#393939] bg-[#1e1e1e] placeholder:text-[#777777]"

  return (
    <form
      className="flex flex-col max-w-[370px] w-full mx-auto gap-2.5"
      onSubmit={handleSubmit}
    >
      <span className="font-bold mb-2 text-center">
        Log in with your account
      </span>
      <div>
        <input
          id="username"
          type="text"
          name="username"
          className={inputClasses}
          placeholder="Username"
        />
      </div>
      <div>
        <input
          id="password"
          type="password"
          name="password"
          className={inputClasses}
          placeholder="Password"
        />
      </div>

      <Button
        type="submit"
        className="py-8 bg-white hover:bg-white text-base text-black font-semibold rounded-xl"
      >
        {loading ? <Icons.loading className="h-10 w-10" /> : "Log in"}
      </Button>
    </form>
  )
}
