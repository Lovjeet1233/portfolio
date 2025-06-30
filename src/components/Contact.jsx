import React from 'react';
import { Mail, MapPin, Linkedin, Github, Send, Phone, Calendar, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email",
      value: "lovjeetsinghiitrfullstack@gmail.com",
      link: "mailto:lovjeetsinghiitrfullstack@gmail.com"
    },
    {
      icon: <MapPin className="text-blue-600" size={24} />,
      title: "Location",
      value: "Roorkee, Uttarakhand, India",
      link: null
    },
    {
      icon: <Linkedin className="text-blue-600" size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/lovjeet-singh-iitr",
      link: "https://www.linkedin.com/in/lovjeet-singh-iitr"
    },
    {
      icon: <Github className="text-blue-600" size={24} />,
      title: "GitHub",
      value: "github.com/Lovjeet1233",
      link: "https://github.com/Lovjeet1233"
    }
  ];

  const stats = [
    { number: "8+", label: "Projects", icon: <Calendar className="text-blue-600" size={20} /> },
    { number: "2+", label: "Years Experience", icon: <MessageCircle className="text-blue-600" size={20} /> }
    // { number: "1500+", label: "Students Coordinated", icon: <Phone className="text-blue-600" size={20} /> },
    // { number: "100%", label: "Client Satisfaction", icon: <Send className="text-blue-600" size={20} /> }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Ready to collaborate on your next project or discuss opportunities? Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Get In Touch</h3>
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg flex-shrink-0">{info.icon}</div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Current Availability</h3>
              <p className="text-gray-700 mb-4">
                I'm currently open to new opportunities and interesting projects.
                Whether it's a full-time position, internship, or freelance work,
                I'd love to hear from you!
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-700">Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Send Me a Message</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Project collaboration, job opportunity, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                ></textarea>
              </div>

              <button
                type="button"
                onClick={() => window.open('mailto:lovjeetsinghiitrfullstack@gmail.com', '_blank')}
                className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                <Send size={20} />
                Send Message
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">Usually responds within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Work Together?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            I'm passionate about creating innovative solutions and always excited to work on challenging projects.
            Let's discuss how we can bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lovjeetsinghiitrfullstack@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              <Mail size={20} />
              Email Me Directly
            </a>
            <a
              href="https://www.linkedin.com/in/lovjeet-singh-iitr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
