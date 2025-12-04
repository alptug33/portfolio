import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-card border border-primary/20 rounded-2xl p-8 md:p-12 text-center shadow-2xl shadow-primary/5"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-mono">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm currently seeking backend development opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:alptug3bugra33@gmail.com" className="group">
              <div className="p-6 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/30">
                <Mail className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-sm text-muted-foreground break-all">alptug3bugra33@gmail.com</p>
              </div>
            </a>
            
            <a href="https://wa.me/905358882072" target="_blank" rel="noopener noreferrer" className="group">
              <div className="p-6 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/30">
                <MessageCircle className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-medium mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">+90 535 888 2072</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/alptugbugrataskent" target="_blank" rel="noopener noreferrer" className="group">
              <div className="p-6 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/30">
                <Linkedin className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-medium mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">Connect professionally</p>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a href="https://github.com/alptug33" target="_blank" rel="noopener noreferrer">
               <Button variant="outline" size="lg" className="font-mono">
                 <Github className="mr-2 h-4 w-4" />
                 Follow on GitHub
               </Button>
            </a>
          </div>
        </motion.div>
        
        <div className="mt-20 text-center text-sm text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} Alptuğ Buğra Taşkent. Built with React & Tailwind.</p>
        </div>
      </div>
    </section>
  );
}
