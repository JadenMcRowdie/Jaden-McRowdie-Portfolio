import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Jaden Mc Rowdie</h3>
            <p className="text-primary-foreground/80">
              Business Systems Analyst & IT Professional
            </p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="mailto:jaden@example.com"
              className="hover:text-primary-foreground/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/jaden-mc-rowdie-953888238/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/JadenMcRowdie"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground/80 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Jaden Mc Rowdie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
