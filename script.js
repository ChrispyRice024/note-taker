// const id = document.getElementById('id')
// const category = document.getElementById('category')
// const name = document.getElementById('name')
// const note = document.getElementById('details')
// const submit = document.getElementById('submit')
// const savedNotes = document.getElementById('saved-notes')
// const form = document.getElementById('new-note')
// const fs = require('fs')


// const formData = {
//     id: id.value,
//     category: category.value,
//     name: name.value,
//     note: note.value
// }

// id.value = Date.now()
// console.log('id', id)

// let fullData =[]

// const fetchNotes = async () => {

//             const response = await fetch('./save.json')
//             const data = await response.json()
            
//             fullData.push(data)            

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

                
//             }
//             noteList.appendChild(savedNotes)
// }


// form.addEventListener('submit', function(e){
//     e.preventDefault()

//     console.log(formData)
//     fullData.push(formData)
//     const jsonData = JSON.stringify(fullData)
    
//     fs.appendFile('./save.json', jsonData, function (err){
//                 if(err){
//                     alert('Eror Saving File', err)
//                 }else{
//                     alert('file saved successfully')
//                 }
//     alert(fullData)
// })})

// window.addEventListener('load', function(){
//     fetchNotes()
// })

const idInput = document.getElementById('id')
const categoryInput = document.getElementById('category');
const nameInput = document.getElementById('name');
const noteInput = document.getElementById('details');
const submitButton = document.getElementById('submit');
const savedNotes = document.getElementById('saved-notes');
const form = document.getElementById('new-note');
const fs = require('fs');

let fullData = [];

let nameValue = ''
let categoryValue = ''
let noteValue = ''


//finish displaying fetched data
const fetchNotes = async () => {

  try{
    const res = await fetch('./save.js').then(
      res => res.json()
    ).then(data=>{
      console.log(data)
      fullData = data

      const noteList = document.createElement('div');
      noteList.setAttribute('class', 'note');

      for (let i = 0; i < fullData.length; ++i) {
            const singleNote = document.createElement('div')
            singleNote.setAttribute('class', 'singleNote')
            const noteCategory = document.createElement('p');
            const categoryTitle = document.createElement('h3')
            categoryTitle.innerHTML = fullData[i].category ? 'Category' : null
            noteCategory.innerHTML = fullData[i].category;
        
            const noteName = document.createElement('p');
            const nameTitle = document.createElement('h3')
            nameTitle.innerHTML = fullData[i].name ? 'Name' : null
            noteName.innerHTML = fullData[i].name;
        
            const note = document.createElement('p');
            const noteTitle = document.createElement('h3')
            noteTitle.innerHTML = fullData[i].note ? 'Note' : null
            note.innerHTML = fullData[i].note;
        
            singleNote.appendChild(categoryTitle)
            singleNote.appendChild(noteCategory);
            singleNote.appendChild(nameTitle)
            singleNote.appendChild(noteName);
            singleNote.appendChild(noteTitle)
            singleNote.appendChild(note);
            savedNotes.appendChild(singleNote)
          }
          
    })
  }catch(err){
    console.error('there was a problem', err)
  }
}

// const fetchNotes = async () => {
//   try{
//   const response = await fetch('./save.js').then()
//   const data = await response ? response.json():null
//   console.log("data", data.Promise)
//   if(data){
//     fullData.push(data)
//     console.log('fullData', fullData[0])
//   }else{
//     return
//   }

//   const noteList = document.createElement('div');
//   noteList.setAttribute('class', 'note');

//   for (let i = 0; i < data.length; ++i) {
//     const noteCategory = document.createElement('p');
//     noteCategory.innerHTML = data[i].category;

//     const noteName = document.createElement('p');
//     noteName.innerHTML = data[i].name;

//     const note = document.createElement('p');
//     note.innerHTML = data[i].note;

//     noteList.appendChild(noteCategory);
//     noteList.appendChild(noteName);
//     noteList.appendChild(note);
//   }

//   savedNotes.appendChild(noteList);
// }catch(err){
//   console.log(err)
// }
// }

nameInput.addEventListener('change', function(e) {
  e.preventDefault()

  nameValue = e.target.value
})

categoryInput.addEventListener('change', function(e) {
  e.preventDefault()

  categoryValue = e.target.value
})

noteInput.addEventListener('change', function(e) {
  e.preventDefault()

  noteValue = e.target.value
})
submitButton.addEventListener('click', function(e) {
  e.preventDefault();

  const formData = {
      // ...form,
      id:Date.now(),
      name:nameValue,
      category:categoryValue,
      note:noteValue
  };

  fullData.push(formData);
  const jsonData = JSON.stringify(fullData);

  fs.writeFile('./save.js', jsonData, function(err) {
    if (err) {
      alert('Error Saving File', err);
      window.reload()
    } else {
      alert('File saved successfully');
      window.reload()
    }
    window.reload()
    console.log(fullData);
  });

});

window.addEventListener('load', function() {
  fetchNotes();
});
