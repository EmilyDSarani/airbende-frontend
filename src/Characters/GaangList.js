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
                        element_name= {gaang.element_name}
                        img = {gaang.img}
                        />)
                }
            </div>
        )
    }
}
