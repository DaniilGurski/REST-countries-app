import { ToggleButton } from "react-aria-components";
import { MdOutlineDarkMode } from "react-icons/md";
import { useAtom } from 'jotai';
import { darkModeToggledAtom } from '../services/state/atoms';

export default function ThemeToggle({ ...rest }) {
    const [darkModeToggled, setDarkModeToggled] = useAtom(darkModeToggledAtom);

    return (
        <ToggleButton className="theme-toggle flex-flow align-center fs-200 fw-semi-bold" onPress={() => setDarkModeToggled(!darkModeToggled)}{...rest}>
                <MdOutlineDarkMode />
            Dark Mode
        </ToggleButton>
    )
}
