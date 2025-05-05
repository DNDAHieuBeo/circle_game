"use client"
import React from 'react'
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form";
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {ContactFormSchema} from "@/lib/validation";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import { Toaster } from "@/components/ui/sonner"
import { UseFormReturn } from "react-hook-form";


const ContactForm = () => {
    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(ContactFormSchema),
        // defaultValues: defaultValues as DefaultValues<T>,
    });

    return (
        <Form {...form}>
            <form className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your email
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="mobile"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Enter your phone number</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                Phone Number
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your message
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )

}
export default ContactForm
