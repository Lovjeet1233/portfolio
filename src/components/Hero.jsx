import React from 'react';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="space-y-6">
            {/* Main heading */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Lovjeet Singh
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-medium">
                Full-Stack Developer & Web3 Enthusiast
              </p>
            </div>
            
            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <MapPin size={18} />
              <span>Roorkee, Uttarakhand, India</span>
            </div>
            
            {/* Description */}
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Passionate Full-Stack Developer studying at <span className="font-semibold text-blue-600">IIT Roorkee</span>, 
                specializing in AI-driven applications, blockchain development, and scalable web solutions. 
                Experienced in modern technologies with a focus on creating innovative digital experiences.
              </p>
            </div>
            
            {/* Skills tags */}
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {['Next.js', 'React', 'Node.js', 'AI Integration', 'Blockchain', 'System Design'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/80 border border-blue-200 rounded-full text-sm font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                <Download size={20} />
                Download Resume
              </button>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Lovjeet1233" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <Github size={20} className="text-gray-600" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/lovjeet-singh-iitr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <Linkedin size={20} className="text-gray-600" />
                </a>
                <a 
                  href="mailto:lovjeetsinghiitrfullstack@gmail.com"
                  className="p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <Mail size={20} className="text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;