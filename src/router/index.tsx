import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Projects } from '../pages/Projects'
import { ProjectDetails } from '../pages/ProjectDetails'
import { Lab } from '../pages/Lab'
import { NotFound } from '../pages/NotFound'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/projects', element: <Projects /> },
  { path: '/projects/:id', element: <ProjectDetails /> },
  { path: '/lab', element: <Lab /> },
  { path: '*', element: <NotFound /> },
])
