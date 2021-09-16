

function changeOpinion(arrow){
    if(arrow == 'left'){
        leftCard += 1;
        frontCard += 1;
        rightCard += 1;
        nextCard = rightCard
        if (nextCard > 6) {
            nextCard = 0
        }
    }else{
        leftCard -= 1;
        frontCard -= 1;
        rightCard -= 1;
        nextCard = leftCard
        if (nextCard < 0) {
            nextCard = 6
        }
    }
    if (leftCard > quantityOpinions) {
        leftCard = 0;
    }
    if (leftCard < 0) {
        leftCard = quantityOpinions;
    }
    if (frontCard > quantityOpinions) {
        frontCard = 0;
    }
    if (frontCard < 0) {
        frontCard = quantityOpinions;
    }
    if (rightCard > quantityOpinions) {
        rightCard = 0;
    }
    if (rightCard < 0) {
        rightCard = quantityOpinions;
    }
    

    if (arrow == 'left') {
        addNextRightCard()
    }else{
        addNextLeftCard()
    }
    
    
    setTimeout(() => {
        addOpinion()
        leftCardOpinion.style.animationName = ''
        rightCardOpinion.style.animationName = ''
        frontCardOpinion.style.animationName = ''
        nextCardOpinion.style.animationName = ''
        leftArrowLeftCard.style.animationName = ''
    }, 1250); 
}

function addNextRightCard(){
    const leftArrowFrontCard = document.getElementById('leftArrow')
    const rightArrowFrontCard = document.getElementById('rightArrow')
    const leftArrowRightCard = document.getElementById('leftArrowRightCard')
    const rightArrowRightCard = document.getElementById('rightArrowRightCard')
    
    nextCardOpinion.innerHTML = 
    `<div class="cardContent">

        <div class="client">
            <img src="./assets/avatares/${opinions[nextCard].photo}" alt="dsadsa">
            <h3>${opinions[nextCard].name}, ${opinions[nextCard].age} anos.</h3>
        </div>

        <div class="clientOpinion">
            <div class="textOpinion">
                <p>${opinions[nextCard].opinion}</p>
            </div>
        
            
            <div id="evaluation">
                ${img.repeat(opinions[nextCard].evaluation)}
            </div>
        </div>

    </div>`

    leftCardOpinion.style.animationName = 'leftToRight'
    rightCardOpinion.style.animationName = 'rightToFront'
    frontCardOpinion.style.animationName = 'frontToLeft'
    nextCardOpinion.style.animationName = 'toRight'
    leftArrowFrontCard.style.animationName = 'lessOpacity'
    rightArrowFrontCard.style.animationName = 'lessOpacity'
    leftArrowRightCard.style.animationName = 'moreOpacity'
    rightArrowRightCard.style.animationName = 'moreOpacity'

    leftCardOpinion.style.animationDuration = '1.25s'
    rightCardOpinion.style.animationDuration = '1.25s'
    frontCardOpinion.style.animationDuration = '1.25s'
    nextCardOpinion.style.animationDuration = '1.25s'
    leftArrowFrontCard.style.animationDuration = '1.25s'
    rightArrowFrontCard.style.animationDuration = '1.25s'
    leftArrowRightCard.style.animationDuration = '1.25s'
    rightArrowRightCard.style.animationDuration = '1.25s'
    
}

function addNextLeftCard(){
    const leftArrowFrontCard = document.getElementById('leftArrow')
    const rightArrowFrontCard = document.getElementById('rightArrow')
    const leftArrowLeftCard = document.getElementById('leftArrowLeftCard')
    const rightArrowLeftCard = document.getElementById('rightArrowLeftCard')

    nextCardOpinion.innerHTML = 
    `<div class="cardContent">

        <div class="client">
            <img src="./assets/avatares/${opinions[nextCard].photo}" alt="dsadsa">
            <h3>${opinions[nextCard].name}, ${opinions[nextCard].age} anos.</h3>
        </div>

        <div class="clientOpinion">
            <div class="textOpinion">
                <p>${opinions[nextCard].opinion}</p>
            </div>
        
            
            <div id="evaluation">
                ${img.repeat(opinions[nextCard].evaluation)}
            </div>
        </div>

    </div>`

    rightCardOpinion.style.animationName = 'rightToLeft'
    leftCardOpinion.style.animationName = 'leftToFront'
    frontCardOpinion.style.animationName = 'frontToRight'
    nextCardOpinion.style.animationName = 'toLeft'
    leftArrowFrontCard.style.animationName = 'lessOpacity'
    rightArrowFrontCard.style.animationName = 'lessOpacity'
    leftArrowLeftCard.style.animationName = 'moreOpacity'
    rightArrowLeftCard.style.animationName = 'moreOpacity'

    leftCardOpinion.style.animationDuration = '1.25s'
    rightCardOpinion.style.animationDuration = '1.25s'
    frontCardOpinion.style.animationDuration = '1.25s'
    nextCardOpinion.style.animationDuration = '1.25s'
    leftArrowFrontCard.style.animationDuration = '1.25s'
    rightArrowFrontCard.style.animationDuration = '1.25s'
    leftArrowLeftCard.style.animationDuration = '1.25s'
    rightArrowLeftCard.style.animationDuration = '1.25s'

}








