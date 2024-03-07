import { useContext, useEffect, useRef, useState } from "react"
import { Button } from "../ui/Button"
import { Icons } from "../Icons"
import { AuthContext } from "../../context/AuthContext"

interface UserData {
  username: string
  password: string
}

export default function LoginForm() {
  const [loading] = useState(false)
  const authContext = useContext(AuthContext)
  const [user, setUser] = useState<UserData>({ username: "", password: "" })
  const usernameRef = useRef<HTMLInputElement>(null)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // authContext?.login()
    console.log(authContext)
    console.log(user)
    // if (user) {
    // 	console.log("User exists")
    // 	try {
    // 		const res = await fetch("/api/login", {
    // 			method: "POST",
    // 			headers: {
    // 				"Content-Type": "application/json",
    // 			},
    // 			body: JSON.stringify({ username, password }),
    // 		})
    // 		if (res.ok) {
    // 			const data = await res.json()
    // 			console.log(data)
    // 		}
    // 	} catch (error) {
    // 		console.error(error)
    // 	}
    // } else {
    // 	return <Navigate to="/account-setup" />
    // }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setUser((prevValue) => ({ ...prevValue, [name]: value }))
  }

  useEffect(() => {
    usernameRef.current!.focus()
  }, [])

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
          name="username"
          type="text"
          className={inputClasses}
          placeholder="Username"
          onChange={handleChange}
          ref={usernameRef}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          className={inputClasses}
          placeholder="Password"
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        className="py-8 bg-white hover:bg-white text-base text-black font-semibold rounded-xl"
        disabled={loading}
      >
        {loading ? <Icons.loading className="h-10 w-10" /> : "Log in"}
      </Button>
    </form>
  )
}
