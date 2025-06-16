import React from "react";
// import profilepic from "../assets/profpic.jpeg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiCplusplus,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql, 
  SiSupabase,
  SiPrisma,
//   SiAmazonaws,
  SiStripe,
  SiSocketdotio,
  SiGit,
  SiSentry,
  SiJsonwebtokens,
  SiTwilio,
  SiGooglegemini,
//   SiInngest,
  SiClerk
} from "react-icons/si";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <TypeAnimation
                    sequence={[
                        "Fullstack Dev",
                        1000,
                        "Web3 Dev",
                        1000,
                        "Web Design",
                        1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                />

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                >
                    HEY, I AM <br/>
                    <span className="text-purple-500">Lovjeet Singh</span>
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                >
                    I am a passionate fullstack developer with over 3 years of experience.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                    <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-purple-400 rounded-xl"     
                    >
                        Download CV
                    </motion.button>

                    <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Lovjeet1233">
                            <AiOutlineGithub/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/lovjeet-singh-iitr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <AiOutlineLinkedin/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="#">
                            <AiOutlineInstagram/>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>


{/*             <motion.img 
                src={profilepic}
                className="w-[300px] md:w-[450px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            /> */}
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-col items-center w-full py-16"
        >
            <h2 className="text-gray-200 text-4xl mb-8 font-bold">My Tech Stack</h2>
            
            <div className="w-full max-w-4xl">
                {/* Languages & Frameworks */}
                <div className="mb-8">
                    <h3 className="text-purple-400 text-xl mb-4">Languages & Frameworks</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiJavascript className="text-yellow-400 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">JavaScript</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiTypescript className="text-blue-500 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">TypeScript</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiReact className="text-blue-400 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">React.js</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiNextdotjs className="text-white text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">Next.js</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiNodedotjs className="text-green-500 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">Node.js</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiExpress className="text-gray-400 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">Express.js</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiCplusplus className="text-blue-600 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">C++ (DSA)</span>
                        </motion.div>
                    </div>
                </div>
                
                {/* Styling & UI */}
                <div className="mb-8">
                    <h3 className="text-purple-400 text-xl mb-4">Styling & UI</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiTailwindcss className="text-teal-400 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">Tailwind CSS</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <div className="bg-gray-800 rounded-full p-2 mb-2">
                                <span className="text-gray-200 text-2xl font-bold">SC</span>
                            </div>
                            <span className="text-gray-300 text-sm">ShadCN/UI</span>
                        </motion.div>
                    </div>
                </div>
                
                {/* Databases */}
                <div className="mb-8">
                    <h3 className="text-purple-400 text-xl mb-4">Databases</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiMongodb className="text-green-600 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">MongoDB</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiPostgresql className="text-blue-600 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">PostgreSQL</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <span className="text-cyan-400 text-3xl font-bold mb-2">N</span>
                            <span className="text-gray-300 text-sm">NeonDB</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiSupabase className="text-green-400 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">Supabase</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiPrisma className="text-gray-300 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">Prisma ORM</span>
                        </motion.div>
                    </div>
                </div>
                
                {/* Cloud & DevOps */}
                <div className="mb-8">
                    <h3 className="text-purple-400 text-xl mb-4">Cloud & DevOps</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiAmazonaws className="text-orange-400 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">AWS EC2</span>
                        </motion.div> */}
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <AiOutlineLink className="text-blue-400 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">Web Services</span>
                        </motion.div>
                    </div>
                </div>
                
                {/* Services & APIs */}
                <div className="mb-8">
                    <h3 className="text-purple-400 text-xl mb-4">Services & APIs</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiStripe className="text-purple-500 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">Stripe</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiClerk className="text-indigo-400 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">Clerk</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiTwilio className="text-red-400 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">Twilio</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiGooglegemini className="text-blue-300 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">Google Gemini</span>
                        </motion.div>
                        {/* <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiInngest className="text-purple-300 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">Inngest</span>
                        </motion.div> */}
                    </div>
                </div>
                
                {/* Tools */}
                <div className="mb-8">
                    <h3 className="text-purple-400 text-xl mb-4">Tools</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiSocketdotio className="text-gray-300 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">Socket.io</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiGit className="text-orange-500 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">Git</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiSentry className="text-purple-500 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">Sentry</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <SiJsonwebtokens className="text-gray-200 text-4xl mb-2" />
                            <span className="text-gray-300 text-sm">JWT</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>

        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div>
        
    </div>
  )
}

export default Hero
