import React, { Component } from 'react'

export default class GaangItems extends Component {
    render() {
        return (
            <div>
                <ul>
                    <p>{this.props.name}</p>
                    <p>{this.props.title}</p>
                    <p><img src={this.props.img} alt='the Gaang'/></p>
                    <p>{this.props.element}</p>
                </ul>
            </div>
        )
    }
}
