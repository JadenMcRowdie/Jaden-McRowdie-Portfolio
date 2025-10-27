import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          </div>
          
          <Card className="shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                <p>
                  Hello! I'm Jaden Mc Rowdie, a recent Bachelor of IT in Business Systems graduate with a passion for leveraging technology to drive business innovation and efficiency.
                </p>
                
                <p>
                  My academic journey has equipped me with a strong foundation in both technical skills and business acumen. I specialize in bridging the gap between technology and business objectives, with particular interests in AI/ML applications, data analytics, and business systems optimization.
                </p>
                
                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Career Objective</h3>
                  <p className="text-foreground/80">
                    Seeking opportunities as a Business Systems Analyst or IT Professional where I can apply my technical expertise and analytical mindset to solve complex business challenges, contribute to digital transformation initiatives, and grow within a dynamic organization.
                  </p>
                </div>
                
                <p>
                  I'm eager to bring fresh perspectives, a strong work ethic, and a commitment to continuous learning to a forward-thinking team. Let's connect and explore how I can contribute to your organization's success.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
