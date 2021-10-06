import React, { Component } from 'react'
import GaangItems from './GaangItems'


export default class GaangList extends Component {
    
    render() {
        return (
            < div className ='allgang'>
                {
                    this.props.hotman.map(gaang => <GaangItems 
                        name= {gaang.name}
                        id ={gaang.id}
                        title= {gaang.title}
                      //Ideally, I would like to show what bending they have right here, but I am not sure how to achieve that goal.  
                        img = {gaang.img}
                        />)
                }
            </div>
        )
    }
}
