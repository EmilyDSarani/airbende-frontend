import React, { Component } from 'react'
import CreatePage from './UserFill/CreatePage'
import Intro from './UserFill/Intro'
export default class FormFill extends Component {
    render() {
        return (
            <>
                <Intro />
                <CreatePage {...this.props} /> {/* this is saying "lets grab everything in this and display it*/}
            </>
        )
    }
}
