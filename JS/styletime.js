//let saveMe = document.getElementsById("save-me")
//let saveMe = document.getElementsByClassName("save-me")
//let saveMe = document.querySelector("h3")
//let saveMe = document.getElementsById("save-me").textContent;
//let saveMe = document.getElementById.InnerHTML
//document.getElementById("standing")





//let count = 0

//function awaiting() {
   // count += 1
    //standing.textContent = count
    //console.log(count)
//}




//let result = det + "det"
//let det = count + " - "

//function save() {
  //  det = count + " - "
   // saveMe.textContent += det
    //standing.textContent = 0
    //count = 0
    //saveMe.textContent = "saveMe.textContent + det" 
    //console.log(det)
//}

//variable practice


let firstname = "Omotola"
let lastname = "Odumosu"
fullname = firstname + " " + lastname

console.log(fullname)

let name = "Linda"
let greetingz = "Hi there"

let msg = greetingz + ", " + name + "!"

console.log(msg)

//or

function greetlinda() {
    console.log(greetingz + ", " + name + "!")
}

greetlinda()

//increment and decrementing 

let mypoint = 3

function add3points() {
    mypoint += 3
    console.log(mypoint)
}

function remove1point() {
    mypoint -= 1
    console.log(mypoint)
}

add3points()
add3points()
add3points()
remove1point()
remove1point()

//console.log(mypoint)

//predict result for number vs strings

console.log("2" + 2) //22
console.log(11 + 7) //18
console.log(6 + "5") //65
console.log("my points: " + 5 + 9) //my points:59
console.log(2 + 2) //4
console.log('11' + '14') //1114


let errors = document.getElementById("error")

function error() {
    errors.textContent = "Something Went Wrong, pls try again"
}


let num1 = 8
let num2 = 2

let summary = document.getElementById("sum")
document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

function add() {
    addition = num1 + num2
    summary.textContent = "sum :" + addition
    console.log(addition)
}

function subtract() {
    subtraction = num1 - num2
    summary.textContent = "sum :" + subtraction
    console.log(subtraction)
}

function divide() {
    division = num1/num2
    summary.textContent = "sum :" + division
    console.log(division)
}

function multiply() {
    multiplication = num1 * num2
    summary.textContent = "sum :" + multiplication
    console.log(multiplication)
}


//projet 2 (blackJack app)





let cardarray = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById("messaging")
let summEl = document.getElementById("summary")
//let summEl = document.querySelector("#summary")
let cards = document.getElementById("cards")


console.log(summEl)
console.log(cardarray)


let player = {
    myName : "Yhoung",
    chips : 145
}

let winningEl = document.getElementById("winnings-el")
winningEl.textContent = player.myName + " : $" + player.chips

function startgame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cardarray = [firstCard, secondCard]
    console.log(cardarray)
    sum = firstCard + secondCard
    playgame()
}

function playgame(){
    summEl.textContent = "sum: " + sum
    cards.textContent = "cards: " 

for(let i = 0; i < cardarray.length; i++)[
    cards.textContent += cardarray[i] + " "
]

    if (sum < 21) {
        message="do you want to draw another card?"
    }
    
    else if(sum === 21) {
        message="Congrats! you've blackJacked"
        hasBlackJack = true
    }
    
    else {
        message="sorry, you're out of the game"
        isAlive = false
    }

    messageEL.textContent = message
console.log(hasBlackJack)
console.log(isAlive)
//console.log(message)
}

function newcard(){

    if (isAlive === true && hasBlackJack === false){
        let otherCard = getRandomCard()
    sum += otherCard
    cardarray.push(otherCard)
    console.log(cardarray)
    cards.textContent = cardarray 
    
    summEl.textContent = "sum: " + sum
    playgame()
    //message="Draw a new card from deck"
   // messageEL.textContent = message
    console.log(message)
    }
}

function getRandomCard(){
    
    let chooseRandomCard = Math.floor(Math.random() * 13) + 1
    if (chooseRandomCard === 1){
        return 11
    }
    else if(chooseRandomCard > 10){
        return 10
    }
    else{
        return chooseRandomCard
    }
}







//object notation practice

let airbnb = {
    available: true,
    currency: " $",
    price: 50,
    about: ["has a pool", "has a wide garage", "has a vry big and enticing compound"]
}

console.log(airbnb.available)
console.log(airbnb.about)


//logical operators
let hasSolvedChallenge = false
let hasHintLeft = true
console.log(hasSolvedChallenge)
console.log(hasHintLeft)

if(hasSolvedChallenge === false  && hasHintLeft === false ) {
    showSolution()
}

else if(hasSolvedChallenge === false || hasHintLeft === true){
    showSolution()
}

function showSolution(){
    console.log("showing Solution.....")
}

//another logical operator using the "or"
//true or false are called boolean variable

let hasWatchedMe = false
let openToRecommendation = true

if(hasWatchedMe === false || openToRecommendation === false){
    recommendMovie()
}
function recommendMovie(){
    console.log("Hey check out this movie 'The Thief', its a great action movie")
}

//getting random numbers and removing the decimals through Math.floor

let flooredNumber = Math.floor(123.123)
console.log(flooredNumber)
let randomNumber = Math.random() * 6
console.log(randomNumber)

let chances = Math.floor( Math.random() * 6 )
console.log(chances) //3 2 1 0 4 5

let chance = Math.floor( Math.random() * 6 ) + 1
console.log(chance) //3 2 1 4 5 6

function rolldice(){
    let dice = Math.floor(Math.random()*6) + 1 
    console.log(dice)
}

rolldice()

let plyerARaceTime = 56
let PlayerBRaceTime = 40

function TotalRaceTime (){
    return   PlayerBRaceTime + plyerARaceTime
}

let TotalRaceTimez = TotalRaceTime()

console.log(TotalRaceTimez)



//learning to count in javascript language

         //start       finish    steps to move
for (let move = 10; move < 21; move += 1){
    console.log(move)
}

for (let move = 10; move < 21; move += 1){
    console.log(move)}

for (let walk = 0; walk <6; walk += 1){
    console.log(walk)
    //note "walk" can also be substituted with the word "i"
}

//"i" can be used multiple times without any data disruption

for(let i = 10; i < 101; i += 10){
    console.log(i)
}



 
 


//arrays (zero index)

let myexp = ["html approved", "css approved" , "Javascripts ongoing"]
let exp = ["ceo at scrimba", "Frontend Developer at Xeneta", "people counter for Norstat"]

console.log(exp [1])
console.log(exp [2])
console.log(exp [0])

//array exercise

let myself = ["Omotola Odumosu" , "24", true]

//how to add stuffs to an array

let soup = [4, 9]

soup.push(5)

console.log(soup)

//array exercise

let talk = [
    "hey, how's it going?",
    "i'm great, thank you. how about you",
    "all good.been working on my portfolio lately"
]

let newTalk = "same here"

talk.push(newTalk)
console.log(talk)

        //to remove the last item from an array
talk.pop()
console.log(talk)

let zooming = [
    "hey, how's it going?",
    "i'm great, thank you. how about you",
    "all good.been working on my portfolio lately",
    "same here", "great to hear", "my my", "you you"
]

for(let i = 0; i < zooming.length; i+= 1){
    console.log(zooming[i])
}

let zoom = ["5", "7", "90"]
    for(let i =0; i < zoom.length; i++){
        console.log(zoom[i])
    }

let adam = ["Hello", "my", "name", "is", "Yhoung"]
let seeMe = document.getElementById("seeme")

 for(let i = 0; i < adam.length; i++)[
    seeMe.textContent += adam[i] + " "
 ]

//true or false test
console.log(4 === 3)//false
console.log(5 > 2) //true
console.log(12 > 12) //false
console.log(3 < 0) //false
console.log(3 >= 3) //true
console.log(11 <= 11) //true
console.log(3 <= 2) //false

//old enough to enter night club

let age = 23

if (age < 22) {
    console.log("Sorry, you cannot enter the club")
}
else{
    console.log("welcome, enjoy your time with us")
}

//card from the king

let ages = 100

if(ages < 100) {
    console.log("You're not Eligible for card frm the king")
}
else if(ages === 100) {
    console.log("Happy 100th Birthday, here is your birthday card from the king")
}

else {
    console.log("Not Eligible, You have already recieved one")
}



//general practice

//object and functions

let person = {
    hisname: "Odumosu Omotola",
    age: 24,
    country: "Nigeria"
}

function logData(){
   console.log( person.hisname + " is " + person.age + " years old and lives in " + person.country )
    
}

logData()

//conditional statement practice

let hisage = 75

if (hisage < 6){
    console.log("you get the free ticket")
}

else if(hisage <= 17){
    console.log("you get the child discount")
}
else if (hisage <= 26){
    console.log("you get the student discount")
}
else if(hisage <= 66){
    console.log("you pay full price")
}
else{
    console.log("you pay senior citizen discount")
}


//for loop (array)  makes everything have it's own line

let largeCountry = ["china", "India", "Usa", "indonesia", "pakistan"]
largeCountry.push("Nigeria")

        //console.log(largeCountry)
console.log("the 5 largest countries in the world")
for(let i = 0; i < largeCountry.length; i++){
    console.log("- " + largeCountry[i])
}




//push() always puts last items// pop() always remove last item// shift() always puts first item //unshift() always remove first item   .....practice

let largeCountryz = ["Tuvalu", "India", "Usa", "indonesia", "Monaco"]

largeCountryz.pop()
largeCountryz.push("pakistan")
largeCountryz.shift()
largeCountryz.unshift("china")
console.log(largeCountryz)


//logical and operator practice

let dayOfMonth = 31
let weekday = "Friday"

if(dayOfMonth === 31 && weekday === "Friday" ){
    console.log("Hey there")
}

//random item practice

//let hands = ["rock", "paper", "scissors"]

//function playgame(){
  //let fresh =  Math.floor(Math.random()*3)
  //console.log(hands[fresh])
//}

playgame()


let fruit = ["apple", "orange", "apple", "apple", "orange"]
let appleShelf = document.getElementById("apple")
let orangeShelf = document.getElementById("orange")

function arrange(){
    for (let i = 0; i< fruit.length; i++) {
        if( fruit[i] === "apple" ){
            appleShelf.textContent += "apple" + " "
        
         }
         else if(fruit[i] === "orange"){
            orangeShelf.textContent += "orange" + " "
         }   
    }
 
}

arrange()


//example retry

let money =["naira", "dollars", "pounds", "dollars", "naira"]
let dollar = document.getElementById("dollar")
let pounds = document.getElementById("pounds")
let naira = document.getElementById("naira")

function simplymoney(){
    let randomMoney = Math.floor(Math.random()*4)
    let chosenMoney = (money[randomMoney])
    console.log(chosenMoney)
    //for(let i = 0; i < money.length; i++){
        if(chosenMoney === "dollars"){
            dollar.textContent += "dollar" + " "
        }
        else if(chosenMoney === "naira"){
            naira.textContent += "naira" + " "
        }
        
        else if(chosenMoney === "pounds"){
            pounds.textContent += "pounds"
        }
   // }
}

simplymoney()

//note --> using "For Loop" would list everything in a new line so it cant be used with random as random doesnt show it all but the chosen random. see immediate above code ^
                             //  |




//sales lead chrome extension  



// function SaveButton(){
//     console.log("Button Clicked")
// }



let myLeads = []
//let oldleads = []

//localStorage.clear()

const deleteBtn = document.getElementById("delete-btn")

    //both "let" and "const" does same thing but const is more strict
const inputBtn = document.getElementById("input-btn")
const inputEL = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")
//const tabbs = [
  //   {url: "https://www.linkeddin.com/in/per-herald-borgen/"}
//]

console.log(ulEl)

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        
        myLeads.push(tabs[0].url)
         localStorage.setItem("myleads", JSON.stringify(myLeads))
        render(myLeads)
         console.log(tabs[0].url)
    })

})


deleteBtn.addEventListener("dblclick", function(){
   // console.log("double clicked")
    localStorage.clear()
    myLeads = []
    render(myLeads) 
})


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


function render(leads){
    let listitem = ""
 for(let i = 0; i < leads.length; i++){
    console.log(leads[i])



    //listitem += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i]+ "</a></li>"
    listitem += `
    <li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]} 
        </a>
    </li>`


    console.log(listitem)
    
        //another way of doing it
    //const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
     }

     ulEl.innerHTML = listitem
}


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEL.value) //TO GET VALUE OF INPUT IN JS USE (DOC.GETELEMENTBYID("".VALUE)

    inputEL.value = ""

    localStorage.setItem("myLeads",  JSON.stringify(myLeads))
    console.log(localStorage.getItem("myLeads"))
    console.log(myLeads)
    render(myLeads)
})




// PRACTICE BELOW

//addeventlistener taining
let Box = document.getElementById("box")

Box.addEventListener("click", function(){ 
    console.log("i want to open the box")
   
    
})


//difference between "let" and "const" = const variable cant be re-assigned while let allows for re-assignment eg below

const basePrice = 520
const salesDiscount = 120
let shippingCost = 12
let shippingTime = "5 - 12 days"

//shippng will be a bit late

shippingCost = 15
shippingTime = "7 - 14 days"

//full price
const fullPrice = basePrice - salesDiscount + shippingCost

//notify the customer

console.log("total cost: " + fullPrice + ". It will arrive in " + shippingTime)

const buySpace = document.getElementById("buyspace")

buySpace.innerHTML = "<button onclick='buy()'> Buy! </Button>"  

function buy() {
    buySpace.innerHTML += "<p><small>Thank You For Buying</small></p>"
}


//TEMPLATE STRINGS

const recipient = "james"
const sender = "Yhoung"

const email = `Hey ${recipient}! 
How is it going? 
cheers ${sender}`
console.log(email)

//localStorage Practice

localStorage.setItem("myLead", "www.naijaloaded.com")
localStorage.getItem("myLead")
console.log(localStorage.getItem("myLead"))
localStorage.clear()

//turning stuff into strings and back using json

let timing = `["almost an hour"]`

timing = JSON.parse(timing)
timing.push("but its few minutes to tho")

timing= JSON.stringify(timing)
console.log(typeof timing)

    //truthy or falsy value
    console.log( Boolean("")) //false
    console.log( Boolean("0")) //true
    console.log( Boolean(100)) //true
    console.log( Boolean(null)) //false
    console.log( Boolean([0])) //true
    console.log( Boolean(-0)) //false


    //function - parameter (single and multiple) practice

    const welcomeBck = document.getElementById("welcomebck")

    function greetUser(greetingword, users, emoji){

        welcomeBck.textContent = `${greetingword},${users}, ${emoji}`
    }

    greetUser("welcome back", "Yhoung Brown", "smiling")

                //still under parameters (testing with numbers)

    function adds(snum1,snum2){
        console.log(snum1 + snum2)
    }

    adds(3,4)
    adds(9,102)

            //diff btw arguement and parameter
            
                    //PARAMETERS
            function greetUserment(greetingword, users, emoji){

                welcomeBck.textContent = `${greetingword},${users}, ${emoji}`
            }

            //ARGUEMENTS
            greetUserment("hi", "yhoung", "Happy")


            //what are greetings and user ? = parameter
            //what are "howdy" and "james"? = arguement
            //what are snum1 and snum2 ? = parameter
            //whaht are 3 and 4 ? = arguement

function getFirsts(arr){
    return arr[0]
}

let rsult = getFirsts([11,2,5])
console.log(rsult)

//OR

function getFirst(darry = [arr1, arr2, arr3]){
for(let i = 0; i < 1; i++){
    console.log(darry[i])
}
}

getFirst(darry= ["10","20","30"])


//project 3 element recap

const fplayer = "per"
const opponent = "nick"
const game = "AmazingFighter"
let fpoints = 0
let fhaswon = false


fpoints +=100
fhaswon = true

if (fhaswon) {
    console.log(`${fplayer} got ${fpoints} points and won the ${game} game!`)
}
else{
    console.log(`The winner is ${opponent} ! ${fplayer} lost the game`)
}

//another example

let myCourse = ["learn css animations", "ui design fundamentals", "intro to clean code"]
let courseMy = ["public admin", "oau", "ile-ife"]

function take(choice){
    for(let i = 0; i < choice.length; i++)
    console.log(choice[i])
}

take(myCourse)
take(courseMy)


//local storage recap
//localStorage.setItem ("storeditem", "lets have fun odunayomi")
//localStorage.clear
//let see = localStorage.getItem("storeditem")
//console.log(see)

localStorage.setItem("whatTime","its 9pm")
let check = localStorage.getItem("WhatTime")
console.log(check)

localStorage.setItem("hum","moi dear")
let wink = localStorage.getItem("hum")
console.log(wink)




let data = [
    {player: "jane",
    score: 52
    },

    {
        player: "mark",
        score: 41,
    }
]

let janeScore = document.getElementById("janescore")

janeScore.addEventListener("click", function(){
    console.log(data[0].player, data[0].score)
})






function generateSentence(desc, arr){
    for (let i = 0; i < arr.length; i++){
        console.log(`${desc} ${arr}`)
    }
}

generateSentence("the 3 largest countries are",["india, china , usa"] )

//or

function generateSentences(descx, arry){
    baseString = `the ${arry.length} ${descx} are `
    const lastindex = arry.length - 1
    for(let i =0; i < arry.length; i++){
       
        if(i === lastindex){
            baseString += arry[i] 
        }
        else{
            baseString += arry[i] + ", "
        }
    }
    return baseString
}

let sentence = generateSentences("heighst mountains", ["mount everest", "k2"])
console.log(sentence)


//image prctice using inner html

const imgs = ["../js practice/Yhoung Brown (2).png",
 "../js practice/Yhoung Brown (2).png", 
 "../js practice/Yhoung Brown (2).png"
]

const container = document.getElementById("container")



function teamImg(){
    let imgDom =""
    for(let i = 0; i < imgs.length; i++){
        imgDom += `<img src = "${imgs[i]}" class="img-fluid col-md-3" alt="yb">`
    }
    container.innerHTML += imgDom
}

teamImg()


