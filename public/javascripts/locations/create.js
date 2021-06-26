
// ciblage du container d'image
const container = document.querySelector('#input-container')
// ciblage du bouton d'ajouts
const line = document.querySelector('#add-line')
// ciblage du selecteur de cover
const cover = document.querySelector("#cover")
// ciblage du boutton de suppression edition
const del = document.querySelectorAll(".delete")
// ciblage d'image
const imgC = document.querySelector('#img-container')

// counter
let count=container.getAttribute("count");

// event boutton d'ajout
line.onclick = () =>{
    // creation d'element html
    let div = document.createElement('div')
    let input = document.createElement('input')
    let a = document.createElement('a')
    let img = document.createElement('img')
    let option = document.createElement('option')
    let imgDiv = document.createElement('div')

    // Ajout de style
    a.classList.add('btn')
    a.classList.add('btn-danger')
    a.classList.add('position-absolute')
    a.classList.add('top-0')
    a.classList.add('end-0')
    a.classList.add('rounded-0')

    div.classList.add('d-flex')
    div.classList.add('flex-column')
    div.classList.add('align-items-center')
    div.classList.add('mb-3')
    div.classList.add('mx-1')

    input.classList.add('form-control')
    input.classList.add('position-absolute')
    input.classList.add('bottom-0')
    input.classList.add('start-0')
    input.classList.add('rounded-0')

    imgDiv.classList.add('mx-2')
    imgDiv.classList.add('my-1')
    imgDiv.classList.add('position-relative')
    img.style.width='180px';
    img.style.height='180px';
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
    imgDiv.append(img)
    imgDiv.append(a)
    imgDiv.append(input)
    div.append(imgDiv)
    imgC.append(div)

    // event input d'image
    input.onchange = (ev) =>{
        // Recuperation et creation d'un url de l'image de l'input
        const source = URL.createObjectURL(ev.target.files[0])
        // Ajout de l'image créer dans la source de l'image
        img.setAttribute('src',source)
    }

    // event delete
    a.onclick = (ev) =>{
        // Supprimer la div parent
        count--
        cover.removeChild(cover.lastElementChild);
        ev.target.parentElement.parentElement.remove()
    }
    // Ajout d'un formulaire
    imgC.append(div)
}
del.forEach( d => {
    d.onclick = (ev) =>{
        count--
        cover.removeChild(cover.lastElementChild);
        let location = ev.target.getAttribute('location')
        let position = ev.target.getAttribute('pos')
        // vps-447d73c6.vps.ovh.net
        // localhost
        axios.put(`http://vps-447d73c6.vps.ovh.net/api/delete/gallery/${location}/${position}`)
            .then(res =>{
                ev.target.parentElement.remove()
            })
    }
})
