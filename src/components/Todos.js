import React, { Component } from 'react'
import { createTodo, getTodos, updateTodo } from '../fetch-utils.js'

export default class Todos extends Component {
    // State with todosDataArr, and todo_description properties. 
    state = {
        todoDataArr: [],
        todo_description: ''
    };

    // Async componentDidMount
    componentDidMount = async () => {
        //  - destructures token from props. 
        const { token } = this.props;
        //  - Await calls fetch-utils function to get all todos with token as arguement.
        const response = await getTodos(token);
        //  - sets todosDataArr state with returning todosData.
        this.setState({todoDataArr: response.body});
    }


    // handleTodoDescChange method which sets state for todo_description
    handleTodoDescChange = async (e) => {
        this.setState({todo_description: e.target.value});
    }

    // Async Fetch method called on form submit
    handleFormSubmit = async (e) => {
        //  - Prevents defaults.
        e.preventDefault();
        //  - destructures state and props
        const { todo_description } = this.state;
        const { token } = this.props;
        //  - Creates a userObject from state properties.
        const newTodoObj = {todo_description};
        //  - Await Calls a fetch-utils function with userObject as arguement. Destructure token from response.
        createTodo(token, newTodoObj);
        //  - Await calls fetch-utils function to get all todos with token as arguement.
        const response = await getTodos(token);
        //  - sets todosDataArr state with returning todosData.
        this.setState({todoDataArr: response.body});
    }


    // Async handleTodoUpdate method called on todo click
    handleTodoUpdate = async (e) => {
        // - destructures token from props.
        const { token } = this.props;
        const { todoDataArr } = this.state;
        // - grabs e.target.value(todo id).
        const todoId = e.target.value;
        // - Creates updatedTodoObj
        const selectedTodo = todoDataArr.find(item => item.id === todoId);
        const updatedTodoObj = {
            todo_description: selectedTodo.todo_description,
            is_complete: !selectedTodo.is_complete
        };
        // - Await calls fetch-utils function to update completed status of todo, passing todoID and updatedTodoObject(Bang is_completed) as arguements.
        await updateTodo(token, updatedTodoObj, todoId);
        //  - Await calls fetch-utils function to get all todos with token as arguement.
        const response = await getTodos(token);
        //  - sets todosDataArr state with returning todosData.
        this.setState({todoDataArr: response.body});
    }

    
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
