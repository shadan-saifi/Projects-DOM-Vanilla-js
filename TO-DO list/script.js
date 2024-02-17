const addbtn = document.querySelector('.addbtn');
const input = document.querySelector('.input');
const lists = document.querySelector('.lists')

addbtn.addEventListener('click', function (e) {

    let task = document.createElement('div')
    task.classList.add('task')

    let newli = document.createElement('li')
    newli.classList.add('item')
    newli.innerHTML = `${input.value}`
    task.appendChild(newli)

    //adding done button
    donebtn = document.createElement('button')
    donebtn.innerHTML = '&#10004;';
    donebtn.classList.add('dnbtn');
    task.appendChild(donebtn);

    //adding edit button
    editbtn = document.createElement('button')
    editbtn.innerHTML = '\u270E';
    editbtn.classList.add('editbtn');
    task.appendChild(editbtn);

    //adding delete button
    deletebtn = document.createElement('button')
    deletebtn.innerHTML = '&#128465;';
    deletebtn.classList.add('dltbtn');
    task.appendChild(deletebtn);



    if (input.value === '') {
        alert('Insert some values')
    } else {
        lists.appendChild(task)
    }
    input.value = ''

    donebtn.addEventListener('click', function () {
        this.previousElementSibling.classList.toggle('activate')
    });

    deletebtn.addEventListener('click', function (e) {
        this.parentElement.remove()
    });

    editbtn.addEventListener('click', function (e) {
        let edit = document.createElement('input')
        edit.style.flex = '1'

        let abc = e.target.previousElementSibling.previousElementSibling
        let originaltext=abc.textContent
        if (originaltext!== '') {
            edit.value = originaltext;
            abc.replaceWith(edit);
            edit.addEventListener('blur', function (e) {
                edit.replaceWith(abc)
                abc.textContent = edit.value
            })
        }

    });
})
