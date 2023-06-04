import  { useEffect } from "react";
import "./parallex2.scss";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import  Card  from "./components/Card";
import TextBlock from './components/TextBlock'


const App = () => {
  useEffect(() => {}, []);

  return (
    <div className="app">
      <div>
        <h1>AgriKaar</h1>
      <Parallax pages={3} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}></ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.25}></ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.25}></ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.25}></ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.25}></ParallaxLayer>
      </Parallax></div>
      <div>
        <TextBlock></TextBlock>
      </div>
      <div className="card-container"> 
      <Card></Card>
      <Card></Card>
      <Card></Card>

      </div>
    </div>
  );
};

export default App;
