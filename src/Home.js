import React, { Component } from 'react'
import Header from './HeaderEct/Header'
import Body from './HeaderEct/Body'
import Footer from './HeaderEct/Footer';
import './App.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}
