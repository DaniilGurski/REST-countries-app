import { useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import { countriesAtom, searchedCountryNameAtom, filteredCountriesAtom } from "../services/state/atoms";
import { Country } from "../types/state/country";

function isValidCountries(countries: unknown): countries is Country[] {
    return (Array.isArray(countries) && countries.length > 0); 
}

export function useFilteredCountries() {
    const {data: countries} = useAtomValue(countriesAtom);
    const searchedCountryName = useAtomValue(searchedCountryNameAtom);
    const [filteredCountries, setFilteredCountries] = useAtom(filteredCountriesAtom);

    useEffect(() => {
        if (isValidCountries(countries) && searchedCountryName) {
            const filtered = countries.filter((country) => {
                const commonCountryName = country.name.common;
                return commonCountryName.toLowerCase().includes(searchedCountryName.toLowerCase());
            });

            setFilteredCountries(filtered);
        }
    }, [countries, searchedCountryName, setFilteredCountries]);
    return filteredCountries;
}
