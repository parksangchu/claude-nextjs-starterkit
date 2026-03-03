import { Badge } from "@/components/ui/badge"

const techStack = [
  { name: "Next.js 15", category: "프레임워크" },
  { name: "React 19", category: "UI 라이브러리" },
  { name: "TypeScript", category: "언어" },
  { name: "Tailwind CSS v4", category: "스타일링" },
  { name: "shadcn/ui", category: "컴포넌트" },
  { name: "next-themes", category: "다크모드" },
  { name: "react-hook-form", category: "폼" },
  { name: "Zod", category: "유효성 검사" },
  { name: "App Router", category: "라우팅" },
]

export function TechStack() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">기술 스택</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {techStack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center gap-1">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {tech.name}
            </Badge>
            <span className="text-xs text-muted-foreground">{tech.category}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
