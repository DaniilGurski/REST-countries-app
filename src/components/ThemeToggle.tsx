import { ToggleButton } from "react-aria-components";
import { CiDark } from "react-icons/ci";
import { useAtom } from 'jotai';
import { darkModeToggledAtom } from '../services/state/atoms';

export default function ThemeToggle({ ...rest }) {
    const [darkModeToggled, setDarkModeToggled] = useAtom(darkModeToggledAtom);

    return (
        <ToggleButton className="theme-toggle flex-flow align-center fs-200" {...rest}>
            <CiDark />
            Dark Mode
        </ToggleButton>
    )
}
