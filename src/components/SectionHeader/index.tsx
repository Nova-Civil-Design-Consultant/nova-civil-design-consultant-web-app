interface SectionHeaderProps {
	title: string;
	description: string;
	centered?: boolean;
	animated?: boolean;
}

const SectionHeader = ({ title, description, centered = false, animated = true }: SectionHeaderProps) => {
	return (
		<div className={`
			flex flex-col gap-6 
			${centered ? 'items-center text-center mx-auto' : 'items-start self-start'} 
			${animated ? 'animate-fadeInUp' : ''}
			max-w-full
		`}>
			{/* Improved title with gradient accent */}
			<div className="flex items-center gap-3 justify-center lg:justify-start w-full">
				<span className="w-6 lg:w-8 h-0.5 bg-gradient-primary rounded-full"></span>
				<span className="font-Fira text-base lg:text-lg text-lightText uppercase tracking-wider font-medium whitespace-nowrap">
					{title}
				</span>
				<span className="w-6 lg:w-8 h-0.5 bg-gradient-primary rounded-full"></span>
			</div>
			
			{/* Enhanced description with responsive sizing */}
			<h2 className={`
				font-Fira text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-secondary font-bold leading-tight
				${centered ? 'max-w-4xl mx-auto' : 'max-w-3xl'}
				gradient-text
			`}>
				{description}
			</h2>
			
			{/* Decorative underline */}
			<div className={`
				w-12 lg:w-16 h-1 bg-gradient-primary rounded-full 
				${centered ? 'mx-auto' : ''}
			`}></div>
		</div>
	);
};

export default SectionHeader;
