import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    title: "다크 모드",
    description:
      "next-themes를 사용한 라이트/다크/시스템 테마 지원. 새로고침 후에도 선택한 테마가 유지됩니다.",
    icon: "🌙",
  },
  {
    title: "폼 유효성 검사",
    description:
      "Zod 스키마 + react-hook-form + shadcn Form 컴포넌트로 타입 안전한 폼 처리. Java Bean Validation과 유사한 패턴.",
    icon: "✅",
  },
  {
    title: "App Router",
    description:
      "Next.js 15 App Router 기반. Server Component와 Client Component를 명시적으로 구분하여 성능 최적화.",
    icon: "⚡",
  },
]

export function FeatureCards() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <div className="text-4xl mb-2">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
