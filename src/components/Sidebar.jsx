import {useContext, useEffect, useState, useRef} from 'react';
import { SectionContext } from './Layout';

const navItems = ['home', 'experience', 'works', 'skills', 'about-me', 'contacts']

export const SideBar = ({onSection}) => {
	const sidebarRef = useRef(null);
	const selectedSection = useContext(SectionContext);
	const buttonRef = useRef(null);

	const [isOpen, setOpen] = useState(false);

	useEffect(()=>{
		sidebarRef.current.style.transition = 'all 0.5s ease';
	}, [])

	const onOpen = () => {
		sidebarRef.current.style.transform = isOpen ? 'translateX(0)' : 'translateX(200px)';
		setOpen(!isOpen);
	}

	return (
	<div className='fixed z-10 left-[-200px] top-20 flex items-center'>
		<div ref={sidebarRef} className="w-fit flex flex-col items-start md:left-4 ">
			{navItems.map((item, index) => <a href={`#${item}`} onClick={() => { onSection(item), onOpen()}} key={index} className={`bg-background p-2 ${selectedSection === item ? 'text-primary' : 'text-gray'}`}>- {item}</a>)}
		</div>
		<div ref={buttonRef} onClick={() => onOpen()} className={`${isOpen && 'hidden'} bg-gray text-background px-1 py-3 cursor-pointer`}>
			{'>'}
		</div>
	</div>
	)
};

export default SideBar;