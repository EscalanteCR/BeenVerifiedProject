import React, { Component } from "react";
import "./App.css";
import Datajson from "./data.json";
import logo from "./logo.svg";
import person from "./icn_person.svg";
import lock from "./lock.svg";
import FormsEmail from "./FormsEmail"

const elementos = Datajson;

class Reports extends Component {

  state = {
    finalData:[]
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
      if (resultArray=== ''){
        alert("Email not found.. Try again");
        this.setState({
          email:
            null
        });
      }else {
        alert("Email found.. Its your lucky day");
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
      <header className="App-headerReport">
      <img src={logo} className="App-logoReport" alt="logo" />
      </header>
        <div className="App-details">
          <br />
          <h1 className="App-centerTittleReport">Result</h1>
          <p className="App-centerReport">Look at the result below to see the details of the person you’re searched for.</p>
        <table width="100%"  cellPadding="10"  align="center" border-botton="3" >
        <tbody align="center">
          <tr>
          <td><img src={person}/><p /></td>
          <td colSpan="4"><h1 className="App-centerTittleReportName">Name</h1><p className="App-pColumnsSubtittle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></td>
          </tr>
          <tr>
           <td><p /></td>
           <td width="50%"><font color="black" size='3'><h1 className="App-tittleColumnsReport">Adress</h1><p className="App-pColumns">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></font></td>
           <td><p /></td>
           <td width="50%"><font color="black" size='3'><h1 className="App-tittleColumnsReport">Phone Numbers</h1><p className="App-pColumns">(555) 555-5555</p></font></td>
          </tr>
          <tr>
           <td><p /></td>
           <td width="50%"><font color="black" size='3'><h1 className="App-tittleColumnsReport">Email</h1><p className="App-pColumns">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></font></td>
           <td><p /></td>
           <td width="30%"><font color="black" size='3'><h1 className="App-tittleColumnsReport">Relatives</h1><p className="App-pColumns">Lorena aliqua.</p></font></td>
          </tr>
          </tbody>
        </table>
        </div>
        <div className='App-finalSearch'>
        <div>
          <h1 align= 'center' className='App-tittle' >Can’t Find The Right Person?</h1>
          <p className='App-subtittle'>
            Try Again - Make a new search
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
        <div className= 'App-downReport'>
        <img src={lock} className="App-secondLogo" alt="lock" />
        <p className= 'App-subsubtittle'>
          Enter any email adress. They wont be notified.
        </p>
        </div>
        </div>
        <div className= 'App-fitPage'>
        <table width="90%"  cellPadding="5"  align="center" >
        <tbody align="center">
          <tr>
          <td><p className='App-fitPageText'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p></td>
          <td><p className='App-fitPageRight'>
            Terms | Privacy
          </p></td>
          </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}
export default Reports;
