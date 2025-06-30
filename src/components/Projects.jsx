import React from 'react';
import { Github, ExternalLink, Calendar, Star, Code, Database, Smartphone, Brain, Shield, Globe, Server, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "StudyGen",
      period: "Apr 2024 – Jun 2024",
      category: "AI & Education",
      icon: <Brain className="text-blue-600" size={24} />,
      description: "Built an AI-driven study material generator using Next.js, ShadCN/UI, NeonDB, Inngest, Tailwind CSS, Gemini AI, Clerk Auth, and Stripe. Users can generate quizzes, chapters, flashcards, and interview questions for any topic.",
      keyFeatures: [
        "AI-powered content generation using Google Gemini",
        "Multiple study formats: quizzes, flashcards, chapters",
        "Integrated payment system with Stripe",
        "User authentication and management with Clerk",
        "Responsive design with modern UI components"
      ],
      technologies: ["Next.js", "ShadCN/UI", "NeonDB", "Inngest", "Tailwind CSS", "Gemini AI", "Clerk Auth", "Stripe"],
      highlights: ["AI Integration", "Payment Processing", "Modern UI/UX"],
      github: "#",
      demo: "#"
    },
    {
      title: "JobsForces",
      period: "Feb 2024 – Apr 2024",
      category: "AI & Career Development",
      icon: <Code className="text-blue-600" size={24} />,
      description: "Developed an AI-powered career development platform that provides personalized career coaching, resume and cover letter generation, interview preparation, and skill assessments.",
      keyFeatures: [
        "AI-powered resume and cover letter generation",
        "Personalized career coaching system",
        "Interactive interview preparation modules",
        "Comprehensive skill assessment tools",
        "Job search enhancement features"
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "Prisma", "PostgreSQL", "Google Generative AI"],
      highlights: ["Career Coaching", "AI Content Generation", "Skill Assessment"],
      github: "#",
      demo: "#"
    },
    {
      title: "Trucking Platform",
      period: "Dec 2023 – Feb 2024",
      category: "Logistics & Real-time Systems",
      icon: <Database className="text-blue-600" size={24} />,
      description: "Designed a logistics platform connecting shippers and truckers for load posting, bidding, real-time tracking, and financial management. Features role-based authentication, trucker eligibility verification, super admin dashboard, and benefits management.",
      keyFeatures: [
        "Real-time load tracking and management",
        "Bidding system for load assignments",
        "Role-based authentication system",
        "Financial management and payments",
        "Super admin dashboard for oversight",
        "Trucker eligibility verification"
      ],
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.io"],
      highlights: ["Real-time Tracking", "Financial Management", "Role-based Access"],
      github: "#",
      demo: "#"
    },
    {
      title: "MediSync - Patient Management System",
      period: "Oct 2023 – Dec 2023",
      category: "Healthcare & Management",
      icon: <Smartphone className="text-blue-600" size={24} />,
      description: "Developed a Next.js-based healthcare platform for appointment booking and management between patients and doctors. Integrated SMS notifications (Twilio), file uploads (Appwrite), and real-time monitoring (Sentry).",
      keyFeatures: [
        "Appointment booking and scheduling",
        "Doctor-patient communication system",
        "SMS notifications for reminders",
        "Secure file upload and management",
        "Real-time system monitoring with Sentry",
        "Patient medical record management"
      ],
      technologies: ["Next.js", "TypeScript", "Appwrite", "Twilio", "Sentry"],
      highlights: ["Healthcare Management", "SMS Integration", "File Management"],
      github: "#",
      demo: "#"
    },
    {
      title: "Client-Side Wallet",
      period: "2024",
      category: "Web3 & Blockchain",
      icon: <Shield className="text-blue-600" size={24} />,
      description: "Built a JavaScript-based client-side cryptocurrency wallet supporting transfers, balance checks, and swaps. Implements secure private key management and transaction signing on the frontend.",
      keyFeatures: [
        "Secure private key generation and storage",
        "Multi-cryptocurrency support",
        "Transaction history and balance tracking",
        "Swap functionality between different tokens",
        "User-friendly interface for crypto operations"
      ],
      technologies: ["JavaScript", "Web3.js", "Crypto Libraries", "HTML5", "CSS3"],
      highlights: ["Wallet Development", "Crypto Transactions", "Security"],
      github: "#",
      demo: "#"
    },
    {
      title: "Solana Launch & Transfer Program",
      period: "2024",
      category: "Web3 & Blockchain",
      icon: <Globe className="text-blue-600" size={24} />,
      description: "Developed a Solana-based program for token launch and transfer operations. Includes smart contract deployment, token minting, and automated transfer mechanisms on the Solana blockchain.",
      keyFeatures: [
        "Token launch and deployment on Solana",
        "Automated transfer mechanisms",
        "Smart contract integration",
        "Transaction optimization for low fees",
        "Integration with Solana ecosystem tools"
      ],
      technologies: ["Solana", "Rust", "Web3.js", "Anchor Framework", "@solana/web3.js"],
      highlights: ["Token Launch", "Smart Contracts", "Solana Development"],
      github: "#",
      demo: "#"
    },
    {
      title: "Cloud Wallet (Node.js)",
      period: "2024",
      category: "Web3 & Backend",
      icon: <Server className="text-blue-600" size={24} />,
      description: "Created a cloud-based wallet solution using Node.js with secure server-side key management, API endpoints for wallet operations, and integration with multiple blockchain networks.",
      keyFeatures: [
        "Server-side wallet management",
        "Multi-blockchain support",
        "RESTful API for wallet operations",
        "Secure key storage and encryption",
        "Transaction broadcasting and monitoring"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "Web3.js", "Encryption Libraries"],
      highlights: ["Cloud Infrastructure", "API Development", "Security"],
      github: "#",
      demo: "#"
    },
    {
      title: "BonkBot on SOL",
      period: "2024",
      category: "Web3 & Automation",
      icon: <Zap className="text-blue-600" size={24} />,
      description: "Developed an automated trading bot for Bonk token on Solana blockchain. Features automated buy/sell logic, price monitoring, and risk management strategies for cryptocurrency trading.",
      keyFeatures: [
        "Automated trading algorithms",
        "Real-time price monitoring",
        "Risk management and stop-loss features",
        "Integration with Solana DEXs",
        "Performance analytics and reporting"
      ],
      technologies: ["Node.js", "Solana Web3.js", "Jupiter API", "WebSocket", "Trading Algorithms"],
      highlights: ["Trading Automation", "DeFi Integration", "Algorithm Development"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A showcase of my recent work spanning AI integration, full-stack development, and innovative web applications
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                      <Calendar size={14} />
                      {project.period}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
              
              {/* Key Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <Star className="text-blue-600 mt-0.5 flex-shrink-0" size={12} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Highlights */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm"
                >
                  <Github size={16} />
                  View Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Projects Note */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 inline-block">
            <p className="text-gray-700 mb-4">
              <strong>Specialized in:</strong> Full-stack web development, AI integration, blockchain applications, 
              and modern JavaScript frameworks. All projects focus on scalable architecture and user experience.
            </p>
            <a 
              href="https://github.com/Lovjeet1233" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <Github size={16} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;