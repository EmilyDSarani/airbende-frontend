import React, { Component } from 'react'
import Footer from './HeaderEct/Footer'
import GaangRender from './Characters/GaangRender'
import Header from './HeaderEct/Header';
import './App.css';
export default class Gaang extends Component {
    render() {
        return (
            <div>
                <Header />
                <GaangRender />
                <Footer />
            </div>
        )
    }
}
