import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    NavLink, 
    Route, 
    Switch,
    Redirect
} from 'react-router-dom';
import Home from './components/Home.js'
import Signin from './components/Signin.js'
import Signup from './components/Signup.js'
import Todos from './components/Todos.js'

import './App.css'

// ✔ Magic string for local state here. 
const TOKEN_KEY = 'TOKEN'

export default class App extends Component {
    // ✔ State with token set to retrieve local storage or emtpy string.
    state = {
      token: localStorage.getItem(TOKEN_KEY) || ''
    }


    // ✔ handleTokenChange method which sets state and localstorage for token. Takes in token.
    handleTokenChange = async token => {
      await this.setState(token);
      await localStorage.setItem(TOKEN_KEY, token)
    } 
  

  render() {
    // ✔ destructure state
    const { token } = this.state
        return (
            <div>
                <Router>
                    <NavLink exact to='/'>Home</NavLink>
                    <NavLink exact to='/signup'>Signup</NavLink>
                    <NavLink exact to='/signin'>Signin</NavLink>
                    {/* ❓ Does this need the /:id as well? ❓ */}
                    <NavLink exact to='/todos/'>todos</NavLink>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                            />
                        {/* ✔ pass handleTokenChange to signup as prop */}
                        <Route 
                            path="/signup" 
                            exact
                            render={(routerProps) =>
                              <Signup
                                handleTokenChange = { this.handleTokenChange }
                                {...routerProps} 
                              />} 
                        />
                        {/* ✔ pass handleTokenChange to signin as prop */}
                        <Route 
                            path="/signin" 
                            exact
                            render={(routerProps) =>
                              <Signin
                                handleTokenChange = { this.handleTokenChange }
                                {...routerProps} 
                              />} 
                        />
                        {/* ✔ Pass token to todos page so it can perform fetch requests */}
                        {/* ⚠ Needs a conditional: If token doesn't exist, this redirects to signup page.*/}
                        <Route 
                          path="/todos/:Id" 
                          exact
                          render={(routerProps) =>
                            token
                            ? <Todos
                                token={token}
                                {...routerProps} 
                              />
                            // ❗ This isn't working ❗
                            : <Redirect to='/signup' />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}