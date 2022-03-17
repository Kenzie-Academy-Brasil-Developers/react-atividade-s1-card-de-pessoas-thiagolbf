import logo from "./logo.svg";
import "./App.css";
import "./Components/Developer";
import Developer from "./Components/Developer";

function App() {
  const firstDev = { name: "Thiago", age: 32, country: "Brasil" };
  const secondDev = { name: "Quon", age: 28, country: "China" };
  const thirdDev = { name: "Lan", age: 34, country: "Brasil" };

  return (
    <div className="App">
      <Developer
        name={firstDev.name}
        age={firstDev.age}
        country={firstDev.country}
      />

      <Developer
        name={secondDev.name}
        age={secondDev.age}
        country={secondDev.country}
      ></Developer>

      <Developer
        name={thirdDev.name}
        age={thirdDev.age}
        country={thirdDev.country}
      ></Developer>
    </div>
  );
}

export default App;
