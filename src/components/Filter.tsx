import { useAtom } from "jotai"
import { regionAtom } from "../services/state/atoms"
import { Key } from "react-aria-components";
import MySelect from "./ui/MySelect"

export default function Filter() {
    const [region, setRegion] = useAtom(regionAtom);

    const options = [
        {key: "africa", value: "Africa"},
        {key: "america", value: "America"},
        {key: "asia", value: "Asia"},
        {key: "europe", value: "Europe"},
        {key: "oceania", value: "Oceania"},
    ]

    const handleRegionSelection = (key: Key) => {
        options.find(option => {
            if (option.key === key) {
                setRegion(option.value)
            }
        });
    }

    return (
        <MySelect
            classNames={{
                "select": "filter",
                "button": "filter__button"
            }}
            label="Filter by Region"
            options={options}
            selectValueText={region || "Filter by Region"}
            onSelectionChange={handleRegionSelection}
        />
    )
}
