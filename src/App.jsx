import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Code, Brain, Globe, Zap } from 'lucide-react';

// Loading Screen Component with Beautiful Illustration
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showIllustration, setShowIllustration] = useState(0);
  
  const textSequence = [
    'Loading Lovjeet Singh...',
    'Full-Stack Developer',
    'Web3 Enthusiast',
    'AI Integration Specialist',
    'Welcome to My Portfolio!'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const textIndex = Math.floor((progress / 100) * textSequence.length);
    if (textIndex < textSequence.length) {
      setCurrentText(textSequence[textIndex]);
      setShowIllustration(textIndex);
    }
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center z-50">
      <div className="text-center max-w-lg mx-auto px-4">
        {/* Beautiful Illustration Area */}
        <div className="mb-8 relative">
          {/* Animated Background Circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-ping"></div>
            <div className="w-24 h-24 bg-indigo-300 rounded-full opacity-30 animate-ping animation-delay-500 absolute"></div>
            <div className="w-16 h-16 bg-purple-400 rounded-full opacity-40 animate-ping animation-delay-1000 absolute"></div>
          </div>
          
          {/* Main Illustration - Changes based on text sequence */}
          <div className="relative z-10 w-24 h-24 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-blue-100">
            {showIllustration === 0 && (
              <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            )}
            {showIllustration === 1 && (
              <Code className="text-blue-600 animate-pulse" size={32} />
            )}
            {showIllustration === 2 && (
              <Globe className="text-indigo-600 animate-bounce" size={32} />
            )}
            {showIllustration === 3 && (
              <Brain className="text-purple-600 animate-pulse" size={32} />
            )}
            {showIllustration === 4 && (
              <Zap className="text-yellow-500 animate-bounce" size={32} />
            )}
          </div>
          
          {/* Floating Tech Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-4 left-4 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center animate-float opacity-60">
              <span className="text-xs font-bold text-blue-600">JS</span>
            </div>
            <div className="absolute top-8 right-6 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center animate-float-delayed opacity-60">
              <span className="text-xs font-bold text-green-600">⚛️</span>
            </div>
            <div className="absolute bottom-6 left-8 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center animate-float opacity-60">
              <span className="text-xs font-bold text-purple-600">AI</span>
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center animate-float-delayed opacity-60">
              <span className="text-xs font-bold text-yellow-600">₿</span>
            </div>
          </div>
        </div>
        
        {/* Loading Text with Typing Effect */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 min-h-[2.5rem] flex items-center justify-center">
          <span className="animate-pulse">{currentText}</span>
          <span className="animate-ping ml-1">|</span>
        </h1>
        
        {/* Progress Bar */}
        <div className="w-72 bg-gray-200 rounded-full h-3 mx-auto mb-4 overflow-hidden shadow-inner">
          <div 
            className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
          </div>
        </div>
        
        {/* Progress Percentage */}
        <p className="text-gray-600 font-medium">{Math.round(progress)}%</p>
        
        {/* Animated Dots */}
        <div className="flex justify-center space-x-1 mt-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce animation-delay-400"></div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Add scroll-based animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all scroll-animate elements after loading is complete
    if (!isLoading) {
      setTimeout(() => {
        const elements = document.querySelectorAll('.scroll-animate');
        elements.forEach(el => observer.observe(el));
      }, 100);
    }

    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-white">
      {/* Add Custom CSS Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-scaleX {
          animation: scaleX 0.8s ease-out forwards;
          transform-origin: left;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        /* Scroll animations */
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        
        .scroll-animate.animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Hover animations */
        .hover-lift {
          transition: all 0.3s ease-out;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .hover-scale:hover {
          transform: scale(1.05);
        }
        
        /* Custom gradient text */
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Smooth transitions for all interactive elements */
        button, a, .interactive {
          transition: all 0.3s ease-out;
        }
        
        /* Enhanced shadow effects */
        .shadow-glow {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.15);
        }
        
        .shadow-glow:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.25);
        }
      `}</style>

      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {/* Main Content - Only render after loading */}
      {!isLoading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;