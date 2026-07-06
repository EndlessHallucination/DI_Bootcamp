import Car from "./Components/Car";
import Events from "./Components/Events";
import Phone from "./Components/Phone";
import Color from "./Components/Color";

function App() {
  const carInfo = {
    name: "Ford",
    model: "Mustang",
  };

  return (
    <div>
      <Car model={carInfo.model} />

      <hr />

      <Events />

      <hr />

      <Phone />

      <hr />

      <Color />
    </div>
  );
}

export default App;