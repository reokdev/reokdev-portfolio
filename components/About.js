'use client'

import { motion } from 'framer-motion';

const About = () => {
    const skills = ['JavaScript', 'React', 'Next.js', 'Node.js', 'CSS', 'HTML', 'Git', 'AWS']

    return (
        <section id="about" className="py-20 px-4 md:px-20 bg-gray-100 min-h-screen flex flex-col justify-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-[#B8A2E0]">Who Am I?</h2>
                <div>
                    <p className="text-lg mb-8">
                        Hi there! 👋🏼 I&apos;m Rachael, a Front-End Wev Developer based in Lancashire, UK.
                    </p>
                    <p className="text-lg mb-8">
                        I&apos;m passionate about creating beautiful, intuitive, and responsive websites that provide exceptional user experiences.
                        With a keen eye for design and a love for clean, efficient code, I specialize in translating ideas
                        into fully functional web applications.
                    </p>
                    <p className="text-lg mb-8">
                        My journey in web development began with a fascination for how technology can connect people and
                        ideas. Now, I channel that enthusiasm into crafting digital solutions that make a real impact.
                        Whether it&apos;s building a sleek portfolio site or developing a complex web application, I approach
                        each project with creativity and attention to detail.
                    </p>
                    <p className="text-lg mb-8">
                        When I&apos;m not coding, you can find me exploring the beautiful Lancashire countryside, experimenting
                        with new web technologies, or contributing to open-source projects. I&apos;m always eager to learn and
                        grow in this ever-evolving field of web development.
                    </p>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <motion.span
                            key={skill}
                            className="bg-[#B8A2E0] dark:bg-[#9F82C9] text-white px-3 py-1 rounded-full text-sm cursor-pointer"
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "#9F82C9",
                                transition: {duration: 0.2}
                            }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About;