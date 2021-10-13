import request from 'superagent';

const URL = 'https://afternoon-beach-72842.herokuapp.com/'

export async function getTodos(token) {
    try{
        const response = await request
            .get(`${URL}api/todos`)
            .set('Authorization', token);

        return response.body;
    } catch(error) {
        console.log(error);
    }
}

export async function createTodo(token, newTodoObj) {
    try{
        const response = await request
            .post(`${URL}api/todos`)
            .set('Authorization', token)
            .send(newTodoObj);

        return response.body;
    } catch(error) {
        console.log(error);
    }
}

export async function updateTodo(token, updatedTodoObj, id) {
    try{
        const response = await request
            .put(`${URL}api/todos/${id}`)
            .set('Authorization', token)
            .send(updatedTodoObj);

        return response.body;
    } catch(error) {
        console.log(error);
    }
}

export async function signUp(newUserObj) {
    try{
        const response = await request
            .post(`${URL}auth/signup`)
            .send(newUserObj);

        // This contains token
        return response.body;
    } catch(error) {
        console.log(error);
    }
}

export async function signIn(userObj) {
    try{
        const response = await request
            .post(`${URL}auth/signin`)
            .send(userObj);
            
        // This contains token
        return response.body;
    } catch(error) {
        console.log(error);
    }
}


