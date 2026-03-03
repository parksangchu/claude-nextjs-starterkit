import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Separator } from "@/components/ui/separator"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Next.js Starter
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              홈
            </Link>
            <Link
              href="/form-example"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              폼 예제
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
      <Separator />
    </header>
  )
}
