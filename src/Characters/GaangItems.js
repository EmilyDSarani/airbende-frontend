import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class GaangItems extends Component {
    render() {
        return (
            <div>
                <Link to ={`edit/${this.props.id}`}>
                <ul className ='allgang'>
                    <p className="gaang">{this.props.name}</p>
                    <p className="gaang">Also Known As: The {this.props.title}</p>
                    <p className="gaang">Main Element: {this.props.element}</p>
                    <p className="gaang"><img src={this.props.img} alt='the Gaang'/></p>
                 
                </ul>
                </Link>
            </div>
        )
    }
}
