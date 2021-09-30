import React, { Component } from 'react'

export default class GaangItems extends Component {
    render() {
        return (
            <div className ='allgang'>
                <ul>
                    <p className="gaang">{this.props.name}</p>
                    <p className="gaang">Also Known As: The {this.props.title}</p>
                    <p className="gaang">Main Element: {this.props.element}</p>
                    <p className="gaangimg"><img src={this.props.img} alt='the Gaang'/></p>
                 
                </ul>
            </div>
        )
    }
}
