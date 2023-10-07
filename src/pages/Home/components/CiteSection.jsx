import Cite from "../../../components/Cite"

const CiteSection = () => {
  return (
	<div >
		<Cite
			className="mx-auto"
			cite="" author={<p>- Thomas Alva Edison</p>} >
				<p className="text-xl">Many of life&apos;s failures are people who did not realize how close they were to success when they gave up.</p>
			</Cite>
	</div>
  )
}

export default CiteSection