import { Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes';
import { MoonIcon } from "../icons/moon-icon";
import { SunIcon } from "../icons/sun-icon";

const DarkmodeButton = () => {
    const { isDark } = useTheme();
    const { setTheme } = useNextTheme();

    return (
        <Switch
          bordered
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          size='md'
          iconOn={<MoonIcon filled size={undefined} height={undefined} width={undefined} label={undefined} />}
          iconOff={<SunIcon filled size={undefined} height={undefined} width={undefined} label={undefined} />}
        />
    )
}

export default DarkmodeButton;
