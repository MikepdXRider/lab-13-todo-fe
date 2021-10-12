import React, { Component } from 'react'

export default class Signin extends Component {
    // State with email and password properties. 

    // Async handleEmailChange method which sets state based on input.

    // Async handlePasswordChange method which sets state based on input. 

    // Async Fetch method called on form submit
    //  - Prevents defaults
    //  - Creates a userObject from state properties.
    //  - Calls a fetch-utils function with userObject as arguement. Destructure token from response.
    //  - Calls callback method from app.js to send the token back to app.js state/local storage.
    //  - Redirects the user to todos page.
    
    render() {
        return (
            <div>
                {/* Form here for sign in.
                    - onSubmit => Calls fetch method */}
                {/* Inputs
                    - Values = state
                    - Names? 
                    - onChange => Call associated method */}
            </div>
        )
    }
}
