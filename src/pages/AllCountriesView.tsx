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
        <div className="all-countries grid-flow"> 
            <header className="flex-flow justify-sb flex-wrap">
                <MySearchField
                label="search for a country" 
                placeholder="Search for a country…"
                className="search-field bg-primary-100 flex-flow align-center"
                onChange={(value) => {
                    setSearchedCountryName(value);
                }} />

                <Filter />
            </header>

            <section className="">
                <ul className="country-list" role="list"> 
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
