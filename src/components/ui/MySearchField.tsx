import { SearchField, Input } from 'react-aria-components';
import { MySearchFieldProps } from '../../types/ui/my-search-field';
import { IoSearch } from "react-icons/io5";

export default function MySearchField({ label, placeholder, ...rest }: MySearchFieldProps) {
    return (
        <SearchField aria-label={label} {...rest} >
            <IoSearch />
            <Input placeholder={placeholder} />
        </SearchField>
    )
}
