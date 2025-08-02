import { Github, Linkedin, Mail, Brain, Code, Database, BarChart3 } from 'lucide-react';

export const mockData = {
  name: "Priyansh Srivastava",
  taglines: [
    "Freelance Data Scientist",
    "AI Engineer", 
    "Full-stack Developer",
    "Machine Learning Expert"
  ],
  
  skills: [
    "python",
    "data pre processing", 
    "javascript",
    "machine learning",
    "generative ai",
    "gemini",
    "agentic ai",
    "interactive dashboard making",
    "data story telling",
    "mysql",
    "prompt engineering",
    "vertex ai",
    "cursor ai"
  ],

  highlights: [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Expertise",
      description: "Specialized in Generative AI, Gemini AI, and Agentic Systems"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development", 
      description: "Python, JavaScript, and modern web technologies"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Processing",
      description: "Expert in data preprocessing, MySQL, and data pipeline creation"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Storytelling",
      description: "Interactive dashboards and compelling data visualizations"
    }
  ],

  achievements: [
    {
      title: "Build Real World AI Applications with Gemini and Imagen",
      issuer: "Google Cloud",
      date: "2025",
      image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=400&h=300&fit=crop&auto=format",
      description: "Machine Learning & AI - Skill Badge (Introductory level certification)"
    },
    {
      title: "Prompt Design in Vertex AI",
      issuer: "Google Cloud", 
      date: "2025",
      image: "https://images.unsplash.com/photo-1516110833967-0b5716ca75e1?w=400&h=300&fit=crop&auto=format",
      description: "Machine Learning & AI - Skill Badge (Introductory level certification)"
    },
    {
      title: "Building with Llama 4",
      issuer: "Meta",
      date: "2025",
      image: "https://images.unsplash.com/photo-1525373612132-b3e820b57ba8?w=400&h=300&fit=crop&auto=format", 
      description: "Short Course - Building multimodal and long-context GenAI applications using Llama 4 open models, API, and Llama tools"
    }
  ],

  projects: [
    {
      title: "Resume Analyzer AI",
      description: "An intelligent resume analysis system powered by Gemini AI that provides comprehensive feedback, skill gap analysis, and improvement recommendations. Features include ATS score calculation, keyword optimization, and personalized career suggestions.",
      tags: ["Gemini AI", "Python", "NLP", "Machine Learning"],
      githubUrl: "https://github.com/Priyansh-rath18/AI-based-projects",
      demoUrl: "https://github.com/Priyansh-rath18/AI-based-projects"
    },
    {
      title: "AI Projects Collection", 
      description: "A comprehensive collection of cutting-edge AI projects showcasing expertise in machine learning, generative AI, and data science. Includes projects on natural language processing, computer vision, and intelligent automation systems.",
      tags: ["AI", "Machine Learning", "Python", "Data Science"],
      githubUrl: "https://github.com/Priyansh-rath18/AI-based-projects",
      demoUrl: "https://github.com/Priyansh-rath18/AI-based-projects"
    }
  ],

  githubProfile: "https://github.com/Priyansh-rath18",

  social: [
    {
      platform: "LinkedIn",
      handle: "@priyansh-srivastava",
      url: "https://www.linkedin.com/in/priyansh-srivastava-1b47292aa/",
      icon: <Linkedin className="w-6 h-6" />
    },
    {
      platform: "GitHub", 
      handle: "@Priyansh-rath18",
      url: "https://github.com/Priyansh-rath18",
      icon: <Github className="w-6 h-6" />
    },
    {
      platform: "Email",
      handle: "rathtweets10@gmail.com", 
      url: "mailto:rathtweets10@gmail.com",
      icon: <Mail className="w-6 h-6" />
    }
  ]
};