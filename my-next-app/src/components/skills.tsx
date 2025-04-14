"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Html5, Css3, Javascript, ReactLogo, Nextjs, Nodejs, Database, Git } from "../components/tech-icons"
import { Card, CardContent } from "../components/ui/card"

const skills = [
  { name: "HTML", icon: Html5, color: "bg-orange-500/10 text-orange-500" },
  { name: "CSS", icon: Css3, color: "bg-blue-500/10 text-blue-500" },
  {
    name: "JavaScript",
    icon: Javascript,
    color: "bg-yellow-500/10 text-yellow-500",
  },
  { name: "React", icon: ReactLogo, color: "bg-cyan-500/10 text-cyan-500" },
  { name: "Next.js", icon: Nextjs, color: "bg-slate-500/10 text-slate-500" },
  { name: "Node.js", icon: Nodejs, color: "bg-green-500/10 text-green-500" },
  {
    name: "Databases",
    icon: Database,
    color: "bg-purple-500/10 text-purple-500",
  },
  { name: "Git", icon: Git, color: "bg-red-500/10 text-red-500" },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32">
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
            My Skills
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
            Here are the technologies and tools I work with to bring ideas to life. I'm constantly learning and adding
            new skills to my toolkit.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.43, 0.13, 0.23, 0.96], // Custom easing for a more dynamic feel
              }}
            >
              <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${skill.color}`}
                  >
                    <skill.icon className="h-8 w-8" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    className="font-medium"
                  >
                    {skill.name}
                  </motion.h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
