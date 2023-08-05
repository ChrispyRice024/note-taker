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
            noteCategory.setAttribute('class', 'noteCategory')
            const categoryTitle = document.createElement('h3')
            categoryTitle.setAttribute('class', 'categoryTitle')
            categoryTitle.innerHTML = fullData[i].category ? 'Category' : null
            noteCategory.innerHTML = fullData[i].category;
        
            const noteName = document.createElement('p');
            noteName.setAttribute('class', 'noteName')
            const nameTitle = document.createElement('h3')
            nameTitle.setAttribute('class', 'nameTitle')
            nameTitle.innerHTML = fullData[i].name ? 'Name' : null
            noteName.innerHTML = fullData[i].name;
        
            const note = document.createElement('p');
            note.setAttribute('class', 'note')
            const noteTitle = document.createElement('h3')
            noteTitle.setAttribute('class', 'noteTitle')
            noteTitle.innerHTML = fullData[i].note ? 'Note' : null
            note.innerHTML = fullData[i].note;

            const deleteButton = document.createElement('button')
            deleteButton.innerText = 'Delete'
            deleteButton.addEventListener('click', function (){
              console.log(i)
              fullData.splice(i, 1)

              const jsonData = JSON.stringify(fullData);

              fs.writeFile('./save.js', jsonData, function(err) {
                if (err) {
                  alert('Error Deleting Note', err);
                  window.location.reload()
                } else {
                  alert('Note Deleted');
                  window.location.reload()
                }
                window.location.reload()
                console.log(fullData);
              });
            })
        
            singleNote.appendChild(categoryTitle)
            singleNote.appendChild(noteCategory);

            singleNote.appendChild(nameTitle)
            singleNote.appendChild(noteName);

            singleNote.appendChild(noteTitle)
            singleNote.appendChild(note);

            singleNote.appendChild(deleteButton)
            
            savedNotes.appendChild(singleNote)
          }
          
    })
  }catch(err){
    console.error('there was a problem', err)
  }
}

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
      window.location.reload()
    } else {
      alert('File saved successfully');
      window.location.reload()
    }
    window.location.reload()
    console.log(fullData);
  });

});

window.addEventListener('load', function() {
  fetchNotes();
});
