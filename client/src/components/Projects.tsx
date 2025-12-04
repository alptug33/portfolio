import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Spring Boot AWS Deployment",
    description: "Successfully deployed a Spring Boot 3 application to Amazon Elastic Beanstalk. Configured environment variables and utilized production profiles for scalable deployment.",
    tags: ["Java", "Spring Boot", "AWS", "Elastic Beanstalk"],
    link: "#"
  },
  {
    title: "Keyword Filtering Tool",
    description: "Java application integrated with Google Ads API. Filters out location and person names using NLP techniques and regex patterns for ad optimization.",
    tags: ["Java", "Google Ads API", "NLP", "Regex"],
    link: "#"
  },
  {
    title: "Spring Boot MVC CRUD",
    description: "Developed full-stack CRUD operations using the MVC pattern with Spring Boot and Hibernate. Implemented robust data handling on a MySQL database.",
    tags: ["Spring MVC", "Hibernate", "MySQL", "CRUD"],
    link: "#"
  },
  {
    title: "SMS Spam Detection App",
    description: "Android app detecting spam SMS using Naive Bayes and Firebase ML Kit. Monitors incoming messages in background and alerts users.",
    tags: ["Android", "Kotlin", "Machine Learning", "Firebase"],
    link: "#"
  },
  {
    title: "Spring Boot REST API",
    description: "Built a RESTful web service with Spring Boot implementing JSON-based data exchange, proper HTTP methods, and status codes.",
    tags: ["REST API", "Spring Boot", "JSON"],
    link: "#"
  },
  {
    title: "PhotoNote",
    description: "Android app for taking notes via photos. Stores data locally using Room and SQLite for offline access and efficient retrieval.",
    tags: ["Android", "Room", "SQLite"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-primary font-mono">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col border-primary/10 hover:border-primary/40 transition-all hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-100">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="font-mono text-xs border-primary/20 text-primary/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex gap-2 w-full">
                    <Button variant="secondary" size="sm" className="w-full" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View Code
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
