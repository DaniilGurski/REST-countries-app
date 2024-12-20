import { Country, CountryExtended} from "./state/country";

export function isValidCountryData(data: unknown): data is CountryExtended[] {
    return Array.isArray(data);
}

export function isValidCountries(countries: unknown): countries is Country[] {
    return (Array.isArray(countries) && countries.length > 0); 
}