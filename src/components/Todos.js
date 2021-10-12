import React, { Component } from 'react'

export default class Todos extends Component {
    // State with todosDataArr, and todo_description properties. 

    // Async componentDidMount
    //  - destructures token from props. 
    //  - Await calls fetch-utils function to get all todos with token as arguement.
    //  - sets todosDataArr state with returning todosData.


    // handleTodoDescChange method which sets state for todo_description


    // Async Fetch method called on form submit
    //  - Prevents defaults.
    //  - Creates a userObject from state properties.
    //  - Await Calls a fetch-utils function with userObject as arguement. Destructure token from response.
    //  - Calls callback method from app.js to send the token back to app.js state/local storage.
    //  - Redirects the user to todos page.


    // Async handleTodoUpdate method called on todo click
    // - destructures token from props.
    // - grabs e.target.value(todo id).
    // - Await calls fetch-utils function to update completed status of todo, passing todoID and updatedTodoObject(Bang is_completed) as arguements.
    //  - calls fetch-utils function to get all todos with token as arguement.
    //  - sets todosDataArr state with returning todosData.

    
    render() {
        return (
            <>
            <div>
                {/* Form here for sign in.
                    - onSubmit => Calls fetch method */}
                {/* Inputs
                    - Values = state
                    - Names? 
                    - onChange => Call associated method */}
            </div>
            <div>
                {/* grabs todosDataArr from state
                    - sorts data by is_complete value
                    - maps data to render todos to page
                        - element will require an onClick method
                        - element will require a value set to the todos id.
                        - element will require a className with a ternary to place a complete/incomplete class. */}
            </div>
            </>
        )
    }
}
