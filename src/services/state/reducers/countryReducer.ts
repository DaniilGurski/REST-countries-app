import { COUNTRY_ACTIONS_TYPES } from "../actionTypes";
import { Country } from "../../../types/state/country";

export type State = {
    filteredCountries: Country[];
    region: string | null;
    searchedCountry: string | null;
}

export const INITIAL_STATE: State = {
    filteredCountries: [],
    region: null,
    searchedCountry: null
}

// TODO: Type this properly 
export default function countriesReducer(state: State, action: any) {
    switch(action.type) {
        case COUNTRY_ACTIONS_TYPES.SET_FILTERED_COUNTRIES:
            return {
                ...state,
                filteredCountries: action.payload.filter((country: any) => {
                    if (!state.searchedCountry) {
                        return;
                    }
                    country.name.toLowerCase().includes(state.searchedCountry.toLowerCase());
                })
            }

        case COUNTRY_ACTIONS_TYPES.SET_REGION:
            return {
                ...state,
                region: action.payload
            }


        case COUNTRY_ACTIONS_TYPES.SET_SEARCHED_COUNTRY:
            return {
                ...state,
                searchedCountry: action.payload
            }

        default: 
            return state
    }
}