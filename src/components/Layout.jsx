import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import SocialRope from './SocialRope';
import SideBar from './Sidebar';
import { createContext, useState } from 'react';

export const SectionContext = createContext(null);

const Layout = () => {
	const [section, setSection] = useState('home');
    return (
			<div className="relative w-full px-10 pb-4">
				<SectionContext.Provider value={section}>
					<Header  onSection={setSection}/>
					<SideBar onSection={setSection}/>
				</SectionContext.Provider>
				<SocialRope/>
				<Outlet/>
				<Footer  onSection={setSection}/>
			</div>
    );
};

export default Layout;