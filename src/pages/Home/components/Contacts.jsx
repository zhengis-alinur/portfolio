import SectionTitle from '../../../components/SectionTitle'
import Telegram from "../../../icons/Telegram"
import Linkedin from "../../../icons/Linkedin"
import Whatsapp from "../../../icons/Whatsapp"
import Email from "../../../icons/Email"
import Copy from "../../../icons/Copy"
import Alert from '../../../components/Alert'
import { useRef, useState } from 'react'

const ContactItem = ({children, value, href, onCopy}) => {

	const onClick = () => {
		navigator.clipboard.writeText(value);
		onCopy();
	}

	return (<div className='flex items-center gap-1'>
		<a href={href} className='flex items-center gap-1 cursor-pointer'  target="_blank" rel="noreferrer" >
			{children}
			<span className='text-thin text-gray'>
				{value}
			</span>
		</a>
		<Copy onClick={onClick}/>
	</div>)
}

const Contacts = () => {
	const alertRef = useRef(null);

	const onCopy = async () => {
		alertRef.current.style.transition = 'all 0.3s ease'
		alertRef.current.style.transform = 'translateY(50px)'
		await new Promise((res,_) => {
			setTimeout(() => {
				res();
			}, 1500)
		});
		alertRef.current.style.transform = 'translateY(0px)'
	}

	return (
		<>
			<div ref={alertRef} className="fixed z-50 top-[-40px] left-0 flex items-center justify-center w-screen">
				<p className='w-fit rounded-md p-1 bg-gray text-black'>Copied!</p>
			</div>
			<div id="contacts" className='bg-primary bg-opacity-20'>
				<SectionTitle title="contacts" lineWidth/>
				<div className='flex flex-col justify-around items-center gap-6 p-2'>
					<div className=' w-fit p-2 flex items-center gap-5 xl:w-fit flex-col'>
						<ContactItem value='@zh_alinur' onCopy={onCopy} href='https://t.me/zh_alinur'>
							<Telegram/>
						</ContactItem>
						<ContactItem value='zhengis-alinur' onCopy={onCopy} href='https://www.linkedin.com/in/zhengis-alinur/'>
							<Linkedin/>
							</ContactItem>
						<ContactItem value='+77021081959' onCopy={onCopy} href='https://wa.me/+77021081959'>
							<Whatsapp/>
						</ContactItem>
						<ContactItem value='zhengis.alin...' onCopy={onCopy} href='mailto: zhengis.alinur.erzhan@gmail.com'>
							<Email/>
						</ContactItem>
					</div>
					<p className='font-thin pb-2 px-6 text-center md:w-1/2'>
						I’m interested in a strong, a bit crazy and interesting team. So, if you have other request or question, don’t hesitate to contact me.
					</p>
				</div>
			</div>
		</>
	)
}

export default Contacts