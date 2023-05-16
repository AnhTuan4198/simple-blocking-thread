import React, {useEffect} from "react";
import bubleSort from "./sort";
import logo from './react.png';
import './index.css'

const numbers = [...Array(50000)].map(() =>
  Math.floor(Math.random() * 1000000)
);



let turn = 0;
function infiniteLoop() {
  const lgoo = document.querySelector(".App-logo");
  turn += 8;
  lgoo.style.transform = `rotate(${turn % 360}deg)`;
}



function App() {

  const [sortStatus, setSortStatus] = React.useState(false);
  useEffect(() => {
    const loopInterval = setInterval(infiniteLoop, 100);
    return () => clearInterval(loopInterval);
  }, []);

  const onSortClick = () => {
    setSortStatus(true);
    bubleSort(numbers);
    setSortStatus(false);
  };

  return (
    <div>
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <hr />
        </div>
      <section className="App-section">
        <button
          type="button"
          disabled={sortStatus}
          className="App-button"
          onClick={() => onSortClick()}
        >
          {sortStatus ? `Loading...` : `Buble Sort`}
        </button>
      </section>
      <section className="App-section">
      </section>
    </div>
  );
}

export default App;