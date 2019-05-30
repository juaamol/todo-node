const fs = require('fs');

let todoList = [];

function createTask(description) {
    loadDB();
    let todo = {
        description,
        completed: false,
    };

    todoList.push(todo);
    saveDB();

    return todo;
}

function saveDB() {
    let data = JSON.stringify(todoList);

    fs.writeFile('db/data.db.json', data, (err) => {
        if (err) throw new Error('Data not saved' + err);
    });
}

function loadDB() {
    try {
        todoList = require('../db/data.db.json');
    } catch (error) {
        todoList = [];
    }

}

function getTasksList() {
    loadDB();
    return todoList;
}

module.exports = {
    createTask,
    getTasksList,
};