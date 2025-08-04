import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import abstractOne from "../../assets/images/abstract-one.svg";
import header from "../../assets/images/header.png";
import Button from "../Button";
import constants from "../../constants/index.json";

const Header = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const scrollToProjects = () => {
		document.getElementById('projects')?.scrollIntoView({ 
			behavior: 'smooth',
			block: 'start'
		});
	};

	return (
		<div className="relative w-full min-h-screen particles-bg overflow-hidden">
			<Navbar />
			
			{/* Background Elements */}
			<div className="absolute inset-0 z-0">
				<img
					src={abstractOne}
					alt="abstractOne"
					className="absolute top-0 right-0 lg:block hidden opacity-30 animate-float"
				/>
				
				{/* Floating geometric shapes */}
				<div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float" style={{animationDelay: '0s'}}></div>
				<div className="absolute top-40 right-20 w-16 h-16 bg-accent rounded-full opacity-15 animate-float" style={{animationDelay: '1s'}}></div>
				<div className="absolute bottom-40 left-20 w-12 h-12 bg-accent2 rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
			</div>

			{/* Main Content Container */}
			<div className="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-20">
				<div className="container mx-auto px-4 lg:px-8 max-w-7xl">
					<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						{/* Text Content */}
						<div className={`space-y-6 lg:pr-8 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
							<div className="space-y-4">
								<h1 className="text-secondary font-Fira text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
									<span className="gradient-text italic block">
										{constants?.document?.Header_Component?.heading}
									</span>
								</h1>
								
								{/* Animated underline */}
								<div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
							</div>
							
							<p className="text-base lg:text-lg xl:text-xl font-Urbanist text-lightText leading-relaxed max-w-lg">
								{constants?.document?.Header_Component?.sub_heading}
							</p>
							
							{/* Enhanced Button */}
							<div className="pt-4">
								<Button 
									gradientButton 
									glowEffect 
									size="lg"
									className="shadow-large hover-lift" 
									onClick={scrollToProjects}
								>
									{constants?.document?.Header_Component?.view_project_button}
								</Button>
							</div>

							{/* Stats or features preview */}
							<div className="flex gap-6 lg:gap-8 pt-6 flex-wrap">
								<div className="text-center">
									<div className="text-2xl lg:text-3xl font-bold text-primary">50+</div>
									<div className="text-sm text-lightText">Projects Done</div>
								</div>
								<div className="text-center">
									<div className="text-2xl lg:text-3xl font-bold text-accent">100%</div>
									<div className="text-sm text-lightText">Client Satisfaction</div>
								</div>
								<div className="text-center">
									<div className="text-2xl lg:text-3xl font-bold text-accent2">5+</div>
									<div className="text-sm text-lightText">Years Experience</div>
								</div>
							</div>
						</div>
						
						{/* Image Section */}
						<div className={`relative ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
							{/* Backdrop blur effect */}
							<div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-xl"></div>
							
							{/* Main image container */}
							<div className="relative glass rounded-3xl p-4 hover-lift">
								<img
									src={header}
									alt="Nova Civil Design Header"
									className="relative z-10 rounded-2xl shadow-large w-full h-auto"
								/>
								
								{/* Overlay gradient */}
								<div className="absolute inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl pointer-events-none"></div>
							</div>
							
							{/* Floating badge */}
							<div className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 animate-bounceIn" style={{animationDelay: '1s'}}>
								<div className="text-center">
									<div className="text-2xl font-bold gradient-text">★ 4.9</div>
									<div className="text-xs text-secondary">Rating</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
					<div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
				</div>
			</div>
		</div>
	);
};

export default Header;
