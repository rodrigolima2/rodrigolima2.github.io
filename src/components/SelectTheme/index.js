import { useEffect } from 'react';
import { useLocalStorage } from 'react-use';

import themes from '../../data/themes';

import colorIcon from "../../assets/icons/color-icon.png";

import "./styles.css";

function SelectTheme() {
    const [activeTheme, setActiveTheme] = useLocalStorage("theme", 0);

    function handleActiveTheme() {
        if (activeTheme < themes.length - 1) {
            setActiveTheme(activeTheme + 1);
        } else {
            setActiveTheme(0);
        }
    }

    useEffect(() => {
        if (activeTheme >= themes.length || typeof (activeTheme) !== 'number') {
            setActiveTheme(0);
            return;
        }

        function setTheme() {
            const root = document.querySelector(':root');

            const theme = {
                themeColor: ["--theme-color", themes[activeTheme].themeColor],
                themeColorShadow: ["--theme-color-shadow", themes[activeTheme].themeColorShadow],
                underlineColor: ["--underline-color", themes[activeTheme].underlineColor],
                scrollColor: ["--scroll-color", themes[activeTheme].scrollColor],
                textExampleColor: ["--text-example-color", themes[activeTheme].textExampleColor]
            };

            root.style.setProperty(theme.themeColor[0], theme.themeColor[1]);
            root.style.setProperty(theme.themeColorShadow[0], theme.themeColorShadow[1]);
            root.style.setProperty(theme.underlineColor[0], theme.underlineColor[1]);
            root.style.setProperty(theme.scrollColor[0], theme.scrollColor[1]);
            root.style.setProperty(theme.textExampleColor[0], theme.textExampleColor[1]);
        }

        setTheme();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTheme]);

    return (
        <div className="SelectTheme" onClick={handleActiveTheme}>
            <img className="SelectTheme__icon" src={colorIcon} alt="icone de cor" />
        </div>
    );
}

export default SelectTheme;