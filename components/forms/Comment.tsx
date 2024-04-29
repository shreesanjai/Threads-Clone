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
import { zodResolver } from "@hookform/resolvers/zod";

import { usePathname, useRouter } from "next/navigation";
import { commentValidation } from "@/lib/validations/thread";
import Image from "next/image";
import { Input } from "../ui/input";
import { addCommentToThread } from "@/lib/actions/thread.actions";
// import { createThread } from "@/lib/actions/thread.actions";


interface props 
{
    threadId : string,
    currentUserImg : string,
    currentUserId : string
}


const Comment = ({threadId, currentUserImg, currentUserId} : props) => {

    const router = useRouter();
    const pathname = usePathname();

    
    const form = useForm({
        resolver: zodResolver(commentValidation),
        defaultValues: {
            thread: "",
        },
    });

    const onSubmit = async(values : z.infer<typeof commentValidation>) => {
        
        await addCommentToThread(
            threadId,
            values.thread,
            JSON.parse(currentUserId),
            pathname
        ) 

        form.reset();
    }

    return (
        <Form {...form}>
        <form
            className='comment-form'
            onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
            control={form.control}
            name='thread'
            render={({ field }) => (
                <FormItem className='flex w-full items-center gap-3'>
                <FormLabel>
                    <Image 
                        src = {currentUserImg}
                        alt ="Profile image"
                        width={48}
                        height = {48}
                        className="rounded-full object-cover"
                    />
                </FormLabel>
                <FormControl className="border-none bg-transparent">
                    <Input
                    type = 'text'
                    placeholder = "Comment..."
                    className='no-focus border outline-none text-light-1'
                    {...field}
                    />
                </FormControl>

                </FormItem>
            )}
            />
            <Button type='submit' className="comment-form_btn">
                    Reply
            </Button>
        </form>
      </Form>

    );
}


export default Comment;