// HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

// Components
import Temp from "./Components/temp";
import Master from "./Components/master";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={ Temp } /> 
      <HomeLayoutHOC path="/:type" exact component={ Master } /> 
    </>
  );
}

export default App;
