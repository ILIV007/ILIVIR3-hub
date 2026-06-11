import { RouterProvider } from 'react-router-dom'
import { LangProvider } from './context/LangContext'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { router } from './router'
import './styles/globals.css'
import './styles/animations.css'
import './styles/neon.css'

function App() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-iliv-dark text-white">
        <ScrollProgress />
        <Navbar />
        <main>
          <RouterProvider router={router} />
        </main>
        <Footer />
      </div>
    </LangProvider>
  )
}

export default App
