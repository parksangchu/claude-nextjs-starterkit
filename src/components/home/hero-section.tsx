import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      className="container mx-auto px-4 py-24 text-center"
      aria-labelledby="hero-heading"
    >
      <h1 id="hero-heading" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Next.js 15{" "}
        <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          스타터킷
        </span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
        백엔드 개발자를 위한 최소 설정 프론트엔드 스타터킷.
        다크모드, 폼 유효성 검사, 반응형 레이아웃이 포함되어 있습니다.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" asChild>
          <Link href="/form-example">폼 예제 보기</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js 문서
          </a>
        </Button>
      </div>
    </section>
  )
}
