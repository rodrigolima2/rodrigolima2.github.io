import { useEffect } from 'react';
import { useLocalStorage } from 'react-use';

import useGlobal from '../../hooks/useGlobal';

import themes from '../../data/themes';

import colorIcon from "../../assets/icons/color-icon.png";

import "./styles.css";

function SelectTheme() {
    const [activeTheme, setActiveTheme] = useLocalStorage("theme", 0);

    const { openMenu } = useGlobal();

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

            root.style.setProperty("--theme-color", themes[activeTheme].themeColor);
            root.style.setProperty("--theme-color-shadow", themes[activeTheme].themeColorShadow);
            root.style.setProperty("--underline-color", themes[activeTheme].underlineColor);
            root.style.setProperty("--scroll-color", themes[activeTheme].scrollColor);
            root.style.setProperty("--text-example-color", themes[activeTheme].textExampleColor);
        }

        setTheme();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTheme]);

    return (
        <div className={`SelectTheme ${openMenu ? "menu-top--opened" : "menu-top--closed"}`} onClick={handleActiveTheme}>
            <img className="SelectTheme__icon" src={colorIcon} alt="icone de cor" />
        </div>
    );
}

export default SelectTheme;