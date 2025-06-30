import React from 'react';
import { 
  Code, Server, Database, Cloud, Smartphone, Globe, 
  Layers, Shield, Zap, Terminal, GitBranch, Cpu 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Core",
      icon: <Code className="text-blue-600" size={24} />,
      skills: ["JavaScript", "TypeScript", "C++ (DSA)", "Node.js", "HTML5", "CSS3"]
    },
    {
      title: "Frontend Frameworks",
      icon: <Smartphone className="text-blue-600" size={24} />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "ShadCN/UI", "Responsive Design", "Dashboard Development"]
    },
    {
      title: "Backend & APIs",
      icon: <Server className="text-blue-600" size={24} />,
      skills: ["Express.js", "RESTful APIs", "API Development & Optimization", "Third-Party API Integration", "Scalable Backend Architecture"]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="text-blue-600" size={24} />,
      skills: ["MongoDB", "PostgreSQL", "NeonDB", "Supabase", "Prisma ORM", "Vector Databases"]
    },
    {
      title: "Authentication & Security",
      icon: <Shield className="text-blue-600" size={24} />,
      skills: ["JWT", "Clerk Authentication", "OAuth", "Role-based Authentication", "Security Best Practices"]
    },
    {
      title: "Real-time & Communication",
      icon: <Zap className="text-blue-600" size={24} />,
      skills: ["Socket.io", "Real-Time Data Processing", "Twilio", "SMS Integration", "WebRTC Basics"]
    },
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="text-blue-600" size={24} />,
      skills: ["Google Gemini AI", "RAG Applications", "Chatbot Development", "Vector Databases", "AI Integration"]
    },
    {
      title: "Payment & Services",
      icon: <Globe className="text-blue-600" size={24} />,
      skills: ["Stripe", "Payment Integration", "Inngest", "Appwrite", "File Upload Systems"]
    },
    {
      title: "Cloud & Deployment",
      icon: <Cloud className="text-blue-600" size={24} />,
      skills: ["AWS EC2", "Web Services Deployment", "Docker (Basic)", "Serverless Backends", "Cloud Platforms"]
    },
    {
      title: "Development Tools",
      icon: <GitBranch className="text-blue-600" size={24} />,
      skills: ["Git", "GitHub", "Sentry", "Monitoring", "Error Tracking", "Performance Optimization"]
    },
    {
      title: "System Design Concepts",
      icon: <Layers className="text-blue-600" size={24} />,
      skills: ["Scalable Architecture", "Load Balancing", "Database Design", "API Design", "Performance Optimization"]
    },
    {
      title: "Web3 & Blockchain",
      icon: <Terminal className="text-blue-600" size={24} />,
      skills: ["Solidity", "Smart Contracts", "Ethereum", "Web3.js", "DeFi", "Blockchain Development", "Crypto Wallets"]
    }
  ];

  // Completed course content based on syllabus
  const completedCourses = [
    {
      title: "Web Development (0-1)",
      description: "Complete foundational course covering modern web development",
      topics: [
        "JavaScript fundamentals & async programming",
        "Node.js runtime and backend development", 
        "MongoDB & PostgreSQL databases",
        "TypeScript beginner to advance",
        "Express.js basic to advance",
        "React.js with state management",
        "Authentication systems",
        "Deployment and scaling"
      ]
    },
    {
      title: "Advanced Backend (1-100)", 
      description: "System design, DevOps, and advanced backend concepts",
      topics: [
        "Advanced backend communication",
        "Message queues and PubSubs",
        "Redis and caching strategies",
        "Database optimization & indexing",
        "Load balancers and proxies",
        "Monitoring systems (Prometheus, Grafana)",
        "Docker and containerization",
        "CI/CD pipelines"
      ]
    },
    {
      title: "Web3 & Blockchain",
      description: "Comprehensive blockchain and decentralized application development",
      topics: [
        "Blockchain fundamentals",
        "Solidity smart contract development",
        "Ethereum and EVM architecture",
        "DeFi protocols and mechanisms",
        "Wallet integration and management", 
        "Web3.js and blockchain interaction",
        "Crypto payment gateways",
        "Decentralized application architecture"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive skill set spanning modern web development, AI integration, blockchain technologies, and system design
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Course Completions */}
        {/* <div className="bg-white p-8 rounded-lg border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Completed Comprehensive Courses</h3>
            <p className="text-gray-600">
              Intensive training programs covering full-stack development, system design, and blockchain technologies
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {completedCourses.map((course, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-800 text-sm">Key Topics Covered:</h5>
                  <ul className="space-y-1">
                    {course.topics.slice(0, 6).map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{topic}</span>
                      </li>
                    ))}
                    {course.topics.length > 6 && (
                      <li className="text-xs text-gray-500 italic">
                        +{course.topics.length - 6} more topics...
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        
        {/* Key Strengths */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Code className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Full-Stack Development</h4>
              <p className="text-sm text-gray-600">End-to-end application development with modern technologies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Cpu className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI Integration</h4>
              <p className="text-sm text-gray-600">RAG applications, chatbots, and AI-powered features</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Blockchain Development</h4>
              <p className="text-sm text-gray-600">Smart contracts, DeFi, and decentralized applications</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Layers className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">System Design</h4>
              <p className="text-sm text-gray-600">Scalable architecture and performance optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;