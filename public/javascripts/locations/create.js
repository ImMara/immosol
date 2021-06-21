
// ciblage du container d'image
const container = document.querySelector('#input-container')
// ciblage du bouton d'ajouts
const line = document.querySelector('#add-line')
// ciblage du selecteur de cover
const cover = document.querySelector("#cover")

// counter
let count=0;

// event boutton d'ajout
line.onclick = () =>{
    // creation d'element html
    let div = document.createElement('div')
    let input = document.createElement('input')
    let a = document.createElement('a')
    let img = document.createElement('img')
    let option = document.createElement('option')

    // Ajout de style
    a.classList.add('btn')
    a.classList.add('btn-danger')
    a.classList.add('me-2')
    a.classList.add('col-1')
    a.classList.add('mb-3')

    div.classList.add('row')
    div.classList.add('mb-3')
    div.classList.add('mx-1')

    input.classList.add('form-control')
    input.classList.add('col')
    input.classList.add('mb-3')

    img.classList.add('col-12')
    img.style.maxHeight='100px';
    img.style.objectFit='cover';
    img.style.border='none';

    //counter
    count++

    // Ajout d'attribut sur le formulaire d'image
    option.setAttribute('value',(count-1).toString())
    input.setAttribute('name','gallery')
    input.setAttribute('type','file')
    input.setAttribute('accept','.jpg,.jpeg,.png,.gif')
    input.setAttribute('required', true)

    // Ajout d'enfant
    a.append('x')
    option.append(count)
    cover.append(option)
    div.append(a)
    div.append(input)
    div.append(img)

    // event input d'image
    input.onchange = (ev) =>{
        // Recuperation et creation d'un url de l'image de l'input
        const source = URL.createObjectURL(ev.target.files[0])
        // Ajout de l'image créer dans la source de l'image
        img.setAttribute('src',source)
    }

    // event delete
    a.onclick = (ev) =>{
        // Supprimer la div parents
        ev.target.parentElement.remove()
    }

    // Ajout d'un formulaire
    document.querySelector('#input-container').append(div)
}