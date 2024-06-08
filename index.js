const button=document.querySelector('.buttn')
const card=document.querySelector('.container')
const delbtn=document.querySelector('.delete')

const battle_third=document.createElement('h2')
battle_third.innerHTML=`<style>h2{margin:75 50;background:radial-gradient(1q,#EEB850 26q,0,#243D83 79q,0,#0000 132q,#243D83)no-repeat#6592CF;width:400px;height:300px</style>`

const battle_fourth=document.createElement('div')
battle_fourth.classList.add('fourth')
battle_fourth.innerHTML='<div id="aa"><p><p id="u"><p></div><style>.fourth{background:#62306D;width:400px;heigth:300px;#aa{margin:34px+42px;display:flex;align-items:center;p{background:#F7EC7D;border-radius:0+0+100%100%;width:100px;height:100px}#u{rotate:180deg;margin-bottom:215px;</style>'

function del() {
    battle_fourth.style.display='none'
    battle_third.style.display='block'
    new_div.appendChild(battle_third)
}

function add(){
    battle_third.style.display='none'
    battle_fourth.style.display='block'
    new_div.appendChild(battle_fourth)
}

delbtn.addEventListener('click', del)
button.addEventListener('click', add)


const new_div=document.createElement('div')
new_div.classList.add('color')
card.appendChild(new_div)
new_div.style.background='#FF00FF'
new_div.style.height='200px'
new_div.style.width='200px'