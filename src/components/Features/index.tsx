import House from "../../assets/images/house.svg";
import Design from "../../assets/images/design.svg";
import Maintenance from "../../assets/images/maintenance.svg";
import { CaretForwardOutline } from "react-ionicons";
import constants from '../../constants/index.json';

const Features = () => {
	const features = [
		{
			icon: House,
			title: constants?.document?.Feature_Component?.first_feature?.heading,
			description: constants?.document?.Feature_Component?.first_feature?.sub_heading,
		},
		{
			icon: Design,
			title: constants?.document?.Feature_Component?.second_feature?.heading,
			description: constants?.document?.Feature_Component?.second_feature?.sub_heading,
		},
		{
			icon: Maintenance,
			title: constants?.document?.Feature_Component?.third_feature?.heading,
			description: constants?.document?.Feature_Component?.third_feature?.sub_heading,
		},
	];
	return (
		<div className="w-full flex lg:flex-row flex-col items-center justify-between lg:mt-44 mt-20 lg:px-80 px-5 lg:gap-0 gap-12">
			{features.map((feature) => (
				<div
					key={feature.title}
					className="flex flex-col lg:items-start items-center gap-3"
				>
					<img
						src={feature.icon}
						alt={feature.title}
						className="w-[71px]"
					/>
					<span className="text-secondary font-Fira text-[26px] font-bold">
						{feature.title}
					</span>
					<p className="text-lightText font-Urbanist text-lg max-w-[400px] lg:text-left text-center">
						{feature.description}
					</p>
					<div className="flex items-center gap-2 cursor-pointer mt-2">
						<span className="font-Urbanist font-semibold text-lg text-secondary">
							{constants?.document?.Feature_Component?.view_details_button}
						</span>
						<CaretForwardOutline cssClasses={"!fill-secondary !text-secondary"} />
					</div>
				</div>
			))}
		</div>
	);
};

export default Features;
