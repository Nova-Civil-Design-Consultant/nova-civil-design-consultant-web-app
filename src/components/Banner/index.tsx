import { useState, useEffect } from "react";
import banner1 from "../../assets/images/banner1.png";
import comma from "../../assets/images/comma.png";
import constants from "../../constants/index.json";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('banner-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="banner-section"
      className="w-full lg:py-32 py-20 relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={banner1}
          alt="Nova Civil Design Banner"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-pulse-custom"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-6xl h-full min-h-[600px] flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
          {/* Quote Icon */}
          <div className={`lg:col-span-2 flex justify-center lg:justify-start ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div className="relative">
              <img 
                src={comma} 
                alt="Quote" 
                className="w-16 h-16 lg:w-20 lg:h-20 opacity-80 animate-float"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className={`lg:col-span-10 space-y-8 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
            {/* Quote Text */}
            <blockquote className="space-y-6">
              <p className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-Urbanist font-bold leading-tight lg:leading-relaxed">
                "{constants?.document?.Banner_Component?.paragraph}"
              </p>
              
              {/* Decorative line */}
              <div className="w-24 h-1 bg-gradient-primary rounded-full"></div>
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-4 pt-4">
              <div className="w-1 h-12 bg-gradient-primary rounded-full"></div>
              <div className="space-y-1">
                <cite className="text-white/90 font-Fira text-lg lg:text-xl font-medium not-italic">
                  {constants?.document?.Banner_Component?.address}
                </cite>
                <div className="text-primary font-Urbanist text-sm uppercase tracking-wider">
                  Nova Civil Design & Consultant
                </div>
              </div>
            </div>

            {/* Stats or Features */}
            <div className={`grid sm:grid-cols-3 gap-6 pt-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
              {[
                { number: "50+", label: "Successful Projects" },
                { number: "5+", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center glass rounded-2xl p-6 hover-lift"
                  style={{animationDelay: `${0.8 + index * 0.2}s`}}
                >
                  <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80 font-Urbanist text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </section>
  );
};

export default Banner;
