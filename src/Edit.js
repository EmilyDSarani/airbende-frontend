import React, { Component } from 'react'
import UserEdit from './UserFill/UserEdit'


export default class Edit extends Component {
    render() {

        return (
            <div>
             <UserEdit {...this.props} />   
            </div>
        )
    }
}

