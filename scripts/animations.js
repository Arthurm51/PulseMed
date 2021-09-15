
function addNextRightCard(){

    nextCardOpinion.innerHTML = 
    `<div class="cardContent">

        <div class="client">
            <img src="./assets/avatares/${opinions[nextRightCard].photo}" alt="dsadsa">
            <h3>${opinions[nextRightCard].name}</h3>
        </div>

        <div class="clientOpinion">
            <div class="textOpinion">
                <p>${opinions[nextRightCard].opinion}</p>
            </div>
        
            
            <div id="evaluation">
                ${img.repeat(opinions[nextRightCard].evaluation)}
            </div>
        </div>

    </div>`

    leftCardOpinion.style.animationName = 'leftToRight'
    rightCardOpinion.style.animationName = 'rightToFront'
    frontCardOpinion.style.animationName = 'frontToLeft'
    nextCardOpinion.style.animationName = 'toRight'

    leftCardOpinion.style.animationDuration = '2s'
    rightCardOpinion.style.animationDuration = '2s'
    frontCardOpinion.style.animationDuration = '2s'
    nextCardOpinion.style.animationDuration = '2s'


}

function changeOpinionRight(){
    let quantityOpinions = opinions.length - 1
    
    if (leftCard >= quantityOpinions) {
        leftCard = 0
        rightCard += 1
        frontCard += 1
        nextRightCard = frontCard + 1
        
    }
    else if(rightCard >= quantityOpinions){
        leftCard += 1
        rightCard = 0
        frontCard += 1
        nextRightCard = 0
        
    }
    else if(frontCard >= quantityOpinions){
        leftCard += 1
        rightCard += 1
        frontCard = 0
        nextRightCard = frontCard + 1
        
    }
    else{
        leftCard += 1
        rightCard += 1
        frontCard += 1
        nextRightCard = frontCard + 1
    }

    addNextRightCard()
    setTimeout(() => {
        addOpinion()
        leftCardOpinion.style.animationName = ''
        rightCardOpinion.style.animationName = ''
        frontCardOpinion.style.animationName = ''
        nextCardOpinion.style.animationName = ''
    }, 2000); 
}





