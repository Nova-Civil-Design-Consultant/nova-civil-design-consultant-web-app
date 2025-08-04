import {
  Call,
  Location,
  LogoFacebook,
  LogoInstagram,
  LogoLinkedin,
  LogoTwitter,
  Mail,
} from "react-ionicons";
import constants from "../../constants/index.json";
import novaLogo from "/nova-logo-compact.svg";
import Justdial_Logo from "../../assets/images/Justdial_Logo.svg";

const Footer = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const navigationSections = [
    { 
      id: 'home', 
      label: constants?.document?.Footer_Component?.home_titles?.first_title,
      isPrimary: true
    },
    { 
      id: 'features', 
      label: constants?.document?.Footer_Component?.home_titles?.second_title 
    },
    { 
      id: 'news', 
      label: constants?.document?.Footer_Component?.home_titles?.third_title 
    },
  ];

  const companyLinks = [
    { 
      id: 'about', 
      label: constants?.document?.Footer_Component?.location_titles?.second_title,
      isPrimary: true
    },
    { 
      id: 'action-banner', 
      label: constants?.document?.Footer_Component?.location_titles?.third_title 
    },
    { 
      id: 'action-banner', 
      label: constants?.document?.Footer_Component?.location_titles?.fourth_title 
    },
  ];

  const socialLinks = [
    {
      icon: LogoFacebook,
      url: constants?.document?.Navbar_Component?.social_media_handle?.facebook_handle,
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    {
      icon: LogoInstagram,
      url: constants?.document?.Navbar_Component?.social_media_handle?.instagram_handle,
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    {
      icon: LogoLinkedin,
      url: constants?.document?.Navbar_Component?.social_media_handle?.linkedin_handle,
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: LogoTwitter,
      url: constants?.document?.Navbar_Component?.social_media_handle?.x_handle,
      label: "Twitter",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6 animate-fadeInUp">
            <div className="space-y-4">
              <img 
                src={novaLogo} 
                alt="Nova Civil Design Logo" 
                className="h-12 lg:h-14 w-auto hover:scale-105 transition-transform duration-300"
              />
              <p className="font-Urbanist text-base lg:text-lg text-lightText leading-relaxed max-w-sm">
                {constants?.document?.Header_Component?.heading}
              </p>
            </div>
            
            {/* Rating and Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-lightText">4.9/5 Client Rating</span>
              </div>
              <div className="text-sm text-lightText">
                ✓ Certified Professionals • ✓ 5+ Years Experience
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <h3 className="text-secondary font-Fira font-bold text-xl mb-6">
              Navigation
            </h3>
            <nav className="space-y-4">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    block font-Urbanist text-lg transition-all duration-300 hover:translate-x-2
                    ${section.isPrimary 
                      ? "text-primary font-semibold" 
                      : "text-secondary hover:text-primary"
                    }
                  `}
                >
                  {section.label}
                </button>
              ))}
              <div className="text-secondary hover:text-primary font-Urbanist text-lg cursor-pointer transition-colors duration-300">
                {constants?.document?.Footer_Component?.home_titles?.fourth_title}
              </div>
              <div className="text-secondary hover:text-primary font-Urbanist text-lg cursor-pointer transition-colors duration-300">
                {constants?.document?.Footer_Component?.home_titles?.fifth_title}
              </div>
            </nav>
          </div>

          {/* Company Links */}
          <div className="space-y-6 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <h3 className="text-secondary font-Fira font-bold text-xl mb-6">
              Company
            </h3>
            <nav className="space-y-4">
              <div className="text-primary font-semibold font-Urbanist text-lg">
                {constants?.document?.Footer_Component?.location_titles?.first_title}
              </div>
              {companyLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`
                    block font-Urbanist text-lg transition-all duration-300 hover:translate-x-2
                    ${link.isPrimary 
                      ? "text-primary font-semibold" 
                      : "text-secondary hover:text-primary"
                    }
                  `}
                >
                  {link.label}
                </button>
              ))}
              <div className="text-secondary hover:text-primary font-Urbanist text-lg cursor-pointer transition-colors duration-300">
                {constants?.document?.Footer_Component?.location_titles?.fifth_title}
              </div>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <h3 className="text-secondary font-Fira font-bold text-xl mb-6">
              Get In Touch
            </h3>
            <div className="space-y-3">
              
              {/* Address */}
              <div className="flex items-start gap-3 p-3 lg:p-4 glass rounded-xl hover-lift">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <Location cssClasses="!fill-primary !text-primary w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                <div className="font-Urbanist text-sm lg:text-base text-secondary leading-relaxed">
                  {constants?.document?.Footer_Component?.contact_details?.address}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3 lg:p-4 glass rounded-xl hover-lift cursor-pointer"
                   onClick={() => window.location.href = `tel:${constants?.document?.Footer_Component?.contact_details?.phone_no}`}>
                <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                  <Call cssClasses="!fill-accent !text-accent w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                <div className="font-Urbanist text-sm lg:text-base text-secondary font-medium hover:text-accent transition-colors duration-300">
                  {constants?.document?.Footer_Component?.contact_details?.phone_no}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 p-3 lg:p-4 glass rounded-xl hover-lift cursor-pointer"
                   onClick={() => window.location.href = `mailto:${constants?.document?.Footer_Component?.contact_details?.email_id}`}>
                <div className="p-2 bg-accent2/10 rounded-lg flex-shrink-0">
                  <Mail cssClasses="!fill-accent2 !text-accent2 w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                <div className="font-Urbanist text-sm lg:text-base text-secondary font-medium hover:text-accent2 transition-colors duration-300 break-all">
                  {constants?.document?.Footer_Component?.contact_details?.email_id}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
            
            {/* Copyright */}
            <div className="text-lightText font-Urbanist text-sm lg:text-base text-center lg:text-left order-2 lg:order-1">
              {constants?.document?.Footer_Component?.contact_details?.privacy_text}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 lg:gap-4 order-1 lg:order-2">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => openLink(social.url)}
                  className={`
                    p-3 glass rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1
                    ${social.color} group
                  `}
                  title={social.label}
                >
                  <social.icon cssClasses="!fill-secondary !text-secondary w-5 h-5 group-hover:!fill-current group-hover:!text-current transition-colors duration-300" />
                </button>
              ))}
              
              {/* JustDial */}
              <button
                onClick={() => openLink(constants?.document?.Navbar_Component?.social_media_handle?.just_dial)}
                className="p-3 glass rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:text-orange-500 group"
                title="JustDial"
              >
                <img
                  src={Justdial_Logo}
                  alt="JustDial"
                  className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
