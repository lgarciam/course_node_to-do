const colors = require('colors');
const argv = require('./config/yargs').argv;

const toDo = require('./dal/to-do');

let command = argv._[0];
switch(command) {
    case 'create':
        let task = toDo.create(argv.description)
        console.log(task);
    break;
    case 'show':
        let tasks = toDo.getTasks();
        for(let task of tasks) {
            console.log("=========To-Do========".green);
            console.log("Description: ", task.description);
            console.log("Status: ", task.status);
            console.log("======================".green);
        }
    break;
    case 'update':
        let updateTask = toDo.update(argv.description, argv.status);
        console.log(updateTask);
    break;
    case 'delete':
        let deleteTask = toDo.remove(argv.description);
        console.log(deleteTask);
    break;
    default: 
        console.log('Unknwon command');
}