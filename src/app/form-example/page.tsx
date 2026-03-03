import type { Metadata } from "next"
import { ContactForm } from "@/components/forms/contact-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "폼 예제 - Next.js Starter Kit",
  description: "Zod + react-hook-form + shadcn/ui Form 컴포넌트 예제",
}

export default function FormExamplePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">폼 예제</h1>
        <p className="text-muted-foreground">
          Zod + react-hook-form + shadcn/ui Form 조합 예제입니다.
          빈 칸으로 제출하면 유효성 검사 에러가 표시됩니다.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>문의하기</CardTitle>
          <CardDescription>
            아래 양식을 작성하여 메시지를 보내주세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  )
}
