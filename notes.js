const fs=require('fs');
//this is my file for the notes

let getNotes=()=>{

return("get Notes....")
}

let addNotes=(noteTitle,body)=>{
let myNotesArray=loadNotes()
let duplicatedNotes=myNotesArray.filter((note)=>{
    return note.title===noteTitle
})
if(duplicatedNotes.length===0){
    myNotesArray.push({[noteTitle]:body})
    fs.writeFileSync('mynotes.json',JSON.stringify(myNotesArray))
    console.log("Note Added")
}else{
console.log("*******************************\n Ehhhh Duplicate Note Title\n*******************************")
}

}
let loadNotes=()=>{
let readData=fs.readFileSync('mynotes.json')//reading data from file
readData=readData.toString()
if(readData.length>0){
    
    return ((JSON.parse(readData)))
}else{
    return ([])
}
}
let removeNote=(title)=>{
    let Notes=loadNotes()
 if (Notes.length>0){
for (let i=0;i<Notes.length;i++){
   Notes.splice(Notes.findIndex((note)=>title in note),1)
   fs.writeFileSync('mynotes.json',JSON.stringify(Notes))
}
 }else{console.log("Sorry there are no notes to remove")}
}
module.exports={
    "getNotes":getNotes,
    "addNotes":addNotes,
    "readNotes":loadNotes,
    "removeNote":removeNote,
}