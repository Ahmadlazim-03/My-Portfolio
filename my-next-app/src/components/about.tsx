"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "../components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About Me
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
            Here you'll find more information about me, what I do, and my current skills in terms of programming and
            technology
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl font-bold"
            >
              Get to know me!
            </motion.h3>
            <div className="space-y-4 text-muted-foreground">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                I'm a <strong>Full Stack Web Developer</strong> building the Front-end and Back-end of Websites and Web
                Applications that leads to the success of the overall product. Check out some of my work in the Projects
                section.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                I also like sharing content related to the stuff that I have learned over the years in Web Development
                so it can help other people of the Dev Community.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity
                that matches my skills and experience then don't hesitate to contact me.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button className="mt-4">
                <FileText className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="relative rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-xl" />
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="About me"
                width={800}
                height={600}
                className="rounded-lg relative z-10 object-cover w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
