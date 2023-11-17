import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Game from './components/Game'

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<Home />} />
    <Route path="game/:id" element={<Game />} />
  </Route>,
)
