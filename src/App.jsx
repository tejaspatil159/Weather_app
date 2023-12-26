import "./App.css";
import CityView from "./features/city/CityView";

function App() {
  // const cityName = DebouncingCity(handleChange());
  // console.log(cityName);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        <CityView />
      </h1>
    </div>
  );
}

export default App;
