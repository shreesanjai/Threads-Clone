"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";

import { usePathname, useRouter } from "next/navigation";
import { threadValidation } from "@/lib/validations/thread";
import { createThread } from "@/lib/actions/thread.actions";

// import { updateUser } from "@/lib/actions/user.actions";
// import { userValidation } from "@/lib/validations/user";





const PostThread = ({userId} : {userId : string}) => {

    const router = useRouter();
    const pathname = usePathname();

    
    const form = useForm({
        resolver: zodResolver(threadValidation),
        defaultValues: {
            thread: "",
        },
    });

    const onSubmit = async(values : z.infer<typeof threadValidation>) => {
        await createThread({
            text : values.thread,
            author : userId,
            communityId : null,
            path : pathname
        }) 

        router.push('/')
    }

    return (
      <Form {...form}>
        <form
            className='mt-10 flex flex-col justify-start gap-10'
            onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
            control={form.control}
            name='thread'
            render={({ field }) => (
                <FormItem className='flex w-full flex-col gap-3'>
                <FormLabel className='text-base-semibold text-light-2'>
                    Content
                </FormLabel>
                <FormControl>
                    <Textarea
                    rows={15}
                    className='no-focus border border-dark-4 bg-dark-3 text-light-1'
                    {...field}
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button type='submit' className="bg-primary-500">
                    Post Thread
            </Button>
        </form>
      </Form>

      
    
    );
}

export default PostThread;