import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github ,{githubInfoLoader} from './Components/Github/Github.jsx' 
import { createBrowserRouter, createRoutesFromElements, RouterProvider ,Route } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='contact-us' element={<Contact />} />
      <Route
      loader = {githubInfoLoader}
       path='github' element={<Github />} />
      <Route path="user/:id" element={<User />} />
    </Route>
  )
)
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
