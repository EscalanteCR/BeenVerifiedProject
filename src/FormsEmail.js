import React, { Component } from "react";
import logo from "./logo.svg";
import lock from "./lock.svg";
import num1 from "./1.png";
import num2 from "./2.png";
import num3 from "./3.png";
import num4 from "./4.png";
import num5 from "./5.png";
import num6 from "./6.png";
import "./App.css";
import Datajson from "./data.json";
import report from "./report";
const elementos = Datajson;
class FormsEmail extends Component {
  state = {
      finalData:[],
      nameFinal:'',
     adressFinal:'',
     emailFinal:'',
     ageFinal:'',
     notesFinal:'',
     phoneNumbersFinal:'',
     relativesFinal:''
  };
  handleSubmit = event => {
    event.preventDefault();
    this.state.finalData=elementos.data;
    if(this.state.email===null || this.state.email===''){
       alert("Email can not be null");
    }else{
      const resultArray = this.state.finalData.filter(item =>
        item.email.toLowerCase().includes(this.state.email.toLowerCase())
      );
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
      }else {
        alert("Email found.. Its your lucky day");

        this.state.finalData=resultArray[0];
        this.state.nameFinal=this.state.finalData.name;
        this.state.addressFinal=this.state.finalData.address;
        this.state.emailFinal=this.state.finalData.email;
        this.state.ageFinal=this.state.finalData.age;
        this.state.notesFinal=this.state.finalData.notes;
        this.props.history.push('/reports')

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
        <img src={logo} className="App-logo"  />
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
        <form className='App-form' onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="App-input"
            placeholder="Search..."
            name="email"
            onChange={this.handleInputChange}
          />
          <button className="App-button"><p className='App-Go'>GO!</p></button>
        </form>
      </header>
        <div className="App-details">
          <br />
          <h1 className="App-center">Reverse Email Lookup</h1>
          <p className="App-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <br />
        <table width="100%"  cellPadding="10"  align="center" >
        <tbody>
          <tr >
           <td><img src={num1}/><p /></td>
           <td><font color="black" size='3'><h1 className="App-tittleColumns">Lorem Ipsum</h1><p className="App-pColumns">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></font></td>
           <td><img src={num4} /><p /></td>
           <td><font color="black" size='3'><h1 className="App-tittleColumns">Lorem Ipsum</h1><p className="App-pColumns">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></font></td>
          </tr>
          <tr>
           <td><img src={num2}/><p /></td>
           <td><font color="black" size='3'><h1 className="App-tittleColumns">Lorem Ipsum</h1><p className="App-pColumns">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></font></td>
           <td><img src={num5}/><p /></td>
           <td><font color="black" size='3'><h1 className="App-tittleColumns">Lorem Ipsum</h1><p className="App-pColumns">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></font></td>
          </tr>
          <tr>
           <td><img src={num3} /><p /></td>
           <td><font color="black" size='3'><h1 className="App-tittleColumns">Lorem Ipsum</h1><p className="App-pColumns">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></font></td>
           <td><img src={num6}/><p /></td>
           <td><font color="black" size='3'><h1 className="App-tittleColumns">Lorem Ipsum</h1><p className="App-pColumns">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></font></td>
          </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}
export default FormsEmail;
