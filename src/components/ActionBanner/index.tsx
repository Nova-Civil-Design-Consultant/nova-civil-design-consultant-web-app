import { useState, useEffect } from "react";
import banner2 from "../../assets/images/banner2.png";
import Button from "../Button";
import constants from "../../constants/index.json";

const ActionBanner = () => {
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

    const element = document.getElementById('action-banner-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Project Consultation Request");
    const body = encodeURIComponent("Hello Nova Civil Design Team,\n\nI'm interested in discussing a potential project with your team. Please let me know your availability for a consultation.\n\nThank you!");
    window.location.href = `mailto:${constants?.document?.Action_Banner_Component?.email_id}?subject=${subject}&body=${body}`;
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919810311810";
  };

  return (
    <section 
      id="action-banner-section"
      className="w-full lg:py-32 py-20 relative overflow-hidden"
    >
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <img
          src={banner2}
          alt="Nova Civil Design Action Banner"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/60 to-secondary/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-primary/10"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-custom"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-accent2/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-5xl h-full min-h-[600px] flex items-center justify-center">
        <div className={`text-center space-y-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          {/* Main Heading */}
          <div className="space-y-6">
            <h2 className="text-white font-Fira font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight max-w-4xl mx-auto">
              {constants?.document?.Action_Banner_Component?.banner_question}
            </h2>
            
            {/* Decorative elements */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
            </div>
          </div>

          {/* Subtitle */}
          <p className={`text-white/90 font-Urbanist text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
            {constants?.document?.Action_Banner_Component?.banner_subheading || "Get in touch with Nova Civil Design & Consultant today to start your next project."}
          </p>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            {/* Primary CTA */}
            <Button 
              whiteButton 
              size="lg"
              className="shadow-2xl hover:shadow-glow transform hover:scale-105 transition-all duration-300"
              onClick={handleEmailClick}
            >
              {constants?.document?.Action_Banner_Component?.get_in_touch_button}
            </Button>

            {/* Secondary CTA */}
            <button
              onClick={handleCallClick}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl glass text-white font-Urbanist font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 transform"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </button>
          </div>

          {/* Contact Information */}
          <div className={`pt-8 space-y-4 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.9s'}}>
            <div className="glass rounded-2xl p-6 max-w-md mx-auto">
              <div className="space-y-3 text-white/90">
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-Urbanist text-sm">{constants?.document?.Action_Banner_Component?.email_id}</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-Urbanist text-sm">+91 9810311810</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </section>
  );
};

export default ActionBanner;
