import { atom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";
import { fetchCountriesByRegion, fetchCountryDetails } from "../api";
import { Country } from "../../types/state/country";

export const regionAtom = atom("");
export const searchedCountryNameAtom = atom("");
export const filteredCountriesAtom= atom<Country[]>([]); 
export const darkModeToggledAtom = atom(false);

export const countriesAtom = atomWithQuery((get) => ({
    queryKey: ['countries', get(regionAtom)],
    queryFn: () => fetchCountriesByRegion(get(regionAtom)),
    enabled: false,
}));


// FIXME: Can cause errors if invalid country name is entered.
export const oneCountryAtom = atomWithQuery((get) => ({
    queryKey: ['countries', get(regionAtom), get(searchedCountryNameAtom)],
    queryFn: () => fetchCountryDetails(get(searchedCountryNameAtom)),
    enabled: false,
}));