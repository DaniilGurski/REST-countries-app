import { SearchFieldProps } from "react-aria-components";

type MySearchFieldProps = SearchFieldProps & {
    label: string,
    placeholder?: string
}