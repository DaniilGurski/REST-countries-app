import { SelectProps } from "react-aria-components"

type Element = "select" | "button" | "popover" | "listbox";


export type MySelectProps = SelectProps & {
    label: string,
    // selectValue: string, 
    options: {key: string, value: string}[],
    classNames: Record<Element, string | undefined>
    selectValueText: string
}