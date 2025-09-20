import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4 py-16">
        <nav className="mb-12 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Template Project
          </h1>
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/about">About</Link>
            </Button>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-4">About Us</Badge>
            <h1 className="text-5xl font-bold tracking-tight">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building exceptional digital experiences with modern technology and thoughtful design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
                <CardDescription>
                  Empowering creativity through technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe in creating tools and experiences that inspire innovation 
                  and make complex technology accessible to everyone. Our goal is to 
                  bridge the gap between imagination and implementation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle>Our Values</CardTitle>
                <CardDescription>
                  The principles that guide our work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Innovation through simplicity</li>
                  <li>• User-centered design</li>
                  <li>• Continuous learning</li>
                  <li>• Collaborative growth</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle>Ready to Get Started?</CardTitle>
                <CardDescription>
                  Let's build something amazing together
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="mt-4">
                  <Link to="/">Back to Home</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;