import React from 'react';
import { GraduationCap, Calendar, Award, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "8+", label: "Projects Completed", icon: <Award className="text-blue-600" size={24} /> },
    { number: "2+", label: "Years Experience", icon: <Calendar className="text-blue-600" size={24} /> }
    // { number: "1500+", label: "Students Coordinated", icon: <Users className="text-blue-600" size={24} /> },
    // { number: "3", label: "Major Courses", icon: <GraduationCap className="text-blue-600" size={24} /> }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate Full-Stack Developer currently pursuing my BTech at 
                <span className="font-semibold text-blue-600"> Indian Institute of Technology Roorkee</span>. 
                With a strong foundation in modern web technologies and emerging fields like AI and blockchain, 
                I specialize in building scalable, user-centric applications.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                My journey spans comprehensive coursework in Data Structures & Algorithms, Database Management Systems, 
                and Software Engineering, complemented by hands-on experience through internships and personal projects. 
                I've successfully completed advanced courses in both traditional web development and cutting-edge Web3 technologies.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Beyond coding, I serve as a Placement Coordinator at IIT Roorkee's Career Development Cell, 
                where I help connect over 1500 students with career opportunities, developing strong 
                communication and organizational skills alongside my technical expertise.
              </p>
            </div>
            
            {/* Education Card */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Bachelor of Technology
                  </h3>
                  <p className="text-blue-600 font-medium">Indian Institute of Technology Roorkee</p>
                  <p className="text-gray-600 text-sm mt-1">August 2022 - July 2026</p>
                  <p className="text-gray-700 text-sm mt-2">
                    Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, 
                    Database Management Systems, Operating Systems, Computer Networks, Software Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Course Completion Highlights */}
            {/* <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Completions</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Web Development (0-1):</strong> Complete foundational course</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Advanced Backend (1-100):</strong> System design & DevOps</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Web3 & Blockchain:</strong> Solidity, DeFi, Smart Contracts</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;