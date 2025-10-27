import { Code2, Database, FileSpreadsheet, Briefcase, Globe, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "HTML & CSS", icon: Globe, color: "text-primary" },
  { name: "JavaScript", icon: Code2, color: "text-primary" },
  { name: "Java (Basic)", icon: Code2, color: "text-primary" },
  { name: "SQL", icon: Database, color: "text-primary" },
  { name: "Microsoft Office", icon: FileSpreadsheet, color: "text-primary" },
  { name: "Business Analysis", icon: Briefcase, color: "text-primary" },
  { name: "AI/ML Concepts", icon: Brain, color: "text-primary" },
];

const Skills = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical proficiencies and business acumen
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <skill.icon className={`h-10 w-10 mb-3 ${skill.color}`} />
                <p className="font-medium text-foreground">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
