import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from '@assets/generated_images/professional_developer_profile_placeholder_with_abstract_tech_background.png';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-mono mb-4 text-lg">Hello, I am</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Alptuğ Buğra <br />
              <span className="text-slate-400">Taşkent</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Computer Engineer & Junior Backend Java Developer. 
              Specializing in building scalable, secure, and efficient backend solutions with Spring Boot and AWS.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
              <a href="#contact">
                <Button size="lg" className="font-mono">
                  Contact Me
                </Button>
              </a>
              <a href="/cv.pdf" download="AlptugBugraTaskent_CV.pdf">
                <Button variant="outline" size="lg" className="font-mono group">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download CV
                </Button>
              </a>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a href="https://github.com/alptug33" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/alptugbugrataskent" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:alptug3bugra33@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 relative z-10 bg-muted">
               <img 
                src={profileImage}
                alt="Alptuğ Buğra Taşkent" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Orbit */}
            <div className="absolute inset-0 -m-4 border border-primary/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-0 -m-8 border border-dashed border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-muted-foreground h-6 w-6" />
      </motion.div>
    </section>
  );
}
