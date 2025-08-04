import { useState } from "react";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import SectionHeader from "../SectionHeader";
import Button from "../Button";
import constants from "../../constants/index.json";

const Projects = () => {
  const [categories, setCategories] = useState(constants?.document?.Projects_Component?.project_type_title);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    { 
      title: "Jaguare garment industry", 
      image: p1,
      category: "Industry",
      description: "Modern industrial facility with sustainable design",
      location: "Mumbai, India"
    },
    { 
      title: "Outbox creatives building", 
      image: p2,
      category: "Buildings",
      description: "Contemporary office space with creative elements",
      location: "Bangalore, India"
    },
    { 
      title: "Slova private residence", 
      image: p3,
      category: "Interior & Exterior",
      description: "Luxury residential project with modern amenities",
      location: "Delhi, India"
    },
  ];

  const handleClick = (title: string) => {
    setCategories((prev) =>
      prev.map((item) =>
        item.title === title
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
  };

  return (
    <section className="w-full py-20 lg:py-32 particles-bg">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="flex justify-center animate-fadeInUp">
            <SectionHeader
              title={constants?.document?.Projects_Component?.title}
              description={constants?.document?.Projects_Component?.description}
              centered
            />
          </div>

          {/* Sub Description */}
          <div className="text-center animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <p className="text-lightText font-Urbanist text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
              {constants?.document?.Projects_Component?.sub_description}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            {categories.map((item, index) => (
              <button
                key={item.title}
                onClick={() => handleClick(item.title)}
                className={`
                  px-6 py-3 rounded-full font-Urbanist font-semibold text-lg transition-all duration-300
                  whitespace-nowrap hover:scale-105 transform
                  ${item.active 
                    ? "bg-gradient-primary text-white shadow-glow" 
                    : "glass text-secondary hover:text-primary hover:shadow-medium"
                  }
                `}
                style={{animationDelay: `${0.4 + index * 0.1}s`}}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* View All Button - Mobile */}
          <div className="flex lg:hidden justify-center animate-fadeInUp" style={{animationDelay: '0.5s'}}>
            <Button
              transparentButton
              onClick={() => console.log("View all projects")}
            >
              {constants?.document?.Projects_Component?.view_all_button}
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`
                  group cursor-pointer space-y-4 lg:space-y-6 animate-fadeInUp hover-lift
                  ${hoveredProject === index ? 'scale-105' : ''}
                `}
                style={{animationDelay: `${0.6 + index * 0.2}s`}}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-3xl glass">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 text-sm mb-2">
                        <span className="px-3 py-1 bg-primary rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-sm opacity-90">{project.description}</p>
                    </div>
                  </div>

                  {/* View Project Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-large hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-3">
                  <h3 className="text-secondary font-Fira font-bold text-xl lg:text-2xl group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-lightText">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-Urbanist">{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button - Desktop */}
          <div className="hidden lg:flex justify-center animate-fadeInUp" style={{animationDelay: '1.2s'}}>
            <Button
              gradientButton
              glowEffect
              size="lg"
              onClick={() => console.log("View all projects")}
            >
              {constants?.document?.Projects_Component?.view_all_button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
