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
import novaLogo from "../../assets/images/novocivillogo.png";
import Justdial_Logo from "../../assets/images/Justdial_Logo.svg";

const Footer = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank"); // Opens link in a new tab
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full lg:px-80 p-5 flex items-center justify-center lg:h-[400px]">
        <div className="w-full flex lg:flex-row flex-col items-start justify-between lg:gap-0 gap-12">
          <div className="flex flex-col gap-3">
            <img src={novaLogo} alt="logo" className="w-[160px]" />
            <span className="font-Urbanist max-w-[300px] text-[17px] text-lightText">
              {constants?.document?.Header_Component?.heading}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <div onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: "smooth" })} className="font-Urbanist text-[17px] font-semibold text-primary cursor-pointer">
              {constants?.document?.Footer_Component?.home_titles?.first_title}
            </div>
            <div onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: "smooth" })} className="font-Urbanist text-[17px] font-semibold text-secondary cursor-pointer">
              {constants?.document?.Footer_Component?.home_titles?.second_title}
            </div>
            <div onClick={() => document.getElementById('news')?.scrollIntoView({ behavior: "smooth" })} className="font-Urbanist text-[17px] font-semibold text-secondary cursor-pointer">
              {constants?.document?.Footer_Component?.home_titles?.third_title}
            </div>
            <div className="font-Urbanist text-[17px] font-semibold text-secondary cursor-pointer">
              {constants?.document?.Footer_Component?.home_titles?.fourth_title}
            </div>
            <div className="font-Urbanist text-[17px] font-semibold text-secondary cursor-pointer">
              {constants?.document?.Footer_Component?.home_titles?.fifth_title}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-Urbanist text-[17px] font-semibold text-primary cursor-pointer">
              {constants?.document?.Footer_Component?.location_titles?.first_title}
            </div>
            <div onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: "smooth" })} className="font-Urbanist text-[17px] font-semibold text-secondary cursor-pointer">
              {constants?.document?.Footer_Component?.location_titles?.second_title}
            </div>
            <div onClick={() => document.getElementById('action-banner')?.scrollIntoView({ behavior: "smooth" })} className="font-Urbanist text-[17px] font-semibold text-secondary cursor-pointer">
              {constants?.document?.Footer_Component?.location_titles?.third_title}
            </div>
            <div onClick={() => document.getElementById('action-banner')?.scrollIntoView({ behavior: "smooth" })} className="font-Urbanist text-[17px] font-semibold text-secondary cursor-pointer">
              {constants?.document?.Footer_Component?.location_titles?.fourth_title}
            </div>
            <div className="font-Urbanist text-[17px] font-semibold text-secondary cursor-pointer">
              {constants?.document?.Footer_Component?.location_titles?.fifth_title}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Location cssClasses={"!fill-primary !text-primary"} />
              <div className="font-Urbanist text-[17px] font-semibold text-secondary cursor-pointer">
                {constants?.document?.Footer_Component?.contact_details?.address}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Call cssClasses={"!fill-primary !text-primary"} />
              <div className="font-Urbanist text-[17px] font-semibold text-secondary cursor-pointer">
                {constants?.document?.Footer_Component?.contact_details?.phone_no}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail cssClasses={"!fill-primary !text-primary"} />
              <div className="font-Urbanist text-[17px] font-semibold text-secondary cursor-pointer">
                {constants?.document?.Footer_Component?.contact_details?.email_id}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col items-center lg:justify-between justify-center lg:gap-0 gap-5 lg:px-80 px-5 lg:h-[90px] lg:py-0 py-5 border-t border-navBorder">
        <span className="font-Urbanist text-lightText text-[17px]">
          {constants?.document?.Footer_Component?.contact_details?.privacy_text}
        </span>
        <div className="flex items-center gap-5">
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
      </div>
    </div>
  );
};

export default Footer;
