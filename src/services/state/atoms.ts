import { atom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";
import { fetchCountriesByRegion, fetchCountryDetails } from "../api";
import { Country } from "../../types/state/country";

export const regionAtom = atom("");
export const viewedCountryNameAtom = atom("");
export const selectedCountryAtom = atom("");
export const searchedCountryNameAtom = atom("");
export const filteredCountriesAtom= atom<Country[]>([]); 
export const darkModeToggledAtom = atom(false);
export const currentCountryPageAtom = atom(0);

export const countriesAtom = atomWithQuery((get) => ({
    queryKey: ['countries', get(regionAtom)],
    queryFn: () => fetchCountriesByRegion(get(regionAtom)),
    enabled: false,
}));


export const countryAtom = atomWithQuery((get) => ({
    queryKey: ['country', get(viewedCountryNameAtom)],
    queryFn: () => fetchCountryDetails(get(viewedCountryNameAtom)),
    enabled: true,
}));