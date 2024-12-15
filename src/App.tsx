import { Outlet } from "react-router-dom"
import ThemeToggle from "./components/ThemeToggle"

export default function App() {
  return (
    <main>
        <header className="primary-header">
          <h1> Where in the world? </h1>
          <ThemeToggle />
        </header>

        <Outlet /> 
    </main>
  )
}
