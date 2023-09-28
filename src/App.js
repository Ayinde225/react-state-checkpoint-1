import React, { Component } from "react";
import "./App.css";
import img from "./mypicture.jpg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Mustapha Ayinde Abdul Aziz",
        bio: "un developpeur passionné par le monde du web",
        imgSrc: img,
        profession: "Developpeur React js",
      },
      show: false,
      interval: 0,
    };
  }

  toggleDisplay = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ interval: prevState.interval + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, interval } = this.state;

    return (
      <div className="App">
        <h1>MON PROFILE</h1>
        <button className="toggle-button" onClick={this.toggleDisplay}>
          Afficher le Profil de Ayinde
        </button>
        {show && (
          <div className="profil">
            <img className="App-img" src={imgSrc} alt={imgSrc} />
            <p>Nom: {fullName}</p>
            <p>Biographie: {bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p className="interval">
          Temps depuis le montage du composant : {interval} secondes
        </p>
      </div>
    );
  }
}

export default App;
