import React, { Component } from 'react'

export default class GaangItems extends Component {
    render() {
        return (
            <div>
                <ul className ='allgang'>
                    <p className="gaang">{this.props.name}</p>
                    <p className="gaang">Also Known As: The {this.props.title}</p>
                    <p className="gaang">Main Element: {this.props.element}</p>
                    <p className="gaang"><img src={this.props.img} alt='the Gaang'/></p>
                 
                </ul>
            </div>
        )
    }
}
