import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-primary font-mono">Professional Experience</h2>
        </motion.div>

        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-12 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
              <h3 className="text-xl font-bold text-slate-100">Computer Engineering Intern</h3>
              <span className="hidden md:inline text-muted-foreground">•</span>
              <span className="text-primary font-medium">Eterna Teknoloji</span>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 font-mono">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Jan 2025 – Feb 2025
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Mersin, Turkey
              </div>
            </div>

            <ul className="list-disc list-outside ml-4 space-y-2 text-slate-300">
              <li>Developed a keyword filtering application integrated with the Google Ads API using Java.</li>
              <li>Researched NLP models on Hugging Face and trained a basic model using Naive Bayes.</li>
              <li>Conducted API testing via Google Cloud Console and API Playground.</li>
              <li>Analyzed Google Play Store apps and created comprehensive reports.</li>
            </ul>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted ring-4 ring-background"></div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
              <h3 className="text-xl font-bold text-slate-100">B.Sc. in Computer Engineering</h3>
              <span className="hidden md:inline text-muted-foreground">•</span>
              <span className="text-primary font-medium">Gazi University</span>
            </div>
             <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 font-mono">
              <div className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                Education
              </div>
            </div>
            <p className="text-slate-300">
              Focused on Software Engineering, Data Structures, and Algorithm Analysis.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
