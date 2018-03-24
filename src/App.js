import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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
        return <div key={value.id}>{value.song}</div>
      });
    }
    return allSongs.map((value) => {
      return <div key={value.id}>{value.song}</div>
    });  
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
        <header>
          type:{this.state.type}

        </header>
        <div>
          <select value= {this.state.type} onChange= { (event) => {this.handleChange("type", event.target.value)}}>
            <option value= "YASSS">YASSS</option>
            <option value= "Relax">Relax</option>
            <option value= "Old Sku">Old Sku</option>
            <option value= "Meh">Meh</option>
          </select >
        </div>  
          {
            this.getType()
          }
         
      </div>
    );
  }
}

export default App;
