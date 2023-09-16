import About from "./Compontent/About/About";
import Layout from "./Compontent/Layout/Layout";
import Portfolio from "./Compontent/Portfolio/Portfolio";
import Contact from "./Compontent/Contact/Contact";
import Home from "./Compontent/Home/Home";
import Notfound from "./Compontent/Notfound/NotFound";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'


export default function App(){
  let Router = createBrowserRouter([
    {path:'', element: <Layout/>, children: [
      {index: true , element : <Home/>},
      {path: 'about' , element : <About/>},
      {path: 'portfolio' , element : <Portfolio/>},
      {path: 'contact' , element : <Contact/>},
      {path: '*' , element : <Notfound/>},
    ]}
  ])

  return <RouterProvider router={Router}></RouterProvider>
}