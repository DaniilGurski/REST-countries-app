import { IoChevronDownSharp } from "react-icons/io5";
import { Select, Button, Popover, ListBox, ListBoxItem, SelectValue } from "react-aria-components"
import { MySelectProps } from "../../types/ui/my-select";

export default function MySelect({classNames, label, options, selectValueText, ...rest}: MySelectProps) {
    return (
        <Select aria-label={label} className={classNames.select} {...rest}>
            <Button className={classNames.button}>
                <SelectValue> {selectValueText} </SelectValue>
                <IoChevronDownSharp />
            </Button>

            <Popover>
                <ListBox items={options}>
                    {
                        ({ key, value }) => (
                            <ListBoxItem key={key} textValue={value}> 
                                {value} 
                            </ListBoxItem>
                        )
                    }
                </ListBox>
            </Popover>
        </Select>
    )
}
