import React, { Component } from 'react'

export default class States extends Component {

constructor(props) {
    super(props)

    this.state = {
        name:"Venkata Surya Kalanjali"
         
    }
}
render() {
    setTimeout(()=>{
        this.setState({name:"I  V S Kalanjali"})
    },5000)
return (
            <div>
               <h1>{this.state.name}</h1> 
            </div>
        )
     }
   }

