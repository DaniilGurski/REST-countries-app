import { useAtom } from "jotai";
import { currentCountryPageAtom } from "../services/state/atoms";

export default function Pagination({ pageNumber }: { pageNumber: number }) {
    const [currentCountryPage, setCurrentCountryPage] = useAtom(currentCountryPageAtom);

    const handleNext = () => {
        setCurrentCountryPage(Math.min(currentCountryPage + 1, pageNumber));
    };
    const handlePrev = () => {
        setCurrentCountryPage(Math.max(currentCountryPage - 1, 1));
    };

    return (
        <nav className="pagination flex-flow justify-end align-center">
            <button 
            className="pagination__button box-shadow" 
            onClick={handlePrev} 
            disabled={currentCountryPage === 0 || currentCountryPage === 1}> 
                Prev 
            </button>

            <span> { currentCountryPage } </span>

            <button className="pagination__button box-shadow" 
            onClick={handleNext} 
            disabled={currentCountryPage === pageNumber}> 
                Next 
            </button>
        </nav>
    )
}