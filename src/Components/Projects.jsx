import { Github, Eye, Star, Calendar, ArrowUpRight } from 'lucide-react';
import f2f_logo from '../assets/images/f2f_logo.jpg';
import progressive_logo from '../assets/images/progressive_logo.png';
import portfolio_logo from '../assets/images/portfolio_logo.jpeg';
import docusync_logo from '../assets/images/docusync_logo.png';

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Farm2Fresh",
      category: "Web Development",
      image: f2f_logo,
      liveLink: "https://farm2fresh-omega.vercel.app/",
      githubLink: "https://github.com/HARSHIT05060/Farm2Fresh",
      message:
        "A full-stack e-commerce platform connecting local farmers directly to consumers. Features include product listings, shopping cart, online payments, and an admin dashboard.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "MUI"],
      featured: true,
      date: "Dec 2024",
    },
    {
      id: 2,
      title: "Progressive CCTV",
      category: "Web Development",
      image: progressive_logo,
      liveLink: "https://progressive-delta.vercel.app/",
      githubLink: "https://github.com/HARSHIT05060/Progressive",
      message:
        "A smart surveillance system that streams live CCTV footage and stores essential moments using intelligent filters. Includes role-based access and real-time analytics.",
      technologies: ["React", "MUI", "Tailwind CSS",],
      featured: true,
      date: "May 2025",
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Web Development",
      image: portfolio_logo,
      liveLink: "https://harshit-kapadia-portfolio.vercel.app/", // Replace with actual link if available
      githubLink: "https://github.com/HARSHIT05060/Portfolio",
      message:
        "A personal portfolio website to showcase my projects, skills, and resume. Features responsive design, dark/light mode, and animated transitions.",
      technologies: ["React", "MUI", "Tailwind CSS",],
      featured: true,
      date: "Jan 2025",
    },
    {
      id: 4,
      title: "DocuSync",
      category: "Web Development",
      image: docusync_logo,
      liveLink: "",
      githubLink: "",
      message:
        "A collaborative document editing platform with real-time synchronization, version control, and multi-user editing features.",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
      featured: false,
      date: "Oct 2023",
    },
  ];


  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-16">
        <h2 className="text-rose-500 font-medium uppercase tracking-wide">PORTFOLIO WORKS</h2>
        <h1 className="text-5xl font-bold mt-2 mb-4 text-gray-800">Recent Projects</h1>
        <div className="w-24 h-1 mx-auto bg-rose-500 rounded mb-8"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore my latest projects showcasing my skills in web development and design.
          Each project demonstrates different technologies and problem-solving approaches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 flex flex-col h-full transform hover:-translate-y-2">
      {/* Image Header with Overlay */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Date Badge */}
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-700 px-3 py-1 text-xs font-medium rounded-full z-10 flex items-center shadow-sm">
          <Calendar size={14} className="mr-1" />
          {project.date}
        </div>

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 text-xs font-medium rounded-full z-10 shadow-sm">
          {project.category}
        </span>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute bottom-4 right-4 bg-yellow-500 text-white px-3 py-1 text-xs font-medium rounded-full z-10 flex items-center shadow-sm">
            <Star size={14} className="mr-1" />
            Featured
          </div>
        )}

        {/* Gradient Overlay - Always visible but more intense on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Project Title */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-rose-500 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-600 mb-4 flex-grow">
          {project.message}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg transition-all duration-300 flex-1 font-medium shadow-sm hover:shadow-md text-sm"
          >
            <Eye size={16} />
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-all duration-300 flex-1 font-medium shadow-sm hover:shadow-md text-sm"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>

      {/* Footer - Link to more details */}
      <div className="border-t border-gray-100 px-6 py-3">
        <a
          href="#"
          className="flex items-center justify-between text-gray-500 hover:text-rose-500 text-sm font-medium transition-colors duration-300"
        >
          <span>View case study</span>
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}