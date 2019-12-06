import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import PlayersList from './components/PlayersList'

class App extends Component {
   constructor(p) {
       super(p);
       this.state = {
           playerData: [],
           url: 'http://localhost:5000/api/players'
       }
   }
   componentDidMount() {
      axios
          .get(this.state.url)
          .then(r =>{
          this.setState({playerData: r.data})
              console.log(this.state.playerData)
          })
    }

   render() {
       return (
           <div className = "App" >
               <h1>Women's World Cup Players</h1>
               {this.state.playerData ? <PlayersList data={this.state.playerData} /> : null}
           </div>
       )}
}

export default App;
