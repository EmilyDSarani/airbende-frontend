import React, { Component } from 'react'
import GaangItems from './GaangItems'

export default class GaangList extends Component {
    render() {
        return (
            <>
                {
                    this.props.hotman.map(gaang => <GaangItems 
                        name= {gaang.name}
                        title= {gaang.title}
                        element= {gaang.element}
                        img = {gaang.img}
                        />)
                }
            </>
        )
    }
}
