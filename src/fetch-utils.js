import request from 'superagent';

const URL = 'https://afternoon-beach-72842.herokuapp.com/api/todos'

export async function getTodos(token) {
    const response = await request
        .get(`${URL}api/todos`)
        .set('Authorization', token);

    return response.body;
}

export async function createTodos(token, newTodoObj) {
    const response = await request
        .post(`${URL}api/todos`)
        .set('Authorization', token)
        .send({todo_description: newTodoObj});

    return response.body;
}

export async function updateTodo(token, updatedTodoObj, id) {
    const response = await request
        .get(`${URL}api/todos/${id}`)
        .set('Authorization', token)
        .send(updatedTodoObj);

    return response.body;
}

export async function signUp(token, newUserObj) {
    const response = await request
        .post(`${URL}auth/signup`)
        .send(newUserObj);

    // This contains token
    return response.body;
}

export async function signIn(token, userObj) {
    const response = await request
        .post(`${URL}auth/signin`)
        .send(userObj);
        
    // This contains token
    return response.body;
}


