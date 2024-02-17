document.querySelector('#button').addEventListener('click',changeQuotes);
const quote=document.querySelector('#quote')
const author=document.querySelector('#author')

function changeQuotes(){
    const randnum=Math.floor(Math.random()*5+1);

    if(randnum===1){
        quote.innerHTML='To live is the rarest thing in the world. Most people exist, that is all.' 
        author.innerHTML='- Oscar Wilde'
     }
     else if(randnum===2){
        quote.innerHTML='That it will never come again is what makes life so sweet.'

        author.innerHTML='- Emily Dickinson'
     }
     else if(randnum===3){
        quote.innerHTML='It is never too late to be what you might have been.' 

        author.innerHTML='- George Eliot'
     }
     else if(randnum===4){
        quote.innerHTML='To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'

        author.innerHTML='- Ralph Waldo Emerson'
     }
     else if(randnum===5){
        quote.innerHTML='Pain is inevitable. Suffering is optional.' 

        author.innerHTML='- Haruki Murakami'
     }


}