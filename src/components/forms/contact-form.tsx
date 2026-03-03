"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, { message: "이름은 2자 이상이어야 합니다." }),
  email: z.string().email({ message: "올바른 이메일 주소를 입력해주세요." }),
  message: z
    .string()
    .min(20, { message: "메시지는 20자 이상이어야 합니다." })
    .max(500, { message: "메시지는 500자 이하여야 합니다." }),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(_values: FormValues) {
    // TODO: 여기에 실제 API 호출 코드를 작성합니다
    // 예: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(_values) })
    setSubmitted(true)
  }

  function handleReset() {
    setSubmitted(false)
    form.reset()
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4" aria-hidden="true">✅</div>
        <h3 className="text-xl font-semibold mb-2">메시지가 전송되었습니다!</h3>
        <p className="text-muted-foreground mb-6">
          실제 앱에서는 여기서 API 호출이 일어납니다.
        </p>
        <Button variant="outline" onClick={handleReset}>
          다시 작성하기
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이름</FormLabel>
              <FormControl>
                <Input placeholder="홍길동" {...field} />
              </FormControl>
              <FormDescription>2자 이상 입력해주세요.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input type="email" placeholder="hong@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>메시지</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="문의 내용을 입력해주세요. (20자 이상, 500자 이하)"
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>20자 이상 500자 이하로 입력해주세요.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          전송하기
        </Button>
      </form>
    </Form>
  )
}
