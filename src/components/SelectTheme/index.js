import { useEffect } from 'react';
import { useLocalStorage } from 'react-use';

import colorIcon from "../../assets/icons/color-icon.png";

import "./styles.css";

function SelectTheme() {
    const [activeTheme, setActiveTheme] = useLocalStorage("theme", 0);

    const themes = [
        {
            themeColor: "#4E9ECB",
            themeColorShadow: "#3f90be",
            underlineColor: "rgb(255, 0, 0)",
            scrollColor: "rgb(211, 0, 0)",
            textExampleColor: "#a71616"
        },
        {
            themeColor: "#214254",
            themeColorShadow: "#17303e",
            underlineColor: "#00ff66",
            scrollColor: "#009d3f",
            textExampleColor: "#147002"
        },
        {
            themeColor: "#5a0000",
            themeColorShadow: "#340303",
            underlineColor: "#ffe200",
            scrollColor: "#d1b900",
            textExampleColor: "#6c6315"
        },
        {
            themeColor: "#000000",
            themeColorShadow: "#181818",
            underlineColor: "rgb(4 0 255)",
            scrollColor: "rgb(3 0 157)",
            textExampleColor: "rgb(0 0 0)"
        },
        {
            themeColor: "#383838",
            themeColorShadow: "#141414",
            underlineColor: "rgb(181 181 181)",
            scrollColor: "rgb(84 84 84)",
            textExampleColor: "rgb(112 112 112)"
        }
    ];

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