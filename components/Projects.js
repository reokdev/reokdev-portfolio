import Image from 'next/image'

const Projects = () => {
    const projects = [
        {
            title: 'QuizUp',
            description: 'This application is an interactive quiz designed to help users prepare for the AWS Certified Cloud Practitioner exam. It provides a user-friendly interface for practicing exam-style questions, with immediate feedback and explanations.',
            image: '/QuizUp-logo.png',
            demo: 'https://master.d3521812uzz24w.amplifyapp.com',
            github: 'https://github.com/reokdev/quizup-aws',
        }, {
            title: 'REOK Portfolio',
            description: 'This project showcases my skills and experiences as a web developer. Built using Next.js and React, it features a responsive design, custom animations, and seamless navigation.',
            image: '/reok-logo.png',
            demo: 'https://main.d21hvd2ycd48ld.amplifyapp.com/',
            github: 'https://github.com/reokdev/reokdev-portfolio',
        }
    ]
    return (
        <section id="projects" className="py-20 px-4 md:px-20 min-h-screen flex flex-col justify-center items-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl text-[#B8A2E0] font-bold mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full w-full max-w-md">
                            <div className="flex justify-center items-center p-4">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={200}
                                    className="rounded-full w-48 h-48 object-contain"
                                />
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                                <div className="flex justify-between mt-auto">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#B8A2E0] text-white px-4 py-2 rounded hover:bg-[#9F82C9]"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
)
}
export default Projects;