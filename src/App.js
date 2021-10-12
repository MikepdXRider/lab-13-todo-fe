import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import SearchPage from './SearchPage.js';
import DetailPage from './DetailPage.js';

import './App.css'

// Magic string for local state here.

export default class App extends Component {
    // State with token set to retrieve local storage or emtpy string.

    // handleTokenChange method which sets state and localstorage for token. Takes in token. 
  
  render() {
    // destructure state
    const { token } = this.state
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Homepage {...routerProps} />} 
                        />
                        {/* pass handleTokenChange to signup as prop */}
                        <Route 
                            path="/signup" 
                            exact
                            render={(routerProps) => <Signup
                              // handleTokenChange = {handleTokenChange()}
                              {...routerProps} />} 
                        />
                        {/* pass handleTokenChange to signin as prop */}
                        <Route 
                            path="/signin" 
                            exact
                            render={(routerProps) => <Signin
                              // handleTokenChange = {handleTokenChange()}
                              {...routerProps} />} 
                        />
                        {/* Pass token to todos page so it can perform fetch requests */}
                        <Route 
                          path="/todos/:Id" 
                          exact
                          render={(routerProps) => <TodosPage
                            // token={token}
                            {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}