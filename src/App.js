import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Idk from './idk';

class App extends Component {
  constructor () {
    super ()
    this.state = {
      songs: null
    }
  }
  componentDidMount () {
    axios.get ('/api/music')
    .then (response => {
      console.log (response)
      this.setState (() => ({ songs: response.data }))
    })
    .catch (err => {
      console.log (err)
    })
  }

  // gets type from state to filter


  getType () {
    if (this.state.songs) {
      let allSongs = this.state.songs.slice ();
      if (this.state.type) {
      let filteredSongs = allSongs.filter ( (e) => {
          if (e.type === this.state.type) {
              return true;
          }
      })
      return filteredSongs.map((value) => {
        return <div key={value.id}><a href={value.url}>{value.song}</a></div>
      });
    }
    }
  }

  // gets solo from state to filter
  
  getSolo () {
    if (this.state.songs) {
      let allSongs = this.state.songs.slice ();
      console.log(typeof Boolean(this.state.solo))
      if (this.state.solo) {
      let filteredSongs = allSongs.filter ( (e) => {
          console.log(typeof e.solo)
          return e.solo + '' === this.state.solo
        })
      console.log("LOOK",filteredSongs)
      return filteredSongs.map((value) => {
        return <div key={value.id}><a href={value.url}>{value.song}</a></div>
      });
    }
    }
  }
   
  






  handleChange= (key, value) => {
  this.setState (() =>{
    return {[key]:value}
  })
 }

  render() {
    return (
      <div className="App">
      <Idk/>
      <div className="Top">
      </div>
    
        <body>
          Type:{this.state.type}
          
        <div>
          <select value= {this.state.type} onChange= { (event) => {this.handleChange("type", event.target.value)}}>
            <option value= "YASSS">YASSS</option>
            <option value= "Relax">Relax</option>
            <option value= "Old Sku">Old Sku</option>
            <option value= "Meh">Meh</option>
          </select >
        </div>
        <div>  
          {
            this.getType()
          }
        </div> 
        

          Driving: {this.state.solo}
        <div>
          <select value= {this.state.solo} onChange= { (event) => {this.handleChange("solo", event.target.value)}}>
            <option value="true">Driving by self</option>
            <option value="false">With buddies</option>
          </select >
        </div>
        <div>  
          {
            this.getSolo()
          }
        </div>
        </body>
      </div>
          
    );
  }
}

export default App;

