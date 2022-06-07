import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Garage />
    </div>
  );
}
const Garage = () => {
  return (
    <div className="Garage">
      <Voiture name="ODI" speed=" 200" hp=" 150" />
      <Voiture name="BMW " speed=" 210" hp=" 100" />
      <Voiture name="TOYOTA " speed=" 300" hp=" 200" />
    </div>
  );
};
function Voiture(props) {
  return (
    <div className="Voiture">
      <h3>Nouvelle Voiture</h3>
      <p>Ma voiture est une {props.name}</p>
      <p>Avec une vitesse de {props.speed} km</p>
      <p>Et HP : {props.hp}</p>
    </div>
  );
}
