import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <header>
          <h1>
            <Link to={`/`}>Casino Team</Link>
          </h1>
        </header>
        <section className="main">
          <Outlet />
        </section>
      </div>
    </>
  )
}

export default App
