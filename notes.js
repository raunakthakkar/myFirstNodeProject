const fs=require('fs');
//this is my file for the notes

let getNotes=()=>{

return("get Notes....")
}

let addNotes=(noteTitle,body)=>{
let myNotesArray=loadNotes()

let duplicatedNotes=myNotesArray.filter((note)=>{
    if (noteTitle in note===true){
        return true
    }
})
if(duplicatedNotes.length===0){
    myNotesArray.push({[noteTitle]:body})
    fs.writeFileSync('mynotes.json',JSON.stringify(myNotesArray))
    console.log("Note Added")
}else{
console.log("*******************************\n Ehhhh Duplicate Note Title\n*******************************")
}

}
let loadNotes=(commandName)=>{
let readData=fs.readFileSync('mynotes.json')//reading data from file
readData=readData.toString()
if(readData.length>0){
    
    if(commandName==="readAll"){console.log(JSON.parse(readData))}else{return((JSON.parse(readData)))}  
}else{
    return ([])
}
}
module.exports={
    "getNotes":getNotes,
    "addNotes":addNotes,
    "readNotes":loadNotes
}