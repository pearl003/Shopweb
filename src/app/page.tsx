import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Welcome to Shopweb</h1>
        <p className="text-lg mb-4">
          A modern e-commerce platform built with Next.js and Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
