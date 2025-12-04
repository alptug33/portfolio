import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  { category: "Languages", items: ["Java", "Python", "SQL", "TypeScript"] },
  { category: "Frameworks", items: ["Spring Boot", "Spring", "React", "Hibernate (JPA)", "JUnit", "Mockito"] },
  { category: "Backend", items: ["RESTful APIs", "JSON Processing", "Maven", "Microservices"] },
  { category: "Cloud & DevOps", items: ["AWS Elastic Beanstalk", "EC2", "Git", "Docker"] },
  { category: "Databases", items: ["MySQL", "SQLite", "PostgreSQL"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-primary font-mono">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My expertise lies in backend technologies, with a focus on robust Java ecosystems and cloud deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-primary/10 bg-card hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-slate-200">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, i) => (
                      <Badge key={i} variant="secondary" className="text-sm py-1 px-3 font-normal">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
