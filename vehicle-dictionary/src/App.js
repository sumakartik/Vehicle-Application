import React from "react";
import TopBar from "./components/TopBar";
import Manufacturers from "./components/Manufacturers";
import SearchBar from "./components/SearchBar";
import { Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./app.css";
import "./car.jpeg";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      manufacturer: "",
      welcome: "",
      make: "",
      model: "",
      vehicleType: "",
      trim: "",
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.getVehicleData = this.getVehicleData.bind(this);
  }

  setVehicleState(data) {
    console.log(data, "hopefully vin data");
    this.setState({ manufacturer: data.Results[0].Manufacturer });
    this.setState({ make: data.Results[0].Make });
    this.setState({ model: data.Results[0].Model });
    this.setState({ vehicleType: data.Results[0].VehicleType });
    this.setState({ trim: data.Results[0].Trim });
  }

  getVehicleData(searchTerm) {
    console.log(searchTerm, "getVehicleDatatest");
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${searchTerm}*BA?format=JSON`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setVehicleState(data));
  }

  handleSearchClick(e) {
    let searchBar = document.querySelector("#search-bar");
    console.log(`You searched`, this.state.searchTerm);
    searchBar.value = "";
    e.preventDefault();

    this.getVehicleData(this.state.searchTerm.toLowerCase());
  }

  handleSearchChange(e) {
    console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <Link to="/">
          <car />
        </Link>
        <img src="car.jpeg" alt="" />
        <TopBar />
        <main>
          {/* <Link to="/">
            <car />
          </Link>
          <img src="car.jpeg" alt="" /> */}
          <SearchBar
            handleSearchChange={this.handleSearchChange}
            handleSearchClick={this.handleSearchClick}
            getVehicleData={this.getVehicleData}
          />
          <h2>PLEASE SEARCH A VIN TO LEARN VEHICLE SPECS</h2>
          <h3>
            {" "}
            {this.state.manufacturer
              ? "Manufacturer: " + this.state.manufacturer
              : null}{" "}
          </h3>
          <h3> {this.state.make ? "Make: " + this.state.make : null} </h3>
          <h3> {this.state.model ? "Model: " + this.state.model : null} </h3>
          <h3>
            {" "}
            {this.state.vehicleType
              ? "Type: " + this.state.vehicleType
              : null}{" "}
          </h3>
          <h3> {this.state.trim ? "Trim: " + this.state.trim : null} </h3>
        </main>
        {/* <footer>
          <div
            class="tenor-gif-embed"
            data-postid="23932350"
            data-share-method="host"
            data-aspect-ratio="1.33333"
            data-width="100%"
          >
            <a href="https://tenor.com/view/volkswagen-beetle-dancing-dance-car-cars-gif-23932350">
              Volkswagen Beetle Dancing GIF
            </a>
          </div>
        </footer> */}
      </div>
    );
  }
}
export default App;
