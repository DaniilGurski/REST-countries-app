import { Outlet } from "react-router-dom"
import PrimaryHeader from "./components/layout/PrimaryHeader";
import "./style.css";

export default function App() {
  return (
    <main>
        <PrimaryHeader />
        <Outlet /> 
    </main>
    
  )
}
