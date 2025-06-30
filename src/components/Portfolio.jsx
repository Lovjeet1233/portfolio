// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Github, 
//   Linkedin, 
//   Mail, 
//   ExternalLink, 
//   Code2, 
//   Briefcase, 
//   User, 
//   Phone,
//   MapPin,
//   Calendar,
//   Award,
//   ChevronDown,
//   Menu,
//   X
// } from 'lucide-react';

// const Portfolio = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'experience', label: 'Experience' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'contact', label: 'Contact' }
//   ];

//   const experiences = [
//     {
//       company: 'MountDiggers',
//       position: 'Head of Tech',
//       period: 'December 2024 - February 2025',
//       description: 'Led the development of Mount Diggers, a premium adventure travel platform. Designed a seamless and secure booking experience, ensuring 100% safe travels for 2,500+ happy travelers. The platform supports 15+ adventure activities, including high-altitude expeditions up to 5,800m.',
//       technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe']
//     },
//     {
//       company: 'Zephyr Sample',
//       position: 'Full Stack Developer Intern',
//       period: 'April 2024 - June 2024',
//       location: 'Remote, Atlanta',
//       description: 'Built comprehensive project and API management platform serving clients, suppliers, and administrative users. Developed real-time survey tracking system managing 1000+ active clients and suppliers across 80+ vendor partnerships.',
//       technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io']
//     },
//     {
//       company: 'Jobsforce.ai',
//       position: 'Full Stack Developer Intern',
//       period: 'April 2024 - May 2024',
//       location: 'Remote, San Francisco',
//       description: 'Optimized backend API endpoints and integrated third-party services. Developed RAG application chatbot leveraging vector database technology for intelligent query processing.',
//       technologies: ['Next.js', 'Vector DB', 'AI/ML', 'Tailwind CSS']
//     }
//   ];

//   const projects = [
//     {
//       title: 'StudyGen',
//       description: 'AI-driven study material generator using Next.js, ShadCN/UI, NeonDB, Inngest, Tailwind CSS, Gemini AI, Clerk Auth, and Stripe. Users can generate quizzes, chapters, flashcards, and interview questions for any topic.',
//       image: '/api/placeholder/600/400',
//       technologies: ['Next.js', 'Gemini AI', 'NeonDB', 'Stripe', 'Clerk Auth'],
//       github: '#',
//       live: '#',
//       period: 'April 2024 - June 2024'
//     },
//     {
//       title: 'JobsForces',
//       description: 'AI-powered career development platform that provides personalized career coaching, resume and cover letter generation, interview preparation, and skill assessments.',
//       image: '/api/placeholder/600/400',
//       technologies: ['Next.js', 'React', 'PostgreSQL', 'Google AI', 'Prisma'],
//       github: '#',
//       live: '#',
//       period: 'February 2024 - April 2024'
//     },
//     {
//       title: 'Trucking Platform',
//       description: 'Logistics platform connecting shippers and truckers for load posting, bidding, real-time tracking, and financial management with role-based authentication.',
//       image: '/api/placeholder/600/400',
//       technologies: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
//       github: '#',
//       live: '#',
//       period: 'December 2023 - February 2024'
//     },
//     {
//       title: 'MediSync',
//       description: 'Healthcare platform for appointment booking and management between patients and doctors with SMS notifications, file uploads, and real-time monitoring.',
//       image: '/api/placeholder/600/400',
//       technologies: ['Next.js', 'TypeScript', 'Appwrite', 'Twilio', 'Sentry'],
//       github: '#',
//       live: '#',
//       period: 'October 2023 - December 2023'
//     }
//   ];

//   const skills = {
//     'Languages & Frameworks': ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'C++'],
//     'Styling & UI': ['Tailwind CSS', 'ShadCN/UI', 'Responsive Design'],
//     'Databases': ['MongoDB', 'PostgreSQL', 'NeonDB', 'Supabase', 'Prisma ORM'],
//     'Cloud & DevOps': ['AWS EC2', 'Web Services Deployment', 'Git'],
//     'Services & APIs': ['Stripe', 'Clerk Auth', 'Twilio', 'Google Gemini AI', 'Socket.io', 'JWT']
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = navItems.map(item => item.id);
//       const scrollPosition = window.scrollY + 100;

//       for (let i = sections.length - 1; i >= 0; i--) {
//         const element = document.getElementById(sections[i]);
//         if (element && element.offsetTop <= scrollPosition) {
//           setActiveSection(sections[i]);
//           break;
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="font-bold text-xl text-gray-900"
//             >
//               Lovjeet Singh
//             </motion.div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex space-x-8">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`px-3 py-2 text-sm font-medium transition-colors ${
//                     activeSection === item.id 
//                       ? 'text-blue-600 border-b-2 border-blue-600' 
//                       : 'text-gray-700 hover:text-blue-600'
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>

//             {/* Mobile menu button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 text-gray-700"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden bg-white border-t border-gray-200"
//             >
//               <div className="px-4 py-2 space-y-1">
//                 {navItems.map((item) => (
//                   <button
//                     key={item.id}
//                     onClick={() => scrollToSection(item.id)}
//                     className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
//                       activeSection === item.id 
//                         ? 'text-blue-600 bg-blue-50' 
//                         : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
//                     }`}
//                   >
//                     {item.label}
//                   </button>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//                 Hi, I'm{' '}
//                 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   Lovjeet Singh
//                 </span>
//               </h1>
//               <p className="text-xl text-gray-600 mb-4">Full Stack Developer</p>
//               <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//                 Passionate Full-Stack Developer with 3+ years of experience building AI-driven and scalable web applications. 
//                 Specialized in Next.js, React, Node.js, and modern cloud technologies.
//               </p>
              
//               <div className="flex flex-wrap gap-4 mb-8">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => scrollToSection('contact')}
//                   className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
//                 >
//                   Get In Touch
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => scrollToSection('projects')}
//                   className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
//                 >
//                   View Projects
//                 </motion.button>
//               </div>

//               <div className="flex gap-6">
//                 <motion.a
//                   whileHover={{ scale: 1.1 }}
//                   href="https://github.com/Lovjeet1233"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-600 hover:text-blue-600 transition-colors"
//                 >
//                   <Github size={24} />
//                 </motion.a>
//                 <motion.a
//                   whileHover={{ scale: 1.1 }}
//                   href="https://www.linkedin.com/in/lovjeet-singh-iitr"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-600 hover:text-blue-600 transition-colors"
//                 >
//                   <Linkedin size={24} />
//                 </motion.a>
//                 <motion.a
//                   whileHover={{ scale: 1.1 }}
//                   href="mailto:lovjeetsinghiitrfullstack@gmail.com"
//                   className="text-gray-600 hover:text-blue-600 transition-colors"
//                 >
//                   <Mail size={24} />
//                 </motion.a>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto relative overflow-hidden">
//                 <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
//                   <div className="text-6xl font-bold text-gray-400">LS</div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h2>
            
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl mb-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
//                   <div className="flex items-start gap-4">
//                     <div className="bg-blue-600 p-2 rounded-lg">
//                       <Award className="text-white" size={20} />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">Bachelor of Technology</h4>
//                       <p className="text-gray-600">Indian Institute of Technology Roorkee</p>
//                       <p className="text-sm text-gray-500">August 2022 - July 2026</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-3 gap-4 mb-8">
//                   <div className="text-center p-4 bg-gray-50 rounded-xl">
//                     <h4 className="text-2xl font-bold text-blue-600">7+</h4>
//                     <p className="text-sm text-gray-600">Projects</p>
//                   </div>
//                   <div className="text-center p-4 bg-gray-50 rounded-xl">
//                     <h4 className="text-2xl font-bold text-blue-600">3+</h4>
//                     <p className="text-sm text-gray-600">Years Experience</p>
//                   </div>
//                   <div className="text-center p-4 bg-gray-50 rounded-xl">
//                     <h4 className="text-2xl font-bold text-blue-600">2500+</h4>
//                     <p className="text-sm text-gray-600">Happy Users</p>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
//                 <div className="space-y-6">
//                   {Object.entries(skills).map(([category, techs]) => (
//                     <div key={category}>
//                       <h4 className="font-semibold text-gray-700 mb-3">{category}</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {techs.map((tech) => (
//                           <span
//                             key={tech}
//                             className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="py-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Experience</h2>
            
//             <div className="space-y-8">
//               {experiences.map((exp, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8, delay: index * 0.2 }}
//                   className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
//                 >
//                   <div className="flex flex-wrap items-start justify-between mb-4">
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
//                       <p className="text-blue-600 font-medium">{exp.position}</p>
//                       {exp.location && <p className="text-gray-500 text-sm">{exp.location}</p>}
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-500 text-sm">
//                       <Calendar size={16} />
//                       {exp.period}
//                     </div>
//                   </div>
                  
//                   <p className="text-gray-700 mb-4">{exp.description}</p>
                  
//                   <div className="flex flex-wrap gap-2">
//                     {exp.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>
            
//             <div className="grid md:grid-cols-2 gap-8">
//               {projects.map((project, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8, delay: index * 0.2 }}
//                   className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow group"
//                 >
//                   <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="text-4xl font-bold text-gray-400">{project.title.charAt(0)}</div>
//                     </div>
//                   </div>
                  
//                   <div className="p-6">
//                     <div className="flex items-start justify-between mb-4">
//                       <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
//                       <span className="text-sm text-gray-500">{project.period}</span>
//                     </div>
                    
//                     <p className="text-gray-700 mb-4">{project.description}</p>
                    
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.technologies.map((tech) => (
//                         <span
//                           key={tech}
//                           className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
                    
//                     <div className="flex gap-4">
//                       <motion.a
//                         whileHover={{ scale: 1.05 }}
//                         href={project.github}
//                         className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
//                       >
//                         <Github size={16} />
//                         <span className="text-sm font-medium">Code</span>
//                       </motion.a>
//                       <motion.a
//                         whileHover={{ scale: 1.05 }}
//                         href={project.live}
//                         className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
//                       >
//                         <ExternalLink size={16} />
//                         <span className="text-sm font-medium">Live Demo</span>
//                       </motion.a>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-gray-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Get In Touch</h2>
            
//             <div className="grid md:grid-cols-2 gap-12">
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect!</h3>
//                 <p className="text-gray-700 mb-8">
//                   I'm always interested in new opportunities and exciting projects. 
//                   Whether you have a question or just want to say hi, I'll try my best to get back to you!
//                 </p>
                
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-4">
//                     <div className="bg-blue-100 p-3 rounded-lg">
//                       <Mail className="text-blue-600" size={20} />
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-900">Email</p>
//                       <p className="text-gray-600">lovjeetsinghiitrfullstack@gmail.com</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center gap-4">
//                     <div className="bg-blue-100 p-3 rounded-lg">
//                       <MapPin className="text-blue-600" size={20} />
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-900">Location</p>
//                       <p className="text-gray-600">Roorkee, Uttarakhand</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="space-y-6">
//                 <div>
                  
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//               <h3 className="text-xl font-bold">Lovjeet Singh</h3>
//               <p className="text-gray-400">Full Stack Developer</p>
//             </div>
            
//             <div className="flex gap-6">
//               <motion.a
//                 whileHover={{ scale: 1.1 }}
//                 href="https://github.com/Lovjeet1233"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <Github size={24} />
//               </motion.a>
//               <motion.a
//                 whileHover={{ scale: 1.1 }}
//                 href="https://www.linkedin.com/in/lovjeet-singh-iitr"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <Linkedin size={24} />
//               </motion.a>
//               <motion.a
//                 whileHover={{ scale: 1.1 }}
//                 href="mailto:lovjeetsinghiitrfullstack@gmail.com"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <Mail size={24} />
//               </motion.a>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; 2024 Lovjeet Singh. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
// export default Portfolio;