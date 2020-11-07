// this is my main file
const yargs=require('yargs')
const getNotes=require('./notes.js')
const fs=require('fs')
const notes = require('./notes.js')
const { argv } = require('process')
// done with the basics

//add command
yargs.command({command:"add",description:"adding a note",
builder:{
    title:
    {
    'demandOption':true,
    'type':'string'
    },
    body:{
        'demandOption':true,
        'type':'string'        
        }
},
handler:(argv)=>{
    getNotes.addNotes(argv.title,argv.body)

}})

//remove commmand 
yargs.command({command:"remove",description:"remove a node",
builder:{
    title:{
'demandOption':true,
'type':'string'
    }
},
handler:()=>{notes.removeNote(argv.title)}
}
)
//read command
yargs.command({
    command:"readAll",
    handler:()=>{
    notes.readNotes()
}
})

yargs.parse()