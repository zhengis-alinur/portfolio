import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import Layout from "./components/Layout";


const App = () => {
	const routers = createBrowserRouter([
		{
			element: <Layout />,
			children: [
				{
						path: '/',
						element: <Home />,
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