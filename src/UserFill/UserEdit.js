import React, { Component } from 'react'
//import request from 'superagent'
import {
    getElements, 
    postAvatar
} from '../Utils/fetch-utils'
export default class CreatePage extends Component {
    state={
        name: '',
        elements: [],
        img: '',
        title: '',
        element_id: 1,
    }
    handleSubmit = async (e)  =>{
        e.preventDefault()
        await postAvatar(this.state)
        // await request
            // .post('https://airbendercharacters.herokuapp.com/avatar')
            // .send({
            //     name: this.state.name, 
            //     element_id: this.state.element_id, 
            //     img: this.state.img, 
            //     title: this.state.title
            // })
           
       this.props.history.push('/Gaang') //this is like the window relocate
    }
    // handleNameSubmit = async(e) =>{
    //     await this.setState({name:e.target.value});
    // }

  componentDidMount= async() => {
        const elements = await getElements()

        this.setState({elements : elements});
    } 
 

    render() {
        console.log(this.state)
        return (
    <>
        <form onSubmit={this.handleSubmit}>
            <label>
            Name
                <input className="input"  onChange={(e) => this.setState({name: e.target.value})} />
            
            </label>
            <label>
            Element
                <select className="input" onChange={(e) => this.setState({element_id: Number(e.target.value)})} >
                    {this.state.elements.map(element => 
                <option value={element.element_id}>
                    {element.element_name}
                    
                </option>)}
                </select>
               
            </label>
            <label>
            Img
                <input className="input" onChange={(e) => this.setState({img: e.target.value})}/>
           
            </label>
            <label>
            Title
                <input className="input" onChange={(e) => this.setState({title: e.target.value})}/>
            
            </label>
            <button className = "button">Submit</button>
        </form>
    </>
        )
    }
}
