//index.js

const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');

const {
    getAllTodos,
    postOneTodo,
    deleteTodo,
    editTodo
} = require('./APIs/todos')

app.get('/todos', auth, getAllTodos);
//app.get('/todo/:todoId', auth, getOneTodo);
app.post('/todo', auth, postOneTodo);
app.delete('/todo/:todoId', auth, deleteTodo);
app.put('/todo/:todoId', auth, editTodo);

const {
    loginUser,
    signUpUser,
    getUserDetail,
    updateUserDetails
} = require('./APIs/users')

// Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.get('/user', auth, getUserDetail);
app.post('/user', auth, updateUserDetails);

exports.api = functions.https.onRequest(app);