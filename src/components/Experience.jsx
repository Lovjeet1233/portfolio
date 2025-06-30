import React from 'react';
import { MapPin, Calendar, Briefcase, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Jobsforce.ai",
      role: "Full Stack Developer Intern",
      location: "Remote, San Francisco",
      period: "Apr 2024 – May 2024",
      type: "Internship",
      description: [
        "Optimized backend API endpoints and integrated third-party services to enhance system performance and functionality",
        "Developed RAG (Retrieval-Augmented Generation) application chatbot leveraging vector database technology for intelligent query processing",
        "Designed and implemented responsive dashboard interfaces using Tailwind CSS, improving user experience and interface accessibility",
        "Collaborated on full-stack development projects spanning backend optimization and frontend user interface design"
      ],
      technologies: ["Next.js", "React", "Vector Databases", "RAG", "Tailwind CSS", "API Integration", "Chatbot Development"]
    },
    {
      company: "Zephyr Sample",
      role: "Full Stack Developer Intern",
      location: "Remote, Atlanta",
      period: "Apr 2024 – Jun 2024",
      type: "Internship",
      description: [
        "Built comprehensive project and API management platform serving clients, suppliers, and administrative users",
        "Developed real-time survey tracking system managing 1000+ active clients and suppliers across 80+ vendor partnerships",
        "Engineered scalable backend architecture and intuitive frontend interfaces for multi-user project management workflows",
        "Implemented real-time data processing capabilities to support dynamic survey project creation and monitoring"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "Real-time Processing", "Multi-user Systems", "Survey Management"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A journey through diverse roles spanning software development, AI integration, and leadership positions
          </p>
        </div>
        
        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="text-blue-600" size={20} />
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                  <div className="text-lg font-semibold text-blue-600 mb-1">{exp.company}</div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities & Achievements:</h4>
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <ChevronRight className="text-blue-600 mt-0.5 flex-shrink-0" size={16} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Technologies & Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;