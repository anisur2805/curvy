export const Curve = ({ isBottom, height, width, flipX, flipY,  color }) => {
	const normalPath =
		"M0,64L60,101.3C120,139,240,213,360,218.7C480,224,600,160,720,160C840,160,960,224,1080,245.3C1200,267,1320,245,1380,234.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z";

	const invertedPath =
		"M0,64L60,101.3C120,139,240,213,360,218.7C480,224,600,160,720,160C840,160,960,224,1080,245.3C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z";

	return (
		<div
			className="curve"
			style={{
				position: "absolute",
				left: 0,
				top: !isBottom ? 0 : 'initial',
				bottom: isBottom ? 0 : 'initial',
				overflow: "hidden",
				width: "100%",
				height: height,
				transform: `scaleX(${flipX ? -1 : 1 }) scaleY(${isBottom ? -1 : 1 }) rotate(${flipY ? 180 : 0}deg)`,
			}}
		>
			<svg
				preserveAspectRatio="none"
				style={{
					position: "absolute",
					left: 0,
					top: 0,
					width: `${width}%`,
					height: height,
				}}
				viewBox="0 0 1440 320"
			>
				<path style={{  fill: color || 'white' }} fill-opacity="1" d={`${flipY ? invertedPath : normalPath}`}></path>
			</svg>
		</div>
	);
};
