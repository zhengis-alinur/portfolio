import Lines from "../../../components/Lines"
import Dots from "../../../components/Dots"
import Button from "../../../components/Button"

const Intro = () => {
	return (
		<div className="flex items-center h-full flex-col w-full justify-around md:flex-row py-16">
			<div className="flex flex-col gap-10">
				<h1 className="whitespace-pre-line text-4xl font-bold">Alinur is a <span className="text-primary font-bold">fullstack JS</span> developer
				</h1>
				<div>
					<h1><span className="text-primary">if</span> (Alinur.isHappy) {`{`}</h1>
					<h2 className="text-gray pl-5">Craft awesome web-applications where technologies meet creativity;</h2>
					<h1>{'}'} <span className="text-primary">else</span> {'{'}</h1>
					<h2 className="text-gray pl-5">makeSelfHappy(Alinur);</h2>
					<h1>{'}'}</h1>
				</div>
				<a href="#contacts">
					<Button title="Contact me!"/>
				</a>
			</div>
			<div className="relative">
				<Lines className='absolute top-20'/>
				<img className="relative z-1 w-96" src='/portrait.png'/>
				<div className="flex gap-3 items-center p-1 border-gray border-2">
					<div className="w-4 h-4 bg-primary"></div>
					<p className="text-gray">Currently working on <a href="https://opinius-front.onrender.com/" target="_blank" className="font-bold text-white" rel="noreferrer">Opinius</a></p>
				</div>
				<Dots  className='absolute z-0 right-0 bottom-20 z-1' />
			</div>
		</div>
	)
}

export default Intro