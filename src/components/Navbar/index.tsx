import {
  LogoFacebook,
  LogoInstagram,
  LogoLinkedin,
  LogoTwitter,
  MenuOutline,
} from "react-ionicons";
import novaLogo from "../../assets/images/novocivillogo.png";
import constants from "../../constants/index.json";
import Justdial_Logo from "../../assets/images/Justdial_Logo.svg";

const Navbar = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank"); // Opens link in a new tab
  };

  return (
    <div className="w-full lg:px-12 p-5 lg:h-24 h-20 border-b border-navBorder flex items-center justify-between">
      <img src={novaLogo} alt="logo" className="cursor-pointer" />
      <div className="lg:flex hidden items-center gap-8">
        {constants?.document?.Navbar_Component?.navItems.map((item: any) => (
          <div
            key={item.title}
            className={`${
              item.active ? "text-primary" : "text-secondary"
            } font-Urbanist font-semibold text-lg cursor-pointer`}
            onClick={() =>
              document
                .getElementById(item.title.toLowerCase())
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="lg:flex hidden items-center gap-7">
        <LogoFacebook
          cssClasses={"!fill-secondary !text-secondary cursor-pointer"}
          onClick={() =>
            openLink(
              constants?.document?.Navbar_Component?.social_media_handle
                ?.facebook_handle
            )
          }
        />
        <LogoInstagram
          cssClasses={"!fill-secondary !text-secondary cursor-pointer"}
          onClick={() =>
            openLink(
              constants?.document?.Navbar_Component?.social_media_handle
                ?.instagram_handle
            )
          }
        />
        <LogoLinkedin
          cssClasses={"!fill-secondary !text-secondary cursor-pointer"}
          onClick={() =>
            openLink(
              constants?.document?.Navbar_Component?.social_media_handle
                ?.linkedin_handle
            )
          }
        />
        <LogoTwitter
          cssClasses={"!fill-secondary !text-secondary cursor-pointer"}
          onClick={() =>
            openLink(
              constants?.document?.Navbar_Component?.social_media_handle
                ?.x_handle
            )
          }
        />
        <img
          src={Justdial_Logo}
          alt="JustDial"
          className="w-6 h-6 cursor-pointer"
          onClick={() =>
            openLink(
              constants?.document?.Navbar_Component?.social_media_handle
                ?.just_dial
            )
          }
        />
      </div>
      <div className="cursor-pointer lg:hidden block">
        <MenuOutline
          cssClasses={"!fill-secondary !text-secondary"}
          width={"32px"}
          height={"32px"}
        />
      </div>
    </div>
  );
};

export default Navbar;
