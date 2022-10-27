let btn = document.querySelector('.btn')
let body = document.body

function changerOfColors (){
    let colors = ['red','blue','purple','indigo','black','pink','orange','brown','cyan']
    let random = Math.ceil(Math.random()*colors.length)
    body.style.backgroundColor = colors[random]
    //console.log(random);
}
btn.addEventListener('click',changerOfColors)
//setInterval(changerOfColors,2000)