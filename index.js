
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = " "
let messageEl = document.getElementById("message-el")
let sumEL=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let cards = []

let player = {
    name: "Barandyk",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent= player.name + ": $" + player.chips





function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    renderGame()
}


function newCard () {
     // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
     if (isAlive===true && hasBlackJack === false) {
        
     let card = getRandomCard()
     sum += card
     cards.push(card)
     renderGame() 
     }

}
   


function getRandomCard () {

    let randomNumber = Math.floor((Math.random()*13)+1)
    if (randomNumber >10) {
        return 10
    } else if (randomNumber===1) {
        return 11
    } else {
        return randomNumber
    }
}

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

function renderGame() {

    if (sum<=20) {
        message="Do you want to draw a new card?"
    } else if (sum === 21) {
       message = "You've got Blackjack! "
       hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive=false
        
    }
    messageEl.textContent = message
    sumEL.textContent= "Sum:" + sum
    cardsEl.textContent = "Cards:" 
    

    for (i=0; i<cards.length; i++) {
    cardsEl.textContent += cards[i] + "   "
}
}
