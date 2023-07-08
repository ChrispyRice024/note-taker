const id = document.getElementById('id').value
const category = document.getElementById('category').value
const name = document.getElementById('name').value
const note = document.getElementById('details').value
const fs = require('fs')

id.setAttribute('value', Date.now())
console.log(id.value)

let fullData 

fetch('./save')
    .then(res => res.json())
    .then(data => {
        let fullData = data

        document.getElementById('submit').addEventListener('submit', function(e){
            e.preventDefault()

            var formData = {
                id:id,
                category:category,
                name:name,
                note:note
            }

            fullData.push(formData)

            const stringData = JSON.stringify(fullData)

            fs.writeFile('./save.json', stringData, function(err){
                if(err){
                    alert('Error Saving File', err)
                }else{
                    alert('File Saved Successfully')
                }
            })
        })
    })

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