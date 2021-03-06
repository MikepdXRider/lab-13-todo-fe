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

// â Magic string for local state here. 
const TOKEN_KEY = 'TOKEN'

export default class App extends Component {
    // â State with token set to retrieve local storage or emtpy string.
    state = {
      token: localStorage.getItem(TOKEN_KEY) || ''
    }


    // â handleTokenChange method which sets state and localstorage for token. Takes in token.
    handleTokenChange = async token => {
      await this.setState({token});
      localStorage.setItem(TOKEN_KEY, token);
    } 
  

  render() {
    // â destructure state
    const { token } = this.state
    console.log(token, 'hello');
        return (
            <div>
                <Router>
                  <div className='link-container'>
                    <NavLink activeClassName='active-link' exact to='/'>ð¡ Home</NavLink>
                    <NavLink activeClassName='active-link' exact to='/todos/'>â Todos</NavLink>
                    <NavLink activeClassName='active-link' exact to='/signin'>ð¢Sign-in</NavLink>
                    <NavLink activeClassName='active-link' exact to='/signup'>ðSign-up</NavLink>
                  </div>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                            />
                        {/* â pass handleTokenChange to signup as prop */}
                        <Route 
                            path="/signup" 
                            exact
                            render={(routerProps) =>
                              <Signup
                                handleTokenChange = { this.handleTokenChange }
                                {...routerProps} 
                              />} 
                        />
                        {/* â pass handleTokenChange to signin as prop */}
                        <Route 
                            path="/signin" 
                            exact
                            render={(routerProps) =>
                              <Signin
                                handleTokenChange = { this.handleTokenChange }
                                {...routerProps} 
                              />} 
                        />
                        {/* â Pass token to todos page so it can perform fetch requests */}
                        {/* â Needs a conditional: If token doesn't exist, this redirects to signup page.*/}
                        <Route 
                          path="/todos/" 
                          exact
                          render={(routerProps) =>
                            token
                            ? <Todos
                                token={token}
                                {...routerProps} 
                              />
                            : <Redirect to='/signup' />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}