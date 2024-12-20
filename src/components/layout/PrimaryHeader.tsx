import ThemeToggle from "../ThemeToggle"

export default function PrimaryHeader() {
    return (
        <header className="primary-header bg-primary-100">
            <div className="container justify-sb"> 
                <h1> Where in the world? </h1>
                <ThemeToggle />
            </div> 
        </header>
    )
}
