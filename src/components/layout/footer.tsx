import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="mt-auto">
      <Separator />
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        <p>© 2026 Next.js Starter Kit. Built with Next.js 15 + Tailwind CSS v4 + shadcn/ui</p>
      </div>
    </footer>
  )
}
