const btn=document.querySelector('.innerbox')
const cross=document.querySelector('#btn')
const model=document.querySelector('.modelcontainer')

btn.addEventListener('click', function(){
    model.style.display='grid';
})

cross.addEventListener('click', function(){
    model.style.display='none';
})
