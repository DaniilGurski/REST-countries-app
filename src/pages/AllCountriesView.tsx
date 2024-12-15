import { useEffect } from 'react'
import { useFilteredCountries } from '../hooks/useFilterCountries'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { countriesAtom, searchedCountryNameAtom, regionAtom } from '../services/state/atoms'

import MySearchField from "../components/ui/MySearchField"
import Filter from '../components/Filter'
import CountryCard from '../components/CountryCard'

export default function AllCountriesView() {
    const { data: countries, refetch}: { data: unknown, refetch: () => {}} = useAtomValue(countriesAtom); 
    const [searchedCountryName, setSearchedCountryName] = useAtom(searchedCountryNameAtom);
    const [region] = useAtom(regionAtom);
    const filteredCountries = useFilteredCountries();


    useEffect(() => {
        if (region) {
            refetch();
        }
    }, [region])


    return (
        <div className="container"> 
            <header>
                <MySearchField
                label="search for a country" 
                placeholder="Search for a country…"
                onChange={(value) => {
                    setSearchedCountryName(value);
                }} />

                <Filter />
            </header>

            <section>
                <ul> 
                    {
                        filteredCountries.map((country) => {
                            return (
                                <li> 
                                    <CountryCard
                                    key={country.name.toString()}
                                    data={country}
                                    /> 
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </div>
    )
}
