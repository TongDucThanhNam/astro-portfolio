import {useStore} from '@nanostores/react';
import {Button} from '@nextui-org/button';
import {darkTheme, theme, toggleTheme} from '@/store/theme.ts';
import {FaMoon, FaSun} from "react-icons/fa";

interface Props {
    asLink?: boolean;
}

export default (props: Props) => {
    const $theme = useStore(theme);

    const icon = (
        $theme === darkTheme ? <FaMoon size={16}/> : <FaSun size={16}/>
    );

    const ariaLabel = $theme === darkTheme ? 'Switch to light theme' : 'Switch to dark theme';

    return <Button
        isIconOnly
        variant={"light"}
        onPress={toggleTheme}
        aria-label={ariaLabel}>
        {icon}
    </Button>
};