import { useState } from "react";
import aboutImage from "../../assets/images/aboutImage.png";
import aboutVideo from "../../assets/images/aboutVideo.png";
import abstractTwo from "../../assets/images/abstract-two.svg";
import Button from "../Button";
import SectionHeader from "../SectionHeader";
import constants from "../../constants/index.json";

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="w-full py-20 lg:py-32 relative particles-bg overflow-hidden">
      {/* Background Decorations */}
      <img
        src={abstractTwo}
        alt="abstractTwo"
        className="absolute top-0 left-0 z-0 lg:block hidden opacity-30 animate-float"
      />
      
      {/* Floating shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse-custom"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="flex justify-center animate-fadeInUp">
            <SectionHeader
              title={constants?.document?.About_Component?.title}
              description={constants?.document?.About_Component?.description}
              centered
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Image Section */}
            <div className="space-y-8 animate-fadeInLeft">
              <div className="relative group">
                {/* Main Image Container */}
                <div className="relative glass rounded-3xl p-4 hover-lift overflow-hidden">
                  <img
                    src={aboutImage}
                    alt="About Nova Civil Design"
                    className={`
                      w-full h-auto rounded-2xl shadow-large transition-all duration-700
                      ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                    `}
                    onLoad={() => setImageLoaded(true)}
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-4 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 glass rounded-2xl p-6 animate-bounceIn" style={{animationDelay: '0.5s'}}>
                  <div className="text-center space-y-1">
                    <div className="text-3xl font-bold gradient-text">5+</div>
                    <div className="text-xs text-secondary font-medium">Years</div>
                  </div>
                </div>
              </div>

              {/* Video Section */}
              <div className="relative group">
                <div className="glass rounded-2xl overflow-hidden hover-lift">
                  <img
                    src={aboutVideo}
                    alt="About Video Thumbnail"
                    className="w-full h-auto"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-large">
                      <div className="w-0 h-0 border-l-[12px] border-l-secondary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8 animate-fadeInRight" style={{animationDelay: '0.3s'}}>
              <div className="space-y-6">
                <h3 className="font-Urbanist font-bold text-2xl lg:text-3xl text-secondary leading-tight">
                  {constants?.document?.About_Component?.first_heading}
                </h3>
                
                <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
                
                <p className="font-Urbanist text-lg text-lightText leading-relaxed">
                  {constants?.document?.About_Component?.second_sub_heading}
                </p>
              </div>

              {/* Key Features */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: "Expert Team", value: "Certified professionals with years of experience" },
                  { label: "Quality Assurance", value: "100% satisfaction guaranteed on all projects" },
                  { label: "Modern Technology", value: "Latest tools and software for precision" },
                  { label: "Timely Delivery", value: "Projects completed on schedule, every time" }
                ].map((item, index) => (
                  <div 
                    key={item.label}
                    className="p-4 glass rounded-xl hover-lift"
                    style={{animationDelay: `${0.5 + index * 0.1}s`}}
                  >
                    <h4 className="font-semibold text-secondary mb-2">{item.label}</h4>
                    <p className="text-sm text-lightText leading-relaxed">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Button 
                  gradientButton 
                  glowEffect 
                  size="lg"
                  className="shadow-large"
                >
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
