const SectionTitle = ({title, lineWidth = '1/2'}) => {
  return (
	<div className="sticky top-0 z-10">
		<div className="flex gap-3 m-5 items-center">
			<h2 className="whitespace-nowrap text-3xl font-semibold"><span className="text-primary">#</span>{title}</h2>
			<div className={`border-b-2 w-${lineWidth} border-primary`}/>
		</div>
	</div>
  )
}

export default SectionTitle