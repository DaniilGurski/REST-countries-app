import { Outlet } from "react-router-dom"
import PrimaryHeader from "./components/layout/PrimaryHeader";
import "./style.css";
import { darkModeToggledAtom } from "./services/state/atoms";
import { useAtomValue } from "jotai";

export default function App() {
  const darkModeToggled = useAtomValue(darkModeToggledAtom);

  return (
    <main>
        <PrimaryHeader />

        <div className="container">
          <Outlet /> 
        </div> 
    </main>
    
  )
}
