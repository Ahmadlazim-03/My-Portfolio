"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Go Explore App",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Go Orbit App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Personal Blog",
    description: "A content-focused blog with a custom CMS, markdown support, and optimized for performance and SEO.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-1.5 bg-primary rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-muted-foreground max-w-2xl"
          >
            Here are some of my recent projects. Each project is a unique piece of development that showcases my skills
            and passion for building exceptional web applications.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  className="relative h-48 w-full overflow-hidden"
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                    className="text-xl font-bold mb-2"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                    className="text-muted-foreground mb-4 flex-1"
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
                    className="flex flex-wrap gap-2 mb-4"
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: index * 0.15 + 0.6 + tagIndex * 0.05 }}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.7 }}
                    className="flex space-x-3 mt-auto"
                  >
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl}>
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl}>
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex justify-center mt-12"
        >
          <Button variant="outline" size="lg">
            <Link href="#">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
