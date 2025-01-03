import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Profile from "./pages/Profile"

import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider, Router} from 'react-router-dom'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<About />}></Route>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/home/profile" element={<Profile />} />
      </>
  )
  )

  return (
  <RouterProvider router={router} />
  )
}

export default App
