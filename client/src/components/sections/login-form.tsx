import { Toaster, toast } from 'sonner'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'
import { authSchema } from '../../lib/validations'

const LoginForm = () => {
  type Inputs = z.infer<typeof authSchema>

  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
  })

  const onSubmit = (data: Inputs) => {}

  return (
    <div>
      <span className="text-white font-bold select-none">
        Log in with your Instagram account
      </span>

      <Form {...form}>
        <form
          className="w-full flex flex-col py-4 gap-1.5 text-start"
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        >
          <FormField
            control={form.control}
            name="identifier"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input
                      autoFocus
                      className="h-14 rounded-xl bg-[#1e1e1e] text-[15px] placeholder:text-[#777777] font-medium tracking-normal outline-none ring-0 focus-visible:ring-offset-0 min-h-min border-none focus-visible:ring-1 focus-visible:ring=[#393939] dark:focus-visible:ring-[#393939] px-4 text-white"
                      placeholder="Username, phone or email"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input
                      autoFocus
                      className="h-14 rounded-xl bg-[#1e1e1e] text-[15px] placeholder:text-[#777777] font-medium tracking-normal outline-none ring-0 focus-visible:ring-offset-0 min-h-min border-none focus-visible:ring-1 focus-visible:ring=[#393939] dark:focus-visible:ring-[#393939] px-4 text-white"
                      placeholder="Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )
            }}
          />
          <Button
            type="submit"
            className="h-14 rounded-xl my-1 font text-base font-semibold bg-white hover:bg-white text-black"
            onClick={() =>
              toast('Enter your Instagram username, phone or email.')
            }
          >
            Log in
            <span className="sr-only">Sign in</span>
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default LoginForm
