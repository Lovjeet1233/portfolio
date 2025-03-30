import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';
const projects = [
  {
    img: project1,
    title: "StudyGen",
    description:
      "Built an AI-driven study material generator using Next.js, ShadCN/UI, NeonDB, Inngest, Tailwind CSS, Gemini, Clerk Auth, and Stripe. Users can generate quizzes, chapters, flashcards, and interview questions for any topic.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project2,
    title: "JobsForces",
    description:
      "An AI-powered career development platform offering resume generation, interview prep, and skill assessments. Built with Next.js, React, Tailwind CSS, Prisma, PostgreSQL, and Google Generative AI.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project3,
    title: "Trucking Platform",
    description:
      "A Next.js & MERN-based logistics platform connecting shippers and truckers with features like load posting, bidding, tracking, and financial management. Uses JWT, Socket.io, and MongoDB.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project4,
    title: "MediSync - Patient Management System",
    description:
      "A Next.js-based healthcare app for managing doctor appointments with Twilio SMS notifications, Appwrite file uploads, and real-time monitoring using Sentry.",
    links: {
      site: "#",
      github: "#",
    },
  },
];


const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-5'>
                        {/* <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a> */}
                        <a href={project.links.github}
                            className='px-5 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                                          
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio