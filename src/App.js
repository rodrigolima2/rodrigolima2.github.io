import useGlobal from './hooks/useGlobal';

import SideMenu from './components/SideMenu';

import './css/layout.css';
import './App.css';

function App() {
  const { openMenu, currentContent } = useGlobal();

  return (
    <div className={`App ${currentContent ? "" : "initial"}`} style={{ marginLeft: openMenu ? "20%" : "66px" }}>
      <SideMenu />
      {!currentContent && <h1 className="App__title cursor--default">Rodrigo Index</h1>}
      {currentContent &&
        <main className="App__main">
          <h1 className="main__title">{currentContent.title}</h1>
          {currentContent.content.map((item, index) => {
            return (
              <>
                {item.subtitle && <h2 className="main__subtitle" key={index}>{item.subtitle}</h2>}
                {item.text && <p className="main__text" key={index + 1}>{item.text}</p>}
                {item.img && <img className="main__img" src={item.img} alt="imagem" />}
              </>
            );
          })}
        </main>
      }
    </div>
  );
}

export default App;