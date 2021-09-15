class People  {
    constructor(id, name, evaluation, opinion, photo){
        this.id = id,
        this.name = name,
        this.evaluation = evaluation,
        this.opinion = opinion,
        this.photo = photo
    }
}

let opinions = [
    new People(0, 'Arthur', 5, 'Muito legal', 'avatar1.jpg'),
    new People(1, 'Machado', 2, 'Muito ruim', 'avatar2.jpg'),
    new People(2, 'Carol', 1, 'Muito bomm', 'avatar3.jpg'),
    new People(3, 'Lisa', 5, 'dsadsadsadsadsadsadsadsadadsadsadsadsadsadsadadsadsadsadsadsadsadadsadsadsadsadsadsadadsadsadsadsadsadsadadsadsadsadsadsadsadadsadsadsadsadsadsadadsadsadsadsadsadsadadsadsadsadsadsadsadadsadsadsadsadsadsadadsadsadsadsadsadsadadsadsadsadsadsadsad', 'avatar4.jpg'),
    new People(4, 'Lauro', 3, 'Muito sdsfsdfsaslegal', 'avatar5.jpg'),
    new People(5, 'Nicole', 5, 'Muito sdfsdfsdflegal', 'avatar6.jpg'),
    new People(6, 'Mayara', 4, 'Muitsdsadwqewqdfrefero legal', 'avatar7.jpg'),
]

let leftCard = opinions.length - 1
let frontCard = 0
let rightCard = 1
let leftCardOpinion = document.getElementById('cardLeft')
let frontCardOpinion = document.getElementById('cardFront')
let rightCardOpinion = document.getElementById('cardRight')
let nextCardOpinion = document.getElementById('nextCard')
let nextCardOpinionLeft = document.getElementById('nextCardLeft')
let nextRightCard = frontCard + 1
let nextLeftCard = leftCard - 1
let img = '<img src="./assets/images/star.png" alt="Avaliação"></img>'




function addOpinion(){
    
    leftCardOpinion.innerHTML =
    `
    <div id="leftArrowLeftCard" >
        <h1>&lt;</h1>
    </div>

    <div id="rightArrowLeftCard">
        <h1>&gt;</h1>
    </div>
    <div class="cardContent">
        <div class="client">
            <img src="./assets/avatares/${opinions[leftCard].photo}" alt="Foto">
            <h3>${opinions[leftCard].name}</h3>
        </div>
    
        <div class="clientOpinion">
            <div class="textOpinion">
                <p>${opinions[leftCard].opinion}</p>
            </div>
                
            <div id="evaluation">
            ${img.repeat(opinions[leftCard].evaluation)}
            </div>
             
        </div>
    </div>`
    
    frontCardOpinion.innerHTML = `
    <div id="leftArrow" onclick="changeOpinionLeft()">
        <h1>&lt;</h1>
    </div>

    <div id="rightArrow" onclick="changeOpinionRight()">
        <h1>&gt;</h1>
    </div>

    <div class="cardContent">

        <div class="client">
            <img src="./assets/avatares/${opinions[frontCard].photo}" alt="dsadsa">
            <h3>${opinions[frontCard].name}</h3>
        </div>

            <div class="clientOpinion">
                <div class="textOpinion">
                    <p>${opinions[frontCard].opinion}</p>
                </div>
                    
                <div id="evaluation">
                ${img.repeat(opinions[frontCard].evaluation)}
                </div>
            </div>
       
    </div>`

    rightCardOpinion.innerHTML = 
    `
    <div id="leftArrowRightCard">
        <h1>&lt;</h1>
    </div>

    <div id="rightArrowRightCard">
        <h1>&gt;</h1>
    </div>
    <div class="cardContent">

        <div class="client">
            <img src="./assets/avatares/${opinions[rightCard].photo}" alt="dsadsa">
            <h3>${opinions[rightCard].name}</h3>
        </div>

        <div class="clientOpinion">
            <div class="textOpinion">
                <p>${opinions[rightCard].opinion}</p>
            </div>
                
            <div id="evaluation">
                ${img.repeat(opinions[rightCard].evaluation)}
            </div>

    </div>`
}

addOpinion()



