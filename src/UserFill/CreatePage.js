import React, { Component } from 'react'
import request from 'superagent'

export default class CreatePage extends Component {
    state={
        name: '',
        element: '',
        img: '',
        title: '',
    }
    handleSubmit = async (e)  =>{
        e.preventDefault()
        await request
            .post('https://airbendercharacters.herokuapp.com/avatar')
            .send({
                name: this.state.name, 
                element: this.state.element, 
                img: this.state.img, 
                title: this.state.title
            })
            console.log(this.props)
       this.props.history.push('/Gaang') //this is like the window relocate
    }
    handleNameSubmit = async(e) =>{
        await this.setState({name:e.target.value});
    }
    handleElementSubmit = async(e) =>{
        await this.setState({element:e.target.value});
    } 
    handleImgSubmit = async(e) =>{
        await this.setState({img:e.target.value});
    } 
    handleTitleSubmit = async(e) =>{
        await this.setState({title:e.target.value});
    } 
    render() {
        console.log(this.state)
        return (
    <>
        <form onSubmit={this.handleSubmit}>
            <labels>
            Name
                <input className="input" onChange={this.handleNameSubmit} />

            </labels>
            <labels>
            Element
                <input className="input" onChange={this.handleElementSubmit} />

            </labels>
            <labels>
            Img
                <input className="input" onChange={this.handleImgSubmit}/>

            </labels>
            <labels>
            Title
                <input className="input" onChange={this.handleTitleSubmit}/>

            </labels>
            <button className = "button">Submit</button>
        </form>
    </>
        )
    }
}
