const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];




const main = document.getElementById('main')

const criadiv = (elemento, classe, elementopai, id)=>{
    let e = document.createElement(elemento)
    e.classList.add(classe)
    e.id = id
    return elementopai.appendChild(e)
}


const criatabuleiro=(a)=>{
for(let i = 0; i < a.length; i++){
    criadiv('div', 'linha', main, `linha${i}`)
    
    for(let j = 0; j < a[i].length; j++){
        if(a[i][j] === 'W'){
        criadiv('div', 'wall', document.getElementById(`linha${i}`), `linha${i}indice${j}`)
        
        }
        else if(a[i][j] === ' '){
            criadiv('div', 'space', document.getElementById(`linha${i}`), `linha${i}indice${j}`)
        }
        else if(a[i][j] === 'S'){
            criadiv('div', 'start', document.getElementById(`linha${i}`),`linha${i}indice${j}`)
        }
        else if(a[i][j] === 'F'){
            criadiv('div', 'finish', document.getElementById(`linha${i}`),`linha${i}indice${j}`)
        }
    }
}
}
criatabuleiro(map)

const start = document.querySelector('.start')
const finish = document.querySelector('.finish')


criadiv('div', 'jogador', start, 'player')
const player = document.getElementById('player')
