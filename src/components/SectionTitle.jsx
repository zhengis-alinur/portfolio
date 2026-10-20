const SectionTitle = ({ id, title, aside }) => (
	<div className="mb-10 flex items-center gap-4 md:mb-14">
		<h2 id={id} data-reveal="left" className="whitespace-nowrap text-2xl font-semibold sm:text-3xl">
			<span className="text-primary">#</span>{title}
		</h2>
		<div data-reveal="draw" style={{ '--d': '150ms' }} className="h-px max-w-md flex-1 bg-primary" aria-hidden="true" />
		{aside}
	</div>
);

export default SectionTitle
