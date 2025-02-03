import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {toast} from "@/hooks/use-toast.ts";
import {useAuth} from "@/contexts/AuthContext.tsx";

// Define a schema for the login form.
// In this example, we require a valid email and a password of at least 6 characters.
const LoginSchema = z.object({
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "Password must be at least 6 characters"}),
})

export function LoginForm() {
    const {login} = useAuth()

    const form = useForm<z.infer<typeof LoginSchema>>({
	  resolver: zodResolver(LoginSchema),
	  defaultValues: {
		email: "",
		password: "",
	  },
    })

    async function onSubmit(data: z.infer<typeof LoginSchema>) {
	  await login({email: data.email, password: data.password});
	  toast({
		className: "bg-green-500 text-white",
		title: "Login successful",
	  })
    }

    return (
	    <Form {...form}>
		  <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/3 rounded-md border p-4 space-y-4">
			<h1 className="text-2xl font-bold text-center">Login</h1>

			<FormField
				control={form.control}
				name="email"
				render={({field}) => (
					<FormItem>
					    <FormLabel>Email</FormLabel>
					    <FormControl>
						  <Input placeholder="you@example.com" {...field} />
					    </FormControl>
					    <FormMessage/>
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="password"
				render={({field}) => (
					<FormItem>
					    <FormLabel>Password</FormLabel>
					    <FormControl>
						  <Input type="password" placeholder="Your password" {...field} />
					    </FormControl>
					    <FormMessage/>
					</FormItem>
				)}
			/>

			<Button type="submit" className="w-full">
			    Login
			</Button>
		  </form>
	    </Form>
    )
}
