import { countryCardProps } from "../types/general/country-card";

export default function CountryCard({ data }: countryCardProps) {
    const { flags, name, population, region, capital } = data;

    return (
        <article className="country-card">
            <img src={flags.svg} alt={flags.alt} />

            <h2> {name.common} </h2>

            <ul>
                <li> Population: {population} </li>
                <li> Region: {region} </li>
                <li> Capital: {capital} </li>
            </ul>
        </article>
    )
}
