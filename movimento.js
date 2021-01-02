
let igor = main.childNodes

const vitoria = ()=>{
    // console.log(finish.childElementCount)
    if(finish.childElementCount > 0){
    
    criadiv('h2', 'win', document.body)
            const win = document.querySelector('.win')
            return  win.innerText = 'Você venceu'
    }
}

const moveRight =()=>{
    for(let i = 1; i < igor.length; i++){
        for(let j = 0; j < igor[i].childNodes.length; j++){
            if(igor[i].childNodes[j].childElementCount > 0 && igor[i].childNodes[j+1].classList.contains('space')){
                return igor[i].childNodes[j+1].appendChild(player) 
        }
        else if(igor[i].childNodes[j].childElementCount > 0 && igor[i].childNodes[j+1].classList.contains('finish')){
            return igor[i].childNodes[j+1].appendChild(player)
            }
        }
    }
}

const moveDown =()=>{
    for(let i = 1; i < igor.length; i++){
        for(let j = 0; j < igor[i].childNodes.length; j++){
            if(igor[i].childNodes[j].childElementCount > 0 && igor[i+1].childNodes[j].classList.contains('space')){
                return igor[i+1].childNodes[j].appendChild(player) 
            }
        }
    }
}

const moveLeft =()=>{
    for(let i = 1; i < igor.length; i++){
        for(let j = 0; j < igor[i].childNodes.length; j++){
            if(igor[i].childNodes[j].childElementCount > 0 && igor[i].childNodes[j-1].classList.contains('space')){
                return igor[i].childNodes[j-1].appendChild(player) 
            }
        }
    }
}

const moveUp =()=>{
    for(let i = 1; i < igor.length; i ++){
        for(let j = 0; j < igor[i].childNodes.length; j++){
            if(igor[i].childNodes[j].childElementCount > 0 && igor[i-1].childNodes[j].classList.contains('space')){
                return igor[i-1].childNodes[j].appendChild(player)
            }
        }
    }
}



document.addEventListener('keydown', (event) => {
    const keyName = event.key;
  
    if(keyName === "ArrowUp"){
        moveUp()
      return  vitoria() 
    }
  
    else if(keyName === "ArrowDown"){
        moveDown()
        return vitoria()
    }
    else if(keyName === "ArrowLeft"){
        moveLeft()
      return vitoria() 
    }
  
    else if(keyName === "ArrowRight"){
        moveRight()
      return vitoria()
    }
})



