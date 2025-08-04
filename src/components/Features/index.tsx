import { useState } from "react";
import House from "../../assets/images/house.svg";
import Design from "../../assets/images/design.svg";
import Maintenance from "../../assets/images/maintenance.svg";
import { CaretForwardOutline } from "react-ionicons";
import constants from '../../constants/index.json';

const Features = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const features = [
		{
			icon: House,
			title: constants?.document?.Feature_Component?.first_feature?.heading,
			description: constants?.document?.Feature_Component?.first_feature?.sub_heading,
			gradient: "from-primary to-accent",
		},
		{
			icon: Design,
			title: constants?.document?.Feature_Component?.second_feature?.heading,
			description: constants?.document?.Feature_Component?.second_feature?.sub_heading,
			gradient: "from-accent to-accent2",
		},
		{
			icon: Maintenance,
			title: constants?.document?.Feature_Component?.third_feature?.heading,
			description: constants?.document?.Feature_Component?.third_feature?.sub_heading,
			gradient: "from-accent2 to-primary",
		},
	];

	return (
		<section className="w-full py-20 lg:py-32 particles-bg">
			<div className="container mx-auto px-4 lg:px-8 max-w-7xl">
				<div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
					{features.map((feature, index) => (
						<div
							key={feature.title}
							className={`
								group flex flex-col items-center lg:items-start gap-6 p-8 rounded-3xl
								glass hover-lift cursor-pointer transition-all duration-500
								${hoveredIndex === index ? 'scale-105 shadow-glow' : 'hover:shadow-medium'}
								animate-fadeInUp
							`}
							style={{ animationDelay: `${index * 0.2}s` }}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							{/* Icon Container with Gradient Background */}
							<div className={`
								relative p-6 rounded-2xl bg-gradient-to-br ${feature.gradient}
								group-hover:scale-110 transition-transform duration-300
								shadow-medium
							`}>
								<img
									src={feature.icon}
									alt={feature.title}
									className="w-12 h-12 filter brightness-0 invert"
								/>
								{/* Glow effect */}
								<div className={`
									absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient}
									opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300
								`}></div>
							</div>

							{/* Content */}
							<div className="space-y-4 text-center lg:text-left">
								<h3 className="text-secondary font-Fira text-2xl lg:text-3xl font-bold group-hover:gradient-text transition-all duration-300">
									{feature.title}
								</h3>
								
								<p className="text-lightText font-Urbanist text-lg leading-relaxed">
									{feature.description}
								</p>
								
								{/* Action Link */}
								<div className="flex items-center justify-center lg:justify-start gap-3 pt-4 group-hover:gap-4 transition-all duration-300">
									<span className="font-Urbanist font-semibold text-lg text-secondary group-hover:text-primary transition-colors duration-300">
										{constants?.document?.Feature_Component?.view_details_button}
									</span>
									<div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
										<CaretForwardOutline 
											cssClasses="!fill-primary !text-primary w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
										/>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
