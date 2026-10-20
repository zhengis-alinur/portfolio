const variants = {
	primary: 'border-primary text-white hover:text-background before:bg-primary',
	ghost: 'border-gray/60 text-white hover:border-white before:bg-white/10',
};

// A link styled as a button. The fill sweeps in from the left on hover.
const Button = ({ variant = 'primary', className = '', children, ...props }) => (
	<a
		className={`group relative isolate inline-flex min-h-[44px] items-center gap-2 overflow-hidden border px-5 py-2.5 font-mono text-sm font-medium transition-colors duration-300 ease-out before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100 focus-visible:before:scale-x-100 ${variants[variant]} ${className}`}
		{...props}
	>
		{children}
	</a>
);

export default Button
