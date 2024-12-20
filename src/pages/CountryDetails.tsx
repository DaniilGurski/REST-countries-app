import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useAtom, useAtomValue } from "jotai";
import { countryAtom, viewedCountryNameAtom } from "../services/state/atoms";
import { useEffect } from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { isValidCountryData } from "../types/typeguards";

export default function CountryDetails() {
    const { countryName } = useParams();
    const [viewedCountryName, setViewedCountryName] = useAtom(viewedCountryNameAtom);

    if (!countryName) {
        return <p> Country name is not specified. </p>;
    }

    useEffect(() => {
        setViewedCountryName(countryName);
    }, [countryName]);
    
    const { data, isLoading, refetch}: UseQueryResult = useAtomValue(countryAtom);
    
    useEffect(() => {
        refetch();
    }, [viewedCountryName])


    if (isLoading) return <p> Loading ... </p>;

    if (!isValidCountryData(data)) return <p> Country not found. </p>;

    const { flags } = data[0];

    return (
        <div className="country-details">
            <header className="country-details__header">
                <Link to="/" className="country-details__back-btn flex-flow align-center">
                    <IoIosArrowRoundBack />
                    Back
                </Link>
            </header>

            <section className="country-details__content">
                <img src={flags.png} alt={`${viewedCountryName} flag`} className="country-details__flag" />
            </section>
        </div>
    )
}
