import request from 'superagent';

const URL = 'https://afternoon-beach-72842.herokuapp.com/api'

export async function getTodos(token) {
    const response = await request
        .get(`${URL}/todos`)
        .set('Authorization', token);

    return response.body;
}

export async function createTodos(token, newTodoObj) {
    const response = await request
        .post(`${URL}/todos`)
        .set('Authorization', token)
        .send({todo_description: newTodoObj});

    return response.body;
}

export async function updateTodo(token, updatedTodoObj, id) {
    const response = await request
        .get(`${URL}/todos/${id}`)
        .set('Authorization', token)
        .send(updatedTodoObj);

    return response.body;
}

export async function signUp(token, newUserObj) {
    const response = await request
        .get(`${URL}/todos`)
        .set('Authorization', token)
        .send(newUserObj);

    // This contains token
    return response.body;
}

export async function signIn(token, userObj) {
    const response = await request
        .get(`${URL}/todos`)
        .set('Authorization', token)
        .send(userObj);
        
    // This contains token
    return response.body;
}

