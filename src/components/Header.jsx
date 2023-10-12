import Logo from '../components/Logo';
import {useContext} from 'react';
import { SectionContext } from './Layout';

const Header = ({onSection}) => {
	const section = useContext(SectionContext);
	return (
	<div id="home" className='w-full left-0 z-10 p-2 bg-background'>
		<div className='max-w-7xl mx-auto flex flex-row justify-center px-8 xl:justify-between'>
			<Logo />
		</div>
	</div>
  )
}

export default Header