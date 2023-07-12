const id = document.getElementById('id').value
const category = document.getElementById('category').value
const name = document.getElementById('name').value
const note = document.getElementById('details').value
const submit = document.getElementById('submit')
const form = document.getElementById('new-note')
// const fs = require('fs')


document.getElementById('id').setAttribute('value', Date.now())
console.log('id', id.value)

// let fullData

// const fetchNotes = async () => {

//             const response = await fetch('./save.json')
//             const data = await response.json()
            
//             fullData = data

//             const noteList = document.createElement('div')
//             noteList.setAttribute('class', 'note')
            
//             for(let i=0; i < data.length; ++i){

//                 const noteCategory = document.createElement('p')
//                 noteCategory.innerHTML = data[i].category
                
//                 const noteName = document.createElement('p')
//                 noteName.innerHTML = data[i].name
                
//                 const note = document.createElement('p')
//                 note.innerHTML = data[i].note

//                 noteList.appendChild(noteCategory)
//                 noteList.appendChild(noteName)
//                 noteList.appendChild(note)

//                 alert(data[i])
                
//             }
// }

// form.addEventListener('submit', function(e){
//     e.preventDefault()

//     const formData = {
//         id: id,
//         category: category,
//         name: name,
//         note:note
//     }

//     fullData.push(formData)
//     const jsonData = JSON.stringify(fullData)
    
//     fs.appendFile('./save.json', jsonData, function (err){
//                 if(err){
//                     alert('Eror Saving File', err)
//                 }else{
//                     alert('file saved successfully')
//                 }
//     alert('fullData')
// })})

// window.addEventListener('load', function(){
//     fetchNotes()
//     alert(fullData)
// })
// document.getElementById('submit').addEventListener('click', function(e){
//     e.preventDefault()

//     const id = document.getElementById('id').value
//     const category = document.getElementById('category').value
//     const name = document.getElementById('name').value
//     const note = document.getElementById('details').value

//     var formData = {
//         id: id,
//         category: category,
//         name: name,
//         note: note
//     }

//     var jsonData = JSON.stringify(formData)

//     var fs = require('fs')

//     fs.appendFile('./save.json', jsonData, function (err){
//         if(err){
//             alert('Eror Saving File', err)
//         }else{
//             alert('file saved successfully')
//         }
//     })
// })