import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{display: "flex", justifyContent:"center", alignItems:"center", backgroundColor:"lightblue", padding:"10px"}}>
        <h1 style={{margin:"10px"}}>Movie App</h1>
        <h2 style={{margin:"10px"}}>Favorite</h2>
      </div>
    );
  }
}
