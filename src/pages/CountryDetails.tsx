import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useAtom, useAtomValue } from "jotai";
import { countryAtom, viewedCountryNameAtom } from "../services/state/atoms";
import { useEffect } from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { isValidCountryData } from "../types/typeguards";
import { convertParam } from "../utils/formatting";

export default function CountryDetails() {
    const { countryName } = useParams();
    const [viewedCountryName, setViewedCountryName] = useAtom(viewedCountryNameAtom);

    if (!countryName) {
        return <p> Country name is not specified. </p>;
    }

    useEffect(() => {
        setViewedCountryName(convertParam(countryName));
        console.log(convertParam(countryName))
    }, [countryName]);
    
    const { data, isLoading, refetch}: UseQueryResult = useAtomValue(countryAtom);
    
    useEffect(() => {
        refetch();
    }, [viewedCountryName])


    if (isLoading) return <p> Loading ... </p>;

    if (!isValidCountryData(data)) return <p> Country not found. </p>;

    const { 
        name, 
        population, 
        region, 
        subregion, 
        capital, 
        flags,
        tld,
        currencies,
        languages,
        borders } = data[0];

    const nativeNameKey = Object.keys(name.nativeName)[0];

    return (
        <div className="country-details grid-flow">
            <header className="country-details__header">
                <Link to="/" className="country-details__back-btn flex-flow align-center bg-primary-100 box-shadow">
                    <IoIosArrowRoundBack />
                    Back
                </Link>
            </header>

            <section className="country-details__content grid-flow">
                <img src={flags.png} alt={`${viewedCountryName} flag`} className="country-details__flag" />

                <div className="grid-flow">
                    <h2 className="fs-500 fw-extra-bold"> {name.common} </h2>

                    <div className="country-details__detail-lists grid-flow">
                        <div className="grid-flow">
                            <ul className="grid-flow" role="list">
                                <li><span className="fw-semi-bold"> Native Name: </span> {name.nativeName[nativeNameKey].common} </li>
                                <li><span className="fw-semi-bold"> Population: </span> {population} </li>
                                <li><span className="fw-semi-bold"> Region: </span> {region} </li>
                                <li><span className="fw-semi-bold"> Sub Region: </span> {subregion}</li>
                                <li><span className="fw-semi-bold"> Capital: </span> {capital} </li>
                            </ul>
                            <ul className="grid-flow" role="list">
                                <li><span className="fw-semi-bold"> Top Level Domain: {tld} </span></li>
                                <li className="flex-flow">
                                    <span className="fw-semi-bold"> Currencies: </span> 
                                    <ul className="enumeration-list" role="list">
                                        {
                                            Object.keys(currencies).map(currency => <li key={currency}> {currencies[currency].name} </li>)
                                        } 
                                    </ul>
                                </li>
                                <li className="flex-flow">
                                    <span className="fw-semi-bold"> Languages: </span> 
                                    <ul className="enumeration-list flex-flow" role="list">
                                        {
                                            Object.keys(languages).map(language => <li key={language}> {languages[language]} </li>)
                                        } 
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="country-details__border-countries grid-flow">
                            <span className="fs-fixed-100 fw-semi-bold">  Border Countries: </span>

                            <ul className="flex-flow" role="list">
                                {
                                    borders.map(country => {
                                        return <li className="country-details__border box-shadow bg-primary-100" key={country}> {country} </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div> 
            </section>
        </div>
    )
}