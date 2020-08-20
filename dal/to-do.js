const fs = require('fs');

let toDos = [];

const create = (description) => {
    laodDB();
    let toDo = {
        description,
        status: false
    }
    toDos.push(toDo);
    save();
    return toDo;
}

const getTasks = () => {
    laodDB();
    return toDos;
}

const update = (description, status = true) => {
    laodDB();
    let index = toDos.findIndex(x => x.description === description);
    if(index == -1) throw new Error('Task does not exist');

    toDos[index].status = status;
    save();
    return toDos[index];
}

const remove = (description) => {
    laodDB();
    let index = toDos.findIndex(x => x.description === description);
    if(index == -1) throw new Error('Task does not exist');

    let task = toDos[index];
    toDos.splice(index, 1);
    save();
    
    return task;
}

const save = () => {
    let data = JSON.stringify(toDos);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('Information could not save', err);
    });
}

const laodDB = () => {
    try {
        toDos = require('../db/data.json');
    }
    catch(error) {
        toDos = []
    }
}

module.exports = {
    create,
    getTasks,
    update,
    remove
}