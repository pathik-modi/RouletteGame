import { Outlet } from 'react-router-dom'
import { useFruits } from '../hooks/useFruits.ts'

function App() {
  return (
    <>
      <div className="app">
        <header>
          <h1>Casino Team</h1>
        </header>
        <section className="main">
          <Outlet />
        </section>
      </div>
    </>
  )
}

export default App
