import { CaretForwardOutline } from "react-ionicons";
import { ReactNode } from "react";

interface ButtonProps {
	whiteButton?: boolean;
	transparentButton?: boolean;
	gradientButton?: boolean;
	glowEffect?: boolean;
	children: ReactNode;
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
	size?: 'sm' | 'md' | 'lg';
}

const Button = ({
	whiteButton = false,
	transparentButton = false,
	gradientButton = false,
	glowEffect = false,
	children,
	className = "",
	onClick,
	disabled = false,
	size = 'md'
}: ButtonProps) => {
	const sizeClasses = {
		sm: 'px-4 h-[48px] text-sm',
		md: 'px-5 h-[60px] text-lg',
		lg: 'px-6 h-[72px] text-xl'
	};

	const getButtonClasses = () => {
		let baseClasses = `
			outline-none border-0 cursor-pointer w-fit flex items-center justify-center gap-2 
			rounded-2xl font-Urbanist font-semibold transition-all duration-300 ease-out
			transform hover:scale-105 active:scale-95 group relative overflow-hidden
			${sizeClasses[size]}
		`;

		if (disabled) {
			baseClasses += " opacity-50 cursor-not-allowed hover:scale-100";
			return baseClasses;
		}

		if (gradientButton) {
			baseClasses += ` 
				bg-gradient-primary hover:shadow-glow
				before:absolute before:inset-0 before:bg-gradient-to-r 
				before:from-transparent before:via-white before:to-transparent
				before:opacity-0 hover:before:opacity-20 before:transition-opacity
				before:duration-300 before:animate-shimmer
			`;
		} else if (whiteButton) {
			baseClasses += " bg-white hover:bg-gray-50 shadow-soft hover:shadow-medium";
		} else if (transparentButton) {
			baseClasses += " bg-transparent border-2 border-secondary hover:bg-secondary/10";
		} else {
			baseClasses += " bg-secondary hover:bg-secondary/90 shadow-soft hover:shadow-medium";
		}

		if (glowEffect) {
			baseClasses += " hover:shadow-glow animate-pulse-custom";
		}

		return baseClasses;
	};

	const getTextClasses = () => {
		if (gradientButton) {
			return "text-white drop-shadow-sm";
		}
		return whiteButton || transparentButton ? "text-secondary" : "text-white";
	};

	const getIconClasses = () => {
		const baseIconClasses = "transition-transform duration-300 group-hover:translate-x-1";
		if (gradientButton) {
			return `${baseIconClasses} !text-white !fill-white drop-shadow-sm`;
		}
		return `${baseIconClasses} ${
			whiteButton || transparentButton
				? "!text-secondary !fill-secondary"
				: "!text-white !fill-white"
		}`;
	};

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`${getButtonClasses()} ${className}`}
		>
			<span className={getTextClasses()}>
				{children}
			</span>
			<CaretForwardOutline
				cssClasses={getIconClasses()}
			/>
		</button>
	);
};

export default Button;
