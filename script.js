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


const criatabuleiro=()=>{
for(let i = 0; i < map.length; i++){
    criadiv('div', 'linha', main, `linha${i}`)
    
    for(let j = 0; j < map[i].length; j++){
        if(map[i][j] === 'W'){
        criadiv('div', 'wall', document.getElementById(`linha${i}`))
        }
        else if(map[i][j] === ' '){
            criadiv('div', 'space', document.getElementById(`linha${i}`))
        }
        else if(map[i][j] === 'S'){
            criadiv('div', 'start', document.getElementById(`linha${i}`))
        }
        else if(map[i][j] === 'F'){
            criadiv('div', 'finish', document.getElementById(`linha${i}`))
        }
    }
}
}
criatabuleiro()
const start = document.querySelector('.start')
const finish = document.querySelector('.finish')


criadiv('div', 'jogador', start, 'player')
const player = document.getElementById('player')
