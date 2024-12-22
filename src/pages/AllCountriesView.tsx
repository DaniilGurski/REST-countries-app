import { useEffect } from 'react'
import { useFilteredCountries } from '../hooks/useFilterCountries'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { countriesAtom, searchedCountryNameAtom, regionAtom, currentCountryPageAtom } from '../services/state/atoms'

import MySearchField from "../components/ui/MySearchField"
import Filter from '../components/Filter'
import CountryCard from '../components/CountryCard'
import Pagination from '../components/Pagination'

export default function AllCountriesView() {
    const { refetch }: { data: unknown, refetch: () => {}} = useAtomValue(countriesAtom); 
    const setSearchedCountryName = useSetAtom(searchedCountryNameAtom);
    const [region] = useAtom(regionAtom);
    const [currentCountryPage, setCurrentCountryPage] = useAtom(currentCountryPageAtom);

    const filteredCountries = useFilteredCountries();
    const countriesPerPage = 10
    const pageNumber = Math.ceil(filteredCountries.length / countriesPerPage);
    const endIndex = currentCountryPage * countriesPerPage;
    const startIndex = endIndex - countriesPerPage;
    const currentCountries = filteredCountries.slice(startIndex, endIndex); 

    useEffect(() => {
        if (region) {
            refetch();
            setCurrentCountryPage(1);
        }
    }, [region])


    useEffect(() => {
        if (filteredCountries.length === 0) {
            setCurrentCountryPage(0);
        
        } else if (filteredCountries.length > 0 && (currentCountryPage > pageNumber || currentCountryPage === 0)) {
            setCurrentCountryPage(1);
        }
    }, [filteredCountries])


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
                        currentCountries.map((country) => {
                            return (
                                <li key={country.name.common}> 
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

            <Pagination pageNumber={pageNumber} />
        </div>
    )
}
