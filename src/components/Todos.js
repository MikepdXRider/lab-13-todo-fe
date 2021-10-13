import React, { Component } from 'react'
import { createTodo, deleteTodo, getTodos, updateTodo } from '../fetch-utils.js'

export default class Todos extends Component {
    // State with todosDataArr, and todo_description properties. 
    state = {
        todoDataArr: [],
        todo_description: ''
    };

    // Async componentDidMount
    componentDidMount = async () => {
        //  - destsructures token from props. 
        const { token } = this.props;
        //  - Await calls fetch-utils function to get all todos with token as arguement.
        const response = await getTodos(token);
        //  - sets todosDataArr state with returning todosData.
        await this.setState({todoDataArr: response});
    }


    // handleTodoDescChange method which sets state for todo_description
    handleTodoDescChange = async (e) => {
        await this.setState({todo_description: e.target.value});
    }

    // Async Fetch method called on form submit
    handleFormSubmit = async (e) => {
        //  - Prevents defaults.
        e.preventDefault();
        //  - destructures state and props
        const { todo_description } = this.state;
        const { token } = this.props;
        //  - Creates a userObject from state properties.
        console.log(todo_description)
        const newTodoObj = {todo_description};
        //  - Await Calls a fetch-utils function with userObject as arguement. Destructure token from response.
        await createTodo(token, newTodoObj);
        //  - Await calls fetch-utils function to get all todos with token as arguement.
        const response = await getTodos(token);
        //  - sets todosDataArr state with returning todosData.
        this.setState({todoDataArr: response});
    }


    // Async handleTodoUpdate method called on todo click
    handleTodoUpdate = async (id) => {
        // - destructures token from props.
        const { token } = this.props;
        const { todoDataArr } = this.state;
        // - Creates updatedTodoObj
        const selectedTodo = todoDataArr.filter(item => item.id === id);
        const updatedTodoObj = {
            todo_description: selectedTodo[0].todo_description,
            is_complete: !selectedTodo[0].is_complete
        };
        // - Await calls fetch-utils function to update completed status of todo, passing todoID and updatedTodoObject(Bang is_completed) as arguements.
        await updateTodo(token, updatedTodoObj, id);
        //  - Await calls fetch-utils function to get all todos with token as arguement.
        const response = await getTodos(token);
        //  - sets todosDataArr state with returning todosData.
        this.setState({todoDataArr: response});
    }


    handleTodoDelete = async (id) => {
        // - destructures token from props.
        const { token } = this.props;
        // - Await calls fetch-utils function to update completed status of todo, passing todoID and updatedTodoObject(Bang is_completed) as arguements.
        await deleteTodo(token, id);
        //  - Await calls fetch-utils function to get all todos with token as arguement.
        const response = await getTodos(token);
        //  - sets todosDataArr state with returning todosData.
        this.setState({todoDataArr: response});
    }

    
    render() {
        const { todo_description, todoDataArr } = this.state
        console.log(todo_description);
        return (
            <div className='todo-page-container'>
                <div className='todo-form-container'>
                    {/* Form here for sign in.
                        - onSubmit => Calls fetch method */}
                    <form onSubmit={this.handleFormSubmit} className='todo-form'>
                    <h2>Create a new todo!</h2>
                    {/* Inputs
                        - Values = state
                        - Names? 
                        - onChange => Call associated method */}
                        <label>
                            <input onChange={this.handleTodoDescChange} value={todo_description} type='text'/>
                        </label>
                        <button className='form-button' >Create</button>
                    </form>
                </div>
                <div className='todos-container'>
                    {/* grabs todosDataArr from state
                        - sorts data by is_complete value
                        - maps data to render todos to page
                            - element will require an onClick method
                            - element will require a value set to the todos id.
                            - element will require a className with a ternary to place a complete/incomplete class. */}
                    {
                        todoDataArr
                            .sort((a, b) => a.is_complete - b.is_complete)
                            .map(({id, is_complete, todo_description}) => {
                                return (
                                <div className={`single-todo-container ${is_complete ? 'complete' : 'incomplete'}`}>
                                    <div onClick={()=> this.handleTodoUpdate(id)} className={is_complete ? 'complete' : 'incomplete'} >
                                        <p>{todo_description}</p>
                                    </div>
                                    <button onClick={()=> this.handleTodoDelete(id)} className='delete-button'>✖</button>
                                </div>
                                )
                            })
                    }
                </div>
            </div>
        )
    }
}
