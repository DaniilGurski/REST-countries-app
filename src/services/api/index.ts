const fetchThis = async (url: string, errorMessage: string) => {
    const res = await fetch(url); 
    if (!res.ok) {
        throw new Error(errorMessage)
    }

    const data = await res.json();
    return data; 
}

export const fetchCountriesByRegion = async (region: string) => {
    return await fetchThis(
        `https://restcountries.com/v3.1/region/${region.toLowerCase()}?fields=name,population,region,capital,flags`, 
        "Failed to fetch countries"
    )
}

export const fetchCountryDetails = async (name: string) => {
    return await fetchThis(
        `https://restcountries.com/v3.1/name/${name}?fields=name,flags,native-name,population,region,sub-region,capital,tld,currencies,languages,borders`, 
        "Failed to fetch one"
    )
}
