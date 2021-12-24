import { useState } from "react";

import linkedinIcon from "../../assets/icons/linkedin-icon.ico";
import githubIcon from "../../assets/icons/github-icon.png";
import curriculoIcon from "../../assets/icons/curriculo-icon.png";

import "./styles.css";

function ButtonMenu() {
    const [activated, setActivated] = useState(false);

    return (
        <div className="ButtonMenu">
            <button className={`ButtonMenu__button ${activated ? "activated" : ""}`} onClick={() => setActivated(activated ? false : true)}>+</button>
            {activated &&
                <>
                    <a href="https://drive.google.com/file/d/1fv-hoIN9NIWkVHN5o9VUZW-WkSBTiAON/view?usp=sharing" target="_blank" rel="noreferrer">
                        <img className="ButtonMenu__icon top" src={curriculoIcon} alt="curriculo icon" />
                    </a>
                    <a href="https://github.com/rodrigolima2" target="_blank" rel="noreferrer">
                        <img className="ButtonMenu__icon diagonal" src={githubIcon} alt="github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/rodrigo-lima2/" target="_blank" rel="noreferrer">
                        <img className="ButtonMenu__icon left" src={linkedinIcon} alt="linkedin icon" />
                    </a>
                </>
            }
        </div>
    );
}

export default ButtonMenu;