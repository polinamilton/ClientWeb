"use client";
import * as React from "react";

import {
	motion,
	useMotionTemplate,
	useScroll,
	useTransform,
} from "framer-motion";

interface iISmoothScrollHeroProps {
	/**
	 * Height of the scroll section in pixels
	 * @default 1500
	 */
	scrollHeight: number;
	/**
	 * Background image URL for desktop view
	 * @default "https://images.unsplash.com/photo-1511884642898-4c92249e20b6"
	 */
	desktopImage: string;
	/**
	 * Background image URL for mobile view
	 * @default "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=2412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	 */
	mobileImage: string;
	/**
	 * Initial clip path percentage
	 * @default 25
	 */
	initialClipPercentage: number;
	/**
	 * Final clip path percentage
	 * @default 75
	 */
	finalClipPercentage: number;
	/**
	 * Fill color for the area outside the clip path
	 * @default "#000000"
	 */
	backgroundColor?: string;
	/**
	 * Content overlaid on top of the background, pinned for the
	 * duration of the scroll reveal (not clipped with the image)
	 */
	children?: React.ReactNode;
}

interface iISmoothScrollHeroBackgroundProps extends iISmoothScrollHeroProps {}

const SmoothScrollHeroBackground: React.FC<
	iISmoothScrollHeroBackgroundProps
> = ({
	scrollHeight,
	desktopImage,
	mobileImage,
	initialClipPercentage,
	finalClipPercentage,
	backgroundColor = "#000000",
	children,
}) => {
	const {scrollY} = useScroll();

	const clipStart = useTransform(
		scrollY,
		[0, scrollHeight],
		[initialClipPercentage, 0],
	);
	const clipEnd = useTransform(
		scrollY,
		[0, scrollHeight],
		[finalClipPercentage, 100],
	);

	const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

	const backgroundSize = useTransform(
		scrollY,
		[0, scrollHeight + 500],
		["170%", "100%"],
	);

	return (
		<div className="sticky top-0 h-screen w-full">
			<motion.div
				className="absolute inset-0"
				style={{
					clipPath,
					backgroundColor,
					willChange: "transform, opacity",
				}}
			>
				{/* Mobile background */}
				<motion.div
					className="absolute inset-0 md:hidden"
					style={{
						backgroundImage: `url(${mobileImage})`,
						backgroundSize,
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				/>
				{/* Desktop background */}
				<motion.div
					className="absolute inset-0 hidden md:block"
					style={{
						backgroundImage: `url(${desktopImage})`,
						backgroundSize,
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				/>
			</motion.div>
			{children && <div className="absolute inset-0 z-10">{children}</div>}
		</div>
	);
};

/**
 * A smooth scroll hero component with parallax background effect
 * @param props - Component props
 * @returns React component
 */
 const SmoothScrollHero: React.FC<iISmoothScrollHeroProps> = ({
	scrollHeight = 1500,
	desktopImage = "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
	mobileImage = "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=2412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	initialClipPercentage = 25,
	finalClipPercentage = 75,
	backgroundColor = "#000000",
	children,
}) => {
	return (
		<div
			style={{height: `calc(${scrollHeight}px + 100vh)`}}
			className="relative w-full"
		>
			<SmoothScrollHeroBackground
				scrollHeight={scrollHeight}
				desktopImage={desktopImage}
				mobileImage={mobileImage}
				initialClipPercentage={initialClipPercentage}
				finalClipPercentage={finalClipPercentage}
				backgroundColor={backgroundColor}
			>
				{children}
			</SmoothScrollHeroBackground>
		</div>
	);
};
export default SmoothScrollHero;
