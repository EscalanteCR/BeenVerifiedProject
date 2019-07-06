import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Datajson from "./data.json";
import { Table } from "react-bootstrap";
const elementos = Datajson;

class FormsEmail extends Component {

  state = {
    finalData: elementos.data
  };

  handleSubmit = event => {
    event.preventDefault();
    // se le agrego el toLowercase para que en caso que el usuario ponga nick en vez de Nick el find funcione

    if(this.state.email==null){
       alert("Email not found.. Try again");
    }else{
      const resultArray = this.state.finalData.filter(item =>
        item.email.toLowerCase().includes(this.state.email.toLowerCase())
      );
      // esto es para que sea mas legible, se incluye en un array puesto que la tabla espera un array para el map, el resultArray te devuelve el primer objeto que cumpla la condicion
      // en este caso un objeto
      this.setState({
        finalData:
          !!this.state.email && resultArray ? resultArray : elementos.data
      });
    }
  };

  handleInputChange = event => {
    this.state.finalData=elementos.data;
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  renderPerson(person, index) {
    return (
      <tr key={index}>
        <td />
        <td>{person.name}</td>
        <td>{person.address}</td>
        <td>{person.email}</td>
        <td>{person.age}</td>
        <td>{person.notes}</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1 className='App-tittle'>Search Any Email Address.</h1>
          <p className='App-subtittle'>
            Start Here - Look up the owner's name, address, age, notes, phone
            numbers and relatives. See what you find!
          </p>
        </div>
      </header>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="App-input"
            placeholder="Search..."
            name="email"
            onChange={this.handleInputChange}
          />
          <button className="App-button">GO!</button>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                <th scope="col">Notes</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.finalData.map(this.renderPerson)}
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
export default FormsEmail;
