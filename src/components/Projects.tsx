import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Mood Map",
    description: "Developed a machine learning solution for predictive analytics using Python and TensorFlow. Features automated data processing and visualization dashboards.",
    image: project1,
    github: "https://github.com/Tech-Hubb/Mood-Map",
    demo: "https://sentiment-lens-57.lovable.app/",
  },
  {
    title: "Algora Chatbot",
    description: "Created a comprehensive BI system integrating SQL databases with interactive reporting tools. Streamlined business decision-making processes.",
    image: project2,
    github: "https://github.com/JadenMcRowdie/Algora-Chatbot",
    demo: "https://creator.voiceflow.com/share/68aea8e4d54e34927d61667f/development",
  },
  {
    title: "Bias Audit Report",
    description: "Built a responsive web application using modern JavaScript frameworks. Implemented user authentication and database management systems.",
    image: project3,
    github: "https://github.com/Tech-Hubb/Bias-audit-report",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my work in AI/ML, business systems, and web development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex gap-4">
                <Button variant="default" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                {project.demo && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Website
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
