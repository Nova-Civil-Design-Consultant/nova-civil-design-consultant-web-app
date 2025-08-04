import { useState, useEffect } from "react";
import {
  LogoFacebook,
  LogoInstagram,
  LogoLinkedin,
  LogoTwitter,
  MenuOutline,
  CloseOutline,
} from "react-ionicons";
import { useNavigate } from "react-router-dom";
import novaLogo from "/nova-logo-compact.svg";
import constants from "../../constants/index.json";
import { NavItem } from "../../types";
import Justdial_Logo from "../../assets/images/Justdial_Logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const handleNavClick = (item: NavItem) => {
    if (item.title === 'Login') {
      navigate('/login');
    } else {
      document
        .getElementById(item.title.toLowerCase())
        ?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`
        fixed top-0 w-full z-50 transition-all duration-300 ease-out
        ${isScrolled 
          ? 'glass backdrop-blur-md shadow-medium py-3' 
          : 'bg-transparent py-5'
        }
      `}>
        <div className="w-full lg:px-12 px-5 flex items-center justify-between">
          {/* Logo */}
          <div className="animate-fadeInLeft">
            <img 
              src={novaLogo} 
              alt="Nova Civil Design Logo" 
              className="cursor-pointer h-10 hover:scale-105 transition-transform duration-300" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="lg:flex hidden items-center gap-8 animate-fadeInDown">
            {constants?.document?.Navbar_Component?.navItems.map((item: NavItem, index) => (
              <div
                key={item.title}
                className={`
                  relative font-Urbanist font-semibold text-lg cursor-pointer
                  transition-all duration-300 hover:scale-105
                  ${item.active ? "text-primary" : "text-secondary hover:text-primary"}
                  group
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleNavClick(item)}
              >
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </div>
            ))}
          </div>

          {/* Social Media & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Desktop Social Icons */}
            <div className="lg:flex hidden items-center gap-4 animate-fadeInRight">
              <div className="flex items-center gap-3 px-4 py-2 glass rounded-full">
                <LogoFacebook
                  cssClasses="!fill-secondary !text-secondary cursor-pointer hover:!fill-primary hover:!text-primary transition-colors duration-300 hover:scale-110 transform"
                  onClick={() =>
                    openLink(
                      constants?.document?.Navbar_Component?.social_media_handle?.facebook_handle
                    )
                  }
                />
                <LogoInstagram
                  cssClasses="!fill-secondary !text-secondary cursor-pointer hover:!fill-primary hover:!text-primary transition-colors duration-300 hover:scale-110 transform"
                  onClick={() =>
                    openLink(
                      constants?.document?.Navbar_Component?.social_media_handle?.instagram_handle
                    )
                  }
                />
                <LogoLinkedin
                  cssClasses="!fill-secondary !text-secondary cursor-pointer hover:!fill-primary hover:!text-primary transition-colors duration-300 hover:scale-110 transform"
                  onClick={() =>
                    openLink(
                      constants?.document?.Navbar_Component?.social_media_handle?.linkedin_handle
                    )
                  }
                />
                <LogoTwitter
                  cssClasses="!fill-secondary !text-secondary cursor-pointer hover:!fill-primary hover:!text-primary transition-colors duration-300 hover:scale-110 transform"
                  onClick={() =>
                    openLink(
                      constants?.document?.Navbar_Component?.social_media_handle?.x_handle
                    )
                  }
                />
                <img
                  src={Justdial_Logo}
                  alt="Justdial"
                  className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-300 opacity-70 hover:opacity-100"
                  onClick={() =>
                    openLink(
                      constants?.document?.Navbar_Component?.social_media_handle?.just_dial
                    )
                  }
                />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg glass hover:bg-primary/10 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <CloseOutline cssClasses="!text-secondary !fill-secondary" />
              ) : (
                <MenuOutline cssClasses="!text-secondary !fill-secondary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          <div className="absolute top-20 right-5 left-5 glass rounded-2xl p-6 animate-scaleIn">
            <div className="space-y-4 mb-6">
              {constants?.document?.Navbar_Component?.navItems.map((item: NavItem, index) => (
                <div
                  key={item.title}
                  className={`
                    p-3 rounded-xl cursor-pointer transition-all duration-300
                    ${item.active 
                      ? "bg-gradient-primary text-white" 
                      : "text-secondary hover:bg-primary/10"
                    }
                    font-Urbanist font-semibold text-lg
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleNavClick(item)}
                >
                  {item.title}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-200">
              <LogoFacebook
                cssClasses="!fill-secondary !text-secondary cursor-pointer hover:!fill-primary hover:!text-primary transition-colors duration-300"
                onClick={() =>
                  openLink(
                    constants?.document?.Navbar_Component?.social_media_handle?.facebook_handle
                  )
                }
              />
              <LogoInstagram
                cssClasses="!fill-secondary !text-secondary cursor-pointer hover:!fill-primary hover:!text-primary transition-colors duration-300"
                onClick={() =>
                  openLink(
                    constants?.document?.Navbar_Component?.social_media_handle?.instagram_handle
                  )
                }
              />
              <LogoLinkedin
                cssClasses="!fill-secondary !text-secondary cursor-pointer hover:!fill-primary hover:!text-primary transition-colors duration-300"
                onClick={() =>
                  openLink(
                    constants?.document?.Navbar_Component?.social_media_handle?.linkedin_handle
                  )
                }
              />
              <LogoTwitter
                cssClasses="!fill-secondary !text-secondary cursor-pointer hover:!fill-primary hover:!text-primary transition-colors duration-300"
                onClick={() =>
                  openLink(
                    constants?.document?.Navbar_Component?.social_media_handle?.x_handle
                  )
                }
              />
              <img
                src={Justdial_Logo}
                alt="Justdial"
                className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-300"
                onClick={() =>
                  openLink(
                    constants?.document?.Navbar_Component?.social_media_handle?.just_dial
                  )
                }
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
