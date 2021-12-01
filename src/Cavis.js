
import React, { Component } from 'react'
import "./App.css"


export default class Cavis extends Component {
    state = {
       snows : [],
    }
    

    componentDidMount() {
        this.getSnows()
      }
    getSnows = async() => {
        
        
        const api_call = await fetch(`https://api.tvmaze.com/search/shows?q=snow`)
        const data = await api_call.json()
        // console.log(data)
        
        this.setState({
            snows: data,
        })
        console.log(this.state.snows);

    }
   


    render() {
        const {snows} = this.state
        return (
            <div className="bg-container">
               
               {snows.map((eachItem => { return(
               <div className="card">
                   <p>Score:{eachItem.score}</p>
               <p>Id:{eachItem.show.id}</p>
               <p>Language:{eachItem.show.language}</p>
               <p>Name:{eachItem.show.name}</p>
               </div>
)
                   
               }))}
              </div>
          
        )
    }
}
