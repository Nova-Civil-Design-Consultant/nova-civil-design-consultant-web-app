import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import constants from '../../constants/index.json';

interface ProjectData {
  projectName: string;
  projectLocation: string;
  clientName: string;
  projectDetails: string;
  projectPhotos: string[];
  projectVideos: string[];
}

const ProjectDetails: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});
  
  // Using project data from constants, with fallback
  const project: ProjectData = constants?.document?.Projects_Component?.project_Details || {
    projectName: "Jaguare Garment Industry",
    projectLocation: "New York, USA", 
    clientName: "Jaguare Inc.",
    projectDetails: "This project involved the design and construction of a garment industry facility.",
    projectPhotos: [
      "https://example.com/project1.jpg",
      "https://example.com/project2.jpg", 
      "https://example.com/project3.jpg"
    ],
    projectVideos: [
      "https://example.com/project1.mp4",
      "https://example.com/project2.mp4"
    ]
  };

  const { projectName, projectLocation, clientName, projectDetails, projectPhotos, projectVideos } = project;

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20">
      {/* Header Section */}
      <div className="space-y-8 mb-16 animate-fadeInUp">
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-Fira font-bold gradient-text">
            {projectName}
          </h1>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto"></div>
        </div>

        {/* Project Meta Information */}
        <div className="grid md:grid-cols-2 gap-8 p-8 glass rounded-3xl animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-lightText font-Urbanist font-medium">Project Location</p>
                <p className="text-xl text-secondary font-Fira font-semibold">{projectLocation}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-lightText font-Urbanist font-medium">Client Name</p>
                <p className="text-xl text-secondary font-Fira font-semibold">{clientName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="space-y-8 mb-16 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
        <div className="space-y-4">
          <h2 className="text-2xl lg:text-3xl font-Fira font-bold text-secondary">
            Project Overview
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
        </div>
        <div className="p-8 glass rounded-3xl">
          <p className="text-lg text-lightText font-Urbanist leading-relaxed">
            {projectDetails}
          </p>
        </div>
      </div>

      {/* Project Photos */}
      <div className="space-y-8 mb-16 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
        <div className="space-y-4">
          <h2 className="text-2xl lg:text-3xl font-Fira font-bold text-secondary">
            Project Gallery
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
        </div>
        
        <div className="glass rounded-3xl p-8 hover-lift">
          <Carousel
            showArrows={true}
            showStatus={true}
            showThumbs={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            className="custom-carousel"
          >
            {projectPhotos.map((photo, index) => (
              <div key={index} className="relative">
                <div className={`transition-opacity duration-500 ${imageLoaded[index] ? 'opacity-100' : 'opacity-0'}`}>
                  <img 
                    src={photo} 
                    alt={`${projectName} Photo ${index + 1}`}
                    className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
                    onLoad={() => handleImageLoad(index)}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/800x500/f0a500/ffffff?text=Project+Image';
                    }}
                  />
                </div>
                {!imageLoaded[index] && (
                  <div className="absolute inset-0 bg-gray-200 rounded-2xl flex items-center justify-center">
                    <div className="animate-shimmer w-full h-full rounded-2xl"></div>
                  </div>
                )}
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Project Videos */}
      <div className="space-y-8 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
        <div className="space-y-4">
          <h2 className="text-2xl lg:text-3xl font-Fira font-bold text-secondary">
            Project Videos
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projectVideos.map((video, index) => (
            <div key={index} className="glass rounded-3xl p-6 hover-lift">
              <div className="relative group">
                <video 
                  src={video} 
                  controls 
                  className="w-full rounded-2xl shadow-large"
                  poster="https://via.placeholder.com/800x450/f0a500/ffffff?text=Video+Thumbnail"
                  onError={(e) => {
                    const target = e.target as HTMLVideoElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
                          <div class="text-center space-y-2">
                            <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p class="text-gray-500">Video unavailable</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
                
                {/* Play button overlay for better UX */}
                <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-large">
                    <svg className="w-8 h-8 text-secondary ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="font-Fira font-semibold text-lg text-secondary">
                  Project Video {index + 1}
                </h3>
                <p className="text-lightText font-Urbanist text-sm mt-1">
                  {projectName} - Construction Progress
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 p-8 glass rounded-3xl animate-fadeInUp" style={{animationDelay: '1s'}}>
        <h3 className="text-2xl font-Fira font-bold text-secondary mb-4">
          Interested in a Similar Project?
        </h3>
        <p className="text-lightText font-Urbanist text-lg mb-6 max-w-2xl mx-auto">
          Contact Nova Civil Design & Consultant to discuss your project requirements and get a personalized consultation.
        </p>
        <button 
          onClick={() => window.location.href = 'mailto:ehsanmohd66@gmail.com?subject=Project Consultation Request'}
          className="px-8 py-4 bg-gradient-primary text-white font-Urbanist font-semibold text-lg rounded-2xl hover:scale-105 transition-transform duration-300 shadow-large hover:shadow-glow"
        >
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;

