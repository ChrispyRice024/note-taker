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
const idInput = document.getElementById('id').value;
const categoryInput = document.getElementById('category').value;
const nameInput = document.getElementById('name').value;
const noteInput = document.getElementById('details').value;
const submitButton = document.getElementById('submit');
const savedNotes = document.getElementById('saved-notes');
const form = document.getElementById('new-note');
const fs = require('fs');

let fullData = [];

const fetchNotes = async () => {
  const response = await fetch('./save.js');
  const data = await response.json();

  if(data){
    fullData.push(data)
  }else{
    fullData = []
  }

  const noteList = document.createElement('div');
  noteList.setAttribute('class', 'note');

  for (let i = 0; i < data.length; ++i) {
    const noteCategory = document.createElement('p');
    noteCategory.innerHTML = data[i].category;

    const noteName = document.createElement('p');
    noteName.innerHTML = data[i].name;

    const note = document.createElement('p');
    note.innerHTML = data[i].note;

    noteList.appendChild(noteCategory);
    noteList.appendChild(noteName);
    noteList.appendChild(note);
  }

  savedNotes.appendChild(noteList);
};

submitButton.addEventListener('click', function(e) {
  e.preventDefault();

  const formData = {
      ...form,
      idInput,
      nameInput,
      categoryInput,
      noteInput
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
