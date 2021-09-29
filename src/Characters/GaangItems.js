import React, { Component } from 'react'

export default class GaangItems extends Component {
    render() {
        return (
            <div>
                <ul>
                    <p>{this.props.name}</p>
                    <p>Also Known As: The {this.props.title}</p>
                    <p>Main Element:{this.props.element}</p>
                    <p><img src={this.props.img} alt='the Gaang'/></p>
                 
                </ul>
            </div>
        )
    }
}
