import { countryCardProps } from "../types/general/country-card";

export default function CountryCard({ data }: countryCardProps) {
    const { flags, name, population, region, capital } = data;

    return (
        <article className="country-card box-shadow bg-primary-100">
            <img src={flags.svg} alt={flags.alt} />
            
            <div className="country-card__text-container grid-flow">
                <h2 className="fw-extra-bold fs-300"> {name.common} </h2>

                <ul className="grid-flow" role="list">
                    <li> <span className="fw-semi-bold"> Population: </span> {population} </li>
                    <li> <span className="fw-semi-bold"> Region: </span> {region} </li>
                    <li> <span className="fw-semi-bold"> Capital: </span> {capital} </li>
                </ul>
            </div> 
        </article>
    )
}
