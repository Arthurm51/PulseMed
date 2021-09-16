class People  {
    constructor(id, name, evaluation, opinion, photo, age){
        this.id = id,
        this.name = name,
        this.evaluation = evaluation,
        this.opinion = opinion,
        this.photo = photo,
        this.age = age
    }
}

let opinions = [
    new People(0,
         'Ariel Freiria Carregueiro', 5, 'Me ajudou muito com meus medicamentos controlados. Antes acabava tomando todos fora de horário. Pulseira excelente!', 'avatar1.jpg', 54),
    new People(1, 'Ulisses Viana Cotrim', 3, 'O produto é muito bom, mas sinto falta de um sistema que monitore meus batimentos cardíacos, seria muito interessante para as proximas pulseiras.', 'avatar2.jpg', 73),
    new People(2, 'Dália Pêcego Salgueiro', 5, 'Muito bommmmmmmmm! Amei!', 'avatar3.jpg', 62),
    new People(3, 'Matthias Vale Faustino', 5, 'Muito boa pulseira, várias cores e tamanhos. Ganhei de meus filhos de aniversário por recomendação de meu médico, e foi o melhor presente possível, não consigo me imaginar mais sem esta belezinha,tem facilitado muito minha rotina de medicamentos.', 'avatar4.jpg', 61),
    new People(4, 'Arianna Capistrano Mata', 4, 'Adorei, bonita, confortavel, funcional e barata. Vale muito a pena!', 'avatar5.jpg', 36),
    new People(5, 'Iago Mourinho Alpuim', 4, 'Muito bom! Apenas senti falta de um sistema com o monitoramento dos batimentos cardíacos, e junto dele um aplicativo para o monitoramento dos batimentos de meus pais. Por serem idosos, é sempre bom manter o monitoramento com contatos de emergência! Com certeza pagaria a mais para ter este novo sistema.', 'avatar6.jpg',28),
    new People(6, 'Brenda Nazário Rangel', 4, 'Pulseira muito boa, todos de minha familia estão usando, o dia-a-dia corrido não tem mais nos atrapalhado. Muito bonita e facil de usar. Sem falar que as pilhas duram muitoooooo tempo, sem precisar ficar trocando toda hora. Chega de efeito ineficaz!', 'avatar7.jpg', 25),
]
let randomNum = Math.random() * (6 - 0)
randomNum = Math.floor(randomNum)


let imagePrototype = 0
let quantityOpinions = opinions.length - 1
let frontCard = randomNum
let leftCard = frontCard - 1
let rightCard = frontCard + 1
if (leftCard < 0) {
    leftCard = quantityOpinions
}
if (rightCard > quantityOpinions) {
    rightCard = 0
}
const leftCardOpinion = document.getElementById('cardLeft')
const frontCardOpinion = document.getElementById('cardFront')
const rightCardOpinion = document.getElementById('cardRight')
const nextCardOpinion = document.getElementById('nextCard')
const nextCardOpinionLeft = document.getElementById('nextCardLeft')


let nextCard = null

const img = '<img src="./assets/images/star.png" alt="Avaliação"></img>'




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
            <h3>${opinions[leftCard].name}, ${opinions[leftCard].age} anos.</h3>
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
    <div id="leftArrow" onclick="changeOpinion('left')">
        <h1>&lt;</h1>
    </div>

    <div id="rightArrow" onclick="changeOpinion('right')">
        <h1>&gt;</h1>
    </div>

    <div class="cardContent">

        <div class="client">
            <img src="./assets/avatares/${opinions[frontCard].photo}" alt="dsadsa">
            <h3>${opinions[frontCard].name}, ${opinions[frontCard].age} anos.</h3>
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
            <h3>${opinions[rightCard].name}, ${opinions[rightCard].age} anos.</h3>
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





