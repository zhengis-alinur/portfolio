import Logo from '../components/Logo';
import {useContext} from 'react';
import { SectionContext } from './Layout';

const navItems = ['home', 'experience', 'works', 'skills', 'about-me', 'contacts']

const NavBarItem = (props) => (
	<li className="flex items-center cursor-pointer">
		<a href={`#${props.title}`} onClick={() => props.onClick(props.title)}>
			<span className="text-primary">#</span>
			<span className={props.active ? 'text-white' : 'text-gray'}>{props.title}</span>
		</a>
	</li>
);

const Header = ({onSection}) => {
	const section = useContext(SectionContext);
	return (
	<div id="home" className='w-full left-0 z-10 p-2 bg-background'>
		<div className='max-w-7xl mx-auto flex flex-row justify-center px-8 md:justify-between'>
			<Logo />
			<ul className="hidden gap-10 text-xl items-center md:flex">
				{
					navItems.map((item, index) => (
						<NavBarItem key={index} active={section === item} onClick={onSection} title={item}/>
					))
				}
				<li className="text-gray">EN</li>
			</ul>
		</div>
	</div>
  )
}

export default Header