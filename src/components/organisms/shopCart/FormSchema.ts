import z from 'zod'

// Define schemas for each step
const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Name must be at least 2 characters.',
	}),
	email: z.email(),
	companyName: z.string(),
	phoneNumber: z.string(),
	address: z.string(),
})

export type FullFormData = z.infer<typeof formSchema>

export { formSchema }
