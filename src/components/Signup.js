import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { signUp } from '../fetch-utils.js'

// Essentially identical to signin page.

export default class Signin extends Component {
    // ✔ State with email and password properties. 
    state = {
        email: '',
        password: ''
    }

    // ✔ Async handleEmailChange method which sets state based on input.
    handleEmailChange = async (e) => {
        await this.setState({email: e.target.value})
    }

    // ✔ Async handlePasswordChange method which sets state based on input. 
    handlePasswordChange = async (e) => {
        await this.setState({email: e.target.value})
    }

    // ✔ Async Fetch method called on form submit
    handleSignup = async (e) => {
        // ✔  - Prevents defaults
        e.preventDefault();
        // ✔  - destructures state and props
        const { email, password } = this.state;
        const { handleTokenChange } = this.props;
        // ✔  - Creates a userObject from state properties.
        const newUserObj = {
            email: email,
            password: password
        }
        // ✔  - Calls a fetch-utils function with userObject as arguement. Destructure token from response.
        const { token } = signUp(newUserObj);
        // ✔  - Calls callback method from app.js to send the token back to app.js state/local storage.
        handleTokenChange(token);
        // ✔  - Redirects the user to todos page.
        this.props.history.push('/todos');
    }
    
    render() {
        // ✔ Destructure state 
        const { email, password } = this.state
        return (
            <div>
                {/* ✔ Form here for sign in.
                    - ✔ onSubmit => Calls fetch method */}
                <form onSubmit={this.handleSignUp}>
                {/* ✔ Inputs
                    - ✔ Values = state
                    - ⚠ Names? 
                    - ✔ onChange => Call associated method */}
                    <label>
                        Email
                        <input onChange={this.handleEmailChange} type='email' value={email}/>
                    </label>
                    <label>
                        Password
                        <input onChange={this.handleEmailChange} type='password' value={password}/>
                    </label>
                    {/* ✔ Button to submit */}
                    <button>Sign-up</button>
                </form>
                <Link to='/signin'>Already have an account? Login!</Link>
            </div>
        )
    }
}
