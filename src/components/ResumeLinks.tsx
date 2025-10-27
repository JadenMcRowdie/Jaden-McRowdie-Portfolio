import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Github, Linkedin } from "lucide-react";

const ResumeLinks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Resume & Professional Links</h2>
          <p className="text-muted-foreground text-lg mb-12">
            Download my resume or connect with me on professional platforms
          </p>
          
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" variant="default" asChild className="w-full sm:w-auto">
                  <a href="#" download>
                    <FileText className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
                
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                  <a 
                    href="https://www.linkedin.com/in/jaden-mc-rowdie-953888238/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                  <a 
                    href="https://github.com/JadenMcRowdie" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeLinks;
