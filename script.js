
const id = document.getElementById('id')
id.setAttribute('value', Date.now())
console.log(id.value)

document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault()

    const id = document.getElementById('id').value
    const category = document.getElementById('category').value
    const name = document.getElementById('name').value
    const note = document.getElementById('details').value

    var formData = {
        id: id,
        category: category,
        name: name,
        note: note
    }

    var jsonData = JSON.stringify(formData)

    var fs = require('fs')

    fs.appendFile('./save.json', jsonData, function (err){
        if(err){
            alert('Eror Saving File', err)
        }else{
            alert('file saved successfully')
        }
    })
})