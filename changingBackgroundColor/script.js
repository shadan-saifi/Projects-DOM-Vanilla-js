function randomColor(){
    let color='#'
    const hex='1234567989ABCDEF'
    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let interval;
function startChangingColor(){
    const changebgColor=function(){
        document.body.style.backgroundColor=randomColor();
    }
    if(!interval){
        interval= setInterval(changebgColor,1000)

    }
   

};
function stopChangingColor(){
    clearInterval(interval)
    interval=null;
}


document.querySelector("#start").addEventListener('click',startChangingColor);
document.querySelector("#stop").addEventListener('click',stopChangingColor);