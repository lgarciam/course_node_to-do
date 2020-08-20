// create -d --description
// show
// update -d --description -s --status

description = {
    demand: true,
    alias: 'd'
}
status = {
    alias: 's',
    default: true
}

const argv = require('yargs')
    .command('create', 'Create a Task ToDO', { description })
    .command(
        'update', 'Update status on Task ToDo', { 
            description,
            status
        }
    )
    .command('delete', 'Delete a Task ToDO', { description })
    .command('show', 'Show ToDo list')
    .help()
    .argv

module.exports = {
    argv
}