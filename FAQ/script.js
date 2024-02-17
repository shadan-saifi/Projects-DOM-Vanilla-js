const container=document.getElementsByClassName('container');

for (let index = 0; index < container.length; index++) {
    container[index].addEventListener('click', function(e){
        this.classList.toggle('active')
    })
    
}
