import React, { Component } from 'react'
import Footer from './HeaderEct/Footer'
import GaangRender from './Characters/GaangRender'
export default class Gaang extends Component {
    render() {
        return (
            <div>
                <GaangRender />
                <Footer />
            </div>
        )
    }
}
