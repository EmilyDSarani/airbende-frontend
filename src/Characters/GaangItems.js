import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class GaangItems extends Component {
    render() {
        return (
            <div className="gaang">
                
                <Link to ={`Edit/${this.props.id}`}>
                <ul>
                    <p>{this.props.name}</p>
                    <p>Also Known As: The {this.props.title}</p>
                    <p>Main Element: {this.props.element_name}</p>
                    <p><img className="img" src={this.props.img} alt='the Gaang'/></p>
                 
                </ul>
                </Link>
             
            </div>
        )
    }
}
