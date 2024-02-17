const btn=document.querySelector('.play_pause');
const rst=document.querySelector('.restart');

let timer=document.querySelector('.time')

let hour=0;
let minute=0;
let second=0;

let thour=0;
let tminute=0;
let tsecond=0;
let starttimer=false
let interval;
function stopWatch(){
    second++
    if(second===60){
        second=0
        minute++
        if(minute===60){
            minute=0
            hour++
        }
    }
    if(second<10){
        tsecond='0'+second.toString()
    }else{tsecond=second}

    if(minute<10){
        tminute='0'+minute.toString()
    }else{tminute=minute}
    if(hour<10){
        thour='0'+hour.toString()
    }else{thour=hour}
    let time=timer.innerHTML=thour+':'+tminute+':'+tsecond
}

let a=btn.addEventListener('click',function (e) {
    if(!starttimer){
        interval=setInterval(stopWatch,1000)
        this.classList.add('change');
       starttimer=true
    }else{
        clearInterval(interval)
        this.classList.remove('change')
        starttimer=false
    }
    
})
rst.addEventListener('click',function(){
    clearInterval(interval)
    hour=0
    minute=0
    second=0
    timer.innerHTML='00:00:00'
    if(btn.classList.contains('change')){
        btn.classList.remove('change')
        
    }
    starttimer = false; // Set starttimer to false

    
})