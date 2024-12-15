import { SearchField, Input } from 'react-aria-components';
import { MySearchFieldProps } from '../../types/ui/my-search-field';

export default function MySearchField({ label, placeholder, ...rest }: MySearchFieldProps) {
    return (
        <SearchField aria-label={label} {...rest} >
            <Input placeholder={placeholder} />
        </SearchField>
    )
}
