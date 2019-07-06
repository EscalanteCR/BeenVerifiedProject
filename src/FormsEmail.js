import React, { Component } from "react";
import logo from "./logo.svg";
import lock from "./lock.svg";
import "./App.css";
import Datajson from "./data.json";
import { Table } from "react-bootstrap";
const elementos = Datajson;

class FormsEmail extends Component {

  state = {
    finalData:[]
  };

  handleSubmit = event => {
    event.preventDefault();
    // se le agrego el toLowercase para que en caso que el usuario ponga nick en vez de Nick el find funcione
    this.setState({
      finalData:
        elementos.data
    });
    if(this.state.email==null || this.state.email==''){
       alert("Email can not be null");
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
      if (resultArray== ''){
        alert("Email not found.. Try again");
        this.setState({
          email:
            null
        });
        console.log(this.state.email);
      }else {
        alert("Email found.. Its your lucky day");
          console.log(this.state.email);
      }
    }
  };
  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1 align= 'center' className='App-tittle' >Search Any Email Address.</h1>
          <p className='App-subtittle'>
            Start Here - Look up the owner's name, address, age, notes, phone
            numbers and relatives. See what you find!
          </p>
        </div>
        <div className= 'App-down'>
        <img src={lock} className="App-secondLogo" alt="lock" />
        <p className= 'App-subsubtittle'>
          Enter any email adress. They wont be notified.
        </p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="App-input"
            placeholder="Search..."
            name="email"
            onChange={this.handleInputChange}
          />
          <button className="App-button">GO!</button>
        </form>
      </header>
        <div className="App-details">
          <h1 className="App-center">Reverse Email Lookup</h1>
          <p className="App-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

      </div>
    );
  }
}
export default FormsEmail;
