import { useState } from 'react';

import useGlobal from './hooks/useGlobal';

import SideMenu from './components/SideMenu';
import SelectTheme from './components/SelectTheme';
import ButtonMenu from './components/ButtonMenu';
import ModalOpenImage from './components/ModalOpenImage';

import arrowChangeTheme from './assets/icons/arrow-change-theme.svg';
import arrowContact from './assets/icons/arrow-contact.svg';

import './css/layout.css';
import './App.css';

function App() {
  const { openMenu, setOpenModalImage, currentContent } = useGlobal();

  const [sendImgToModalImage, setSendImgToModalImage] = useState("");

  function handleModalImage(img) {
    if (img !== sendImgToModalImage) {
      setSendImgToModalImage(img);
    }

    setOpenModalImage(true);
  }

  return (
    <div className={`App ${currentContent ? "" : "initial"} ${openMenu ? "menu--opened" : "menu--closed"} `}>
      <SideMenu />
      <SelectTheme />
      {!currentContent &&
        <>
          <h1 className="App__title cursor--default">Rodrigo Index</h1>
          <img className={`App__img change-theme ${openMenu ? "" : "closed"}`} src={arrowChangeTheme} alt="seta mudar tema" />
          <img className="App__img contact" src={arrowContact} alt="seta contato" />
        </>
      }
      {currentContent &&
        <main className="App__main">
          <h1 className="main__title">{currentContent.title}</h1>
          {currentContent.content.map((item, index) => {
            return (
              <>
                {item.subtitle && <h2 className="main__subtitle" key={index}>{item.subtitle}</h2>}
                {item.subtitle2 && <h3 className="main__subtitle2" key={index + 1}>{item.subtitle2}</h3>}
                {item.text && <p className="main__text" key={index + 2}>{item.text}</p>}
                {item.example && <p className="main__example" key={index + 3}>{item.example}</p>}
                {item.img && <img className="main__img" key={index + 4} src={item.img} alt="imagem" onClick={() => handleModalImage(item.img)} />}
                {item.ul &&
                  <ul className="main__ul">
                    {item.ul.map((ulItem, ulIndex) => {
                      return (
                        <li className="main__li" key={ulIndex + 5}>{ulItem}</li>
                      );
                    })}
                  </ul>
                }
                {item.code &&
                  <div className="main__code-container">
                    {item.code.map((codeItem, codeIndex) => {
                      return (
                        <div className="code-container__content">
                          <span className="main__code-number">{codeIndex + 1}</span>
                          <span className="main__code" key={codeIndex + 6}>{codeItem}</span>
                        </div>
                      );
                    })
                    }
                  </div>
                }
              </>
            );
          })}
        </main>
      }
      <ButtonMenu />
      <ModalOpenImage img={sendImgToModalImage} />
    </div>
  );
}

export default App;