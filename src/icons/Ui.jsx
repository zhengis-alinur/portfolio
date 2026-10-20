// Stroke icons for interface controls, drawn on a 24px grid at 1.75 stroke.
const Icon = ({ className = 'w-5 h-5', children }) => (
	<svg
		className={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.75"
		strokeLinecap="square"
		strokeLinejoin="miter"
		aria-hidden="true"
		focusable="false"
	>
		{children}
	</svg>
);

export const CopyIcon = (props) => (
	<Icon {...props}>
		<rect x="8" y="8" width="12" height="12" />
		<path d="M16 8V4H4v12h4" />
	</Icon>
);

export const CheckIcon = (props) => (
	<Icon {...props}>
		<path d="M4.5 12.5l5 5 10-11" />
	</Icon>
);

export const DownloadIcon = (props) => (
	<Icon {...props}>
		<path d="M12 4v11M7 10.5l5 5 5-5M5 20h14" />
	</Icon>
);

export const ArrowIcon = (props) => (
	<Icon {...props}>
		<path d="M5 12h13M13 6.5l5.5 5.5-5.5 5.5" />
	</Icon>
);

export const ArrowUpIcon = (props) => (
	<Icon {...props}>
		<path d="M12 19V6M6.5 11.5L12 6l5.5 5.5" />
	</Icon>
);

export const ExternalIcon = (props) => (
	<Icon {...props}>
		<path d="M9 5H5v14h14v-4M13 5h6v6M19 5l-8 8" />
	</Icon>
);

export const MenuIcon = (props) => (
	<Icon {...props}>
		<path d="M4 7h16M4 12h16M4 17h10" />
	</Icon>
);

export const CloseIcon = (props) => (
	<Icon {...props}>
		<path d="M6 6l12 12M18 6L6 18" />
	</Icon>
);

export const PinIcon = (props) => (
	<Icon {...props}>
		<path d="M12 21s-6.5-6.2-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.8 12 21 12 21z" />
		<circle cx="12" cy="9.8" r="2.2" />
	</Icon>
);
