import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen gradient-subtle">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary"></div>
              <span className="text-lg font-semibold">Template</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              v1.0.0
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight">
            Clean Template Project
          </h1>
          <p className="mb-12 text-xl text-muted-foreground">
            A beautiful, minimal starting point for your next project. 
            Built with React, TypeScript, and Tailwind CSS.
          </p>

          {/* Feature Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="shadow-soft transition-smooth hover:shadow-medium">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold">Fast & Modern</h3>
                <p className="text-sm text-muted-foreground">
                  Built with Vite for lightning-fast development and optimized production builds.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft transition-smooth hover:shadow-medium">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5H9a2 2 0 00-2 2v12a4 4 0 004 4h6a2 2 0 002-2V7a2 2 0 00-2-2z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold">Component Library</h3>
                <p className="text-sm text-muted-foreground">
                  Complete UI components from shadcn/ui, ready to use and customize.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft transition-smooth hover:shadow-medium">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold">Type Safe</h3>
                <p className="text-sm text-muted-foreground">
                  Full TypeScript support with strict type checking for reliable code.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tech Stack */}
          <div className="mt-16">
            <h2 className="mb-8 text-2xl font-semibold">Built With</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'shadcn/ui'].map((tech) => (
                <Badge key={tech} variant="outline" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background/50">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-sm text-muted-foreground">
            Template Project • Ready to customize and build upon
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
