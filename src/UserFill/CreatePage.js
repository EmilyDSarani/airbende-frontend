import React, { Component } from 'react'
import request from 'superagent'

export default class CreatePage extends Component {
    state={
        name: '',
        element: '',
        img: '',
        title: '',
    }
    // handleSubmit= (e) =>{
    //     e.preventDefault()
    //     await request.post('https://airbendercharacters.herokuapp.com/avatar/')
    //     .send({name: this.state.name, element: this.state.element, img: this.state.img, title: this.state.title})
    // }
    render() {
        return (
    <>
        <form onSubmit={this.handleSubmit}>
            <labels>
            Name
                <input  />

            </labels>
            <labels>
            Element
                <input />

            </labels>
            <labels>
            Img
                <input />

            </labels>
            <labels>
            Title
                <input />

            </labels>
        </form>
    </>
        )
    }
}
