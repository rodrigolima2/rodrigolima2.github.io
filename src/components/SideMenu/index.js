import { useState } from 'react';

import useGlobal from '../../hooks/useGlobal';

import sideMenuIcon from "../../assets/side-menu-icon.svg";

import content from "../../data/content";

import "../../css/layout.css";
import "./styles.css";

function SideMenu() {
    const { openMenu, setOpenMenu, setCurrentContent } = useGlobal();

    const [selected, setSelected] = useState(false);

    function handleOpenMenu() {
        return openMenu ? setOpenMenu(false) : setOpenMenu(true);
    }

    function handleSelected(index) {
        setSelected(index);
    }

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <aside className={`SideMenu ${openMenu ? "open" : "close"}`}>
            <div className="SideMenu__header">
                <img className="SideMenu__icon cursor--pointer" onClick={handleOpenMenu} src={sideMenuIcon} alt="icone abrir fechar menu" />
            </div>
            {openMenu &&
                <>
                    {content &&
                        content.map((item, index) => {
                            return (
                                <h2
                                    key={index}
                                    className={`SideMenu__item cursor--pointer ${selected === index ? "selected" : "not-selected"}`}
                                    onClick={() => {
                                        handleSelected(index)
                                        setCurrentContent(item)
                                        scrollToTop();
                                    }}
                                >
                                    {item.title}
                                </h2>
                            );
                        })
                    }
                </>
            }
        </aside>
    );
}

export default SideMenu;