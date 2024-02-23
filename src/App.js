import "./index.css";
import Content from "./components/Content";
import { useEffect, useState } from "react";

function App() {
  let randomColor = () => {
    return Math.floor(Math.random() * 255);
  };

  const [color, setColor] = useState(
    `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
  );

  let circleStyles = {
    backgroundColor: color,
  };

  useEffect(() => {
    setInterval(
      () =>
        setColor(`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`),
      1000
    );
  }, []);

  console.log(color);
  return (
    <div
      className="App"
      onClick={() =>
        setColor(`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`)
      }
    >
      <div className="circle" style={circleStyles}></div>

      <div className="borderContainer">
        <Content city="SEOUL" />
        <Content city="LONDON" />
        <Content city="TOKYO" />
      </div>
    </div>
  );
}

export default App;
