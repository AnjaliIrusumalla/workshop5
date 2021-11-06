import React, { Component } from 'react'

export class Corporationbank extends Component {
    render(props) {
        return (
            <div>
                <h1>Corporationbank is located at {this.props.location} with account name of  {this.props.data.name}</h1>
            </div>
        )
    }
}

export default Corporationbank
