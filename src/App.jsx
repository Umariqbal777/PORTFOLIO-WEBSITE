import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import useTheme from './hooks/useTheme.js'

export default function App() {
  const [light, toggleTheme] = useTheme()
  return (
    <>
      <Header light={light} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
