
const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const guide=document.querySelector('#guide')
    if(guide.innerHTML) guide.innerHTML=''
    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML=`Please enter a valid height: ${height}`
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML=`Please enter a valid weight: ${weight}`
    }
    else{
        const bmi= (weight/(height**2)*10000).toFixed(2)
        result.innerHTML=`<span>${bmi}<span>`
        if(bmi<18.6){
            guide.innerHTML='Under Weight'
        }
        else if(bmi>=16.6 && bmi<=24.5){
            guide.innerHTML='Normal Range'
        }
        else{
            guide.innerHTML='Over Weight'
        }
        result.insertAdjacentElement("afterend",span)
    }
    




});






