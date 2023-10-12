import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Projects from './pages/Projects';


const App = () => {
	const routers = createBrowserRouter([
		{
			element: <Layout />,
			children: [
				{
						path: '/',
						element: <Home />,
				},
				{
						path: '/projects',
						element: <Projects/>,
				},]
			}
	]);
  return (
	<div className='container max-w-7xl mx-auto bg-background min-h-screen'>
		<RouterProvider router={routers}/>
	</div> 
  )
}

export default App