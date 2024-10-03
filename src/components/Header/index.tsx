import Navbar from "../Navbar";
import abstractOne from "../../assets/images/abstract-one.svg";
import header from "../../assets/images/header.png";
import Button from "../Button";
import constants from "../../constants/index.json";

const Header = () => {
	return (
		<div className="relative w-full">
			<Navbar />
			<img
				src={abstractOne}
				alt="abstractOne"
				className="absolute top-0 right-0 z-[-1] lg:block hidden"
			/>
			<div className="flex w-full lg:flex-row flex-col-reverse items-center justify-between lg:mt-36 mt-5 lg:px-80 px-5 lg:gap-0 gap-8">
				<div className="flex flex-col gap-6">
					<span className="text-secondary font-Fira text-6xl lg:max-w-[500px] max-w-[95%] font-bold">
						<i>{constants?.document?.Header_Component?.heading}</i>
					</span>
					<p className="text-lg font-Urbanist text-lightText lg:max-w-[500px] max-w-[95%]">
						{constants?.document?.Header_Component?.sub_heading}
					</p>
					<Button className="mt-3" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>{constants?.document?.Header_Component?.view_project_button}</Button>
				</div>
				<img
					src={header}
					alt="header"
				/>
			</div>
		</div>
	);
};

export default Header;
