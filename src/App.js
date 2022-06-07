import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Garage />
    </div>
  );
}
const Garage = (a) => {
  return (
    <div>
      <Voiture name="ODI" speed=" 200" hp=" 150" />
      <Voiture name="BMW " speed=" 100" hp=" 100" />
      <h1>ma voiture est une</h1>
    </div>
  );
};
function Voiture(props) {
  return (
    <div>
      {props.name}
      {props.speed}
      {props.hp}
    </div>
  );
}
