import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Lovjeet Singh
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Full-Stack Developer & Web3 Enthusiast passionate about creating innovative 
              solutions with modern technologies. Currently studying at IIT Roorkee.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Lovjeet1233" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/lovjeet-singh-iitr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:lovjeetsinghiitrfullstack@gmail.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Middle Column - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                About Me
              </button>
              <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Right Column - Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <div className="text-gray-300">
                <p className="font-medium">Email</p>
                <a 
                  href="mailto:lovjeetsinghiitrfullstack@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  lovjeetsinghiitrfullstack@gmail.com
                </a>
              </div>
              <div className="text-gray-300">
                <p className="font-medium">Location</p>
                <p>Roorkee, Uttarakhand, India</p>
              </div>
              <div className="text-gray-300">
                <p className="font-medium">Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-400">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400">
              <span>&copy; {currentYear} Lovjeet Singh. All rights reserved.</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="text-red-500" size={16} /> and lots of coffee
              </span>
            </div>
            
            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors text-sm"
            >
              <ArrowUp size={16} />
              Back to Top
            </button>
          </div>
        </div>
        
        {/* Technology Stack */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">This portfolio is built with</p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <span className="px-2 py-1 bg-gray-800 rounded text-gray-300">React</span>
              <span className="px-2 py-1 bg-gray-800 rounded text-gray-300">Tailwind CSS</span>
              <span className="px-2 py-1 bg-gray-800 rounded text-gray-300">Lucide Icons</span>
              <span className="px-2 py-1 bg-gray-800 rounded text-gray-300">Modern Web Standards</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;