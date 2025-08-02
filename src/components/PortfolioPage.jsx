import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Brain, Cpu, BarChart3, MessageSquare, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardHeader, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import ParticleBackground from './ParticleBackground';

import TypeWriter from './TypeWriter';
import GlitchLoader from './GlitchLoader';
import { mockData } from '../data/mockData';

const PortfolioPage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const achievementsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const skillsY = useTransform(scrollYProgress, [0.3, 0.7], [100, -100]);
  const achievementsY = useTransform(scrollYProgress, [0.4, 0.8], [80, -80]);
  const projectsY = useTransform(scrollYProgress, [0.6, 1], [50, -150]);

  // Skills icons mapping
  const skillIcons = {
    'python': <Code className="w-6 h-6" />,
    'data pre processing': <Database className="w-6 h-6" />,
    'javascript': <Code className="w-6 h-6" />,
    'machine learning': <Brain className="w-6 h-6" />,
    'generative ai': <Cpu className="w-6 h-6" />,
    'gemini': <Brain className="w-6 h-6" />,
    'agentic ai': <Cpu className="w-6 h-6" />,
    'interactive dashboard making': <BarChart3 className="w-6 h-6" />,
    'data story telling': <MessageSquare className="w-6 h-6" />,
    'mysql': <Database className="w-6 h-6" />
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [heroRef, aboutRef, skillsRef, achievementsRef, projectsRef, contactRef];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((ref, index) => {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          const offsetHeight = ref.current.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGlitchComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-x-hidden">
      <GlitchLoader isVisible={isLoading} onComplete={handleGlitchComplete} />
      
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/50 border-b border-blue-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {mockData.name}
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Achievements', 'Projects', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection([heroRef, aboutRef, skillsRef, achievementsRef, projectsRef, contactRef][index])}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                    currentSection === index 
                      ? 'text-blue-400 bg-blue-400/10' 
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Hi, I'm {mockData.name}
              </span>
            </h1>
            
            <div className="text-xl lg:text-2xl text-gray-300 mb-8 h-16">
              <TypeWriter 
                texts={[
                  "Freelance Data Scientist",
                  "AI Engineer", 
                  "Full-stack Developer",
                  "Machine Learning Expert"
                ]} 
                speed={100}
                delay={2000}
              />
            </div>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
              Transforming data into insights and building intelligent AI solutions. 
              Passionate about generative AI, agentic systems, and creating interactive dashboards that tell compelling data stories.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                onClick={() => scrollToSection(projectsRef)}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
                onClick={() => scrollToSection(contactRef)}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 border-blue-500/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    I'm a passionate Data Scientist and AI Engineer with expertise in machine learning, 
                    generative AI, and full-stack development. I specialize in transforming complex data 
                    into actionable insights and building intelligent systems that solve real-world problems.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    My journey in AI has led me to work with cutting-edge technologies like Gemini AI, 
                    create agentic AI systems, and develop interactive dashboards that bring data stories to life.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {mockData.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-slate-800/30 to-transparent border-l-4 border-blue-500"
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <div className="text-blue-400">{highlight.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white">{highlight.title}</h4>
                    <p className="text-gray-400 text-sm">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <motion.section 
        ref={skillsRef}
        style={{ y: skillsY }}
        className="py-20 relative"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockData.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="bg-gradient-to-br from-slate-800/60 to-blue-900/40 border-blue-500/30 backdrop-blur-sm hover:border-blue-400/60 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-blue-400 mb-4 flex justify-center">
                      {skillIcons[skill] || <Code className="w-6 h-6" />}
                    </div>
                    <h3 className="font-semibold text-white capitalize">{skill}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section 
        ref={achievementsRef}
        style={{ y: achievementsY }}
        className="py-20 relative"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Achievements & Recognition
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Professional achievements and skill badges that validate my expertise in AI, machine learning, and cutting-edge technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                  transition: { duration: 0.3 } 
                }}
              >
                <Card className="bg-gradient-to-br from-slate-800/60 to-blue-900/40 border-blue-500/30 backdrop-blur-sm hover:border-blue-400/60 transition-all duration-300 overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-500/80 text-white border-0">
                        <Award className="w-3 h-3 mr-1" />
                        {achievement.date}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">{achievement.title}</h3>
                    <p className="text-blue-400 font-semibold mb-3">{achievement.issuer}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        ref={projectsRef}
        style={{ y: projectsY }}
        className="py-20 relative"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Explore my AI projects and innovative solutions that showcase the power of machine learning and data science.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {mockData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="bg-gradient-to-br from-slate-800/60 to-blue-900/40 border-blue-500/30 backdrop-blur-sm hover:border-blue-400/60 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex space-x-2">
                        {project.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="secondary"
                            className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          onClick={() => window.open(project.demoUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              onClick={() => window.open(mockData.githubProfile, '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Ready to collaborate on your next AI project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {mockData.social.map((item, index) => (
              <motion.div
                key={item.platform}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="bg-gradient-to-br from-slate-800/60 to-blue-900/40 border-blue-500/30 backdrop-blur-sm hover:border-blue-400/60 transition-all duration-300 cursor-pointer"
                      onClick={() => item.url.startsWith('mailto:') ? window.location.href = item.url : window.open(item.url, '_blank')}>
                  <CardContent className="p-8 text-center">
                    <div className="text-blue-400 mb-4 flex justify-center text-3xl">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-white mb-2">{item.platform}</h3>
                    <p className="text-gray-400 text-sm">{item.handle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-blue-500/20 py-12">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-4">
              © 2025 {mockData.name}. Crafted with passion and powered by AI.
            </p>
            <p className="text-gray-500 text-sm">
              "The future belongs to those who learn more skills and combine them in creative ways." - Robert Greene
            </p>
          </motion.div>
        </div>
      </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage;