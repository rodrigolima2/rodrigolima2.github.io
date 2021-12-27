import useGlobal from './hooks/useGlobal';

import SideMenu from './components/SideMenu';
import SelectTheme from './components/SelectTheme';
import ButtonMenu from './components/ButtonMenu';

import './css/layout.css';
import './App.css';

function App() {
  const { openMenu, currentContent } = useGlobal();

  return (
    <div className={`App ${currentContent ? "" : "initial"} ${openMenu ? "menu--opened" : "menu--closed"} `}>
      <SideMenu />
      <SelectTheme />
      {!currentContent && <h1 className="App__title cursor--default">Rodrigo Index</h1>}
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
                {item.img && <img className="main__img" key={index + 4} src={item.img} alt="imagem" />}
              </>
            );
          })}
        </main>
      }
      <ButtonMenu />
    </div>
  );
}

export default App;