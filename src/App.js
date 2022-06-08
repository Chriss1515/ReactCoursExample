import React from "react";
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
      <div className="Client1">
        <Voiture
          name="ODI"
          speed=" 200"
          hp=" 150"
          id="0001"
          user1="Chris"
          surname1="Walter"
        />
      </div>
      <div className="Client2">
        <Voiture
          name="BMW "
          speed=" 210"
          hp=" 100"
          id="0002"
          user1="Koala"
          surname1="Kamikaz"
        />
      </div>
      <div className="Client3">
        <Voiture
          name="TOYOTA "
          speed=" 300"
          hp=" 200"
          id="0003"
          user1="Bob"
          surname1="Lechant"
        />
      </div>
    </div>
  );
};
function Voiture(props) {
  return (
    <div>
      <div className="Voiture">
        <h3>Nouvelle Voiture {props.id}</h3>
        <p>Ma voiture est une {props.name}</p>
        <p>Avec une vitesse de {props.speed} km</p>
        <p>Et HP : {props.hp}</p>
        <div className="ClientInfo">
          <ClientInfo userName={props.user1} userSurnname={props.surname1} />
        </div>
      </div>
    </div>
  );
}
function ClientInfo(props) {
  return (
    <div className="ClientInfo">
      <h3>Info Client</h3>
      <p>Prenom : {props.userName}</p>
      <p>Nom : {props.userSurnname}</p>
    </div>
  );
}
