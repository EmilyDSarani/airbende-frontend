import React, { Component } from 'react'
import DelIntro from './UserFill/DelIntro'
import UserEdit from './UserFill/UserEdit'
import Footer from './HeaderEct/Footer'


export default class Edit extends Component {
    render() {
//In the UserEdit, it is allowing me to render in the App.js to go to the Edit page and pull of up USEREDIT. The UserEdit is where all the meat is happening and spreading it allows it to come in rendered correctly. 
        return (
            <div>
            <DelIntro />
             <UserEdit {...this.props} />   
             <Footer />
            </div>
        )
    }
}

