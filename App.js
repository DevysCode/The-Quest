const theArcher = document.getElementById('Archer')
const theThief = document.getElementById('Thief')
const theWarrior = document.getElementById('Warrior')
const theMage = document.getElementById('Mage')
const textBox = document.getElementById("textbox")
const btns = document.querySelectorAll('.character_select')
let archerImg = document.querySelector('.archerimg')
let warriorImg = document.querySelector('.warriorimg')
let mageImg = document.querySelector('.mageimg')
let thiefImg = document.querySelector('.thiefimg')
let btnSection = document.querySelector('.button_section')
const travel = document.querySelectorAll('.travel_button')
let tavern = document.querySelector('.tavern')
let cave = document.querySelector('.cave')
let beast = document.querySelector('.beast')

theArcher.addEventListener("click", function(){
  console.log("Archer")
  goDown()
  removeBtn()
  textBox.textContent = dialogTreeAr
  archerImg.style.display = 'block'
  btnShow()
})
theThief.addEventListener("click", function(){
  console.log("Thief")
  goDown()
  removeBtn()
  textBox.textContent = dialogTreeTh
  thiefImg.style.display = 'block'
  btnShow()
})
theWarrior.addEventListener("click", function(){
  console.log("Warrior")
  goDown()
  removeBtn()
  textBox.textContent = dialogTreeWar
  warriorImg.style.display = 'block'
  btnShow()
})
theMage.addEventListener("click", function(){
  console.log("Mage")
  goDown()
  removeBtn()
  textBox.textContent = dialogTreeMa
  mageImg.style.display = 'block'
  btnShow()
})

tavern.addEventListener('click', function(){
 textBox.textContent = dialogTreeTav
})
cave.addEventListener('click', function(){
  textBox.textContent = dialogTreeCav
 })

 beast.addEventListener('click', function(){
  textBox.textContent = dialogTreeBea
 })
 

class TheCharcter{
constructor(name, health, baseAttack, skill, skillAttack, skillPoints){
 this.name = name;
 this.health = health;
 this.baseAttack = baseAttack;
 this.skill = skill;
 this.skillAttack = skillAttack;
 this.skillPoints = skillPoints;
 }
 getStats(){
  return `Player ${this.name} Health ${this.health} Base Attack ${this.baseAttack} Skill ${this.skill} Skill Power ${this.skillAttack} Skill Points ${this.skillPoints} `
 }
}

const archer = new TheCharcter('Archer', 80, 2, 'Long Shot', 6, 20)
const thief = new TheCharcter('Thief', 100, 6, 'Back Stab', 8, 20)
const warrior = new TheCharcter('Warrior', 150, 4, 'Long Sword', 6, 20)
const mage = new TheCharcter('Mage', 100, 3, 'Fire Ball', 6, 20)


const dialogTreeAr =  `Welcome traveler its time to begin your quest. You are the ${archer.name} where would you like to go to start you're journey, the tavern, the caves or straight to the beast`
const dialogTreeWar =  `Welcome traveler its time to begin your quest. You are the ${warrior.name} where would you like to go to start you're journey, the tavern, the caves or straight to the beast`
const dialogTreeTh =  `Welcome traveler its time to begin your quest. You are the ${thief.name} where would you like to go to start you're journey, the tavern, the caves or straight to the beast`
const dialogTreeMa =  `Welcome traveler its time to begin your quest. You are the ${mage.name} where would you like to go to start you're journey, the tavern, the caves or straight to the beast`
const dialogTreeTav = `Welcome to the tavern my friend if you have gold to spend i'll happily give you some items for your journey. I've got food to help your health and a blacksmith to make your weapon stronger`
const dialogTreeCav = `These caves are dangerous filled with all sorts of monsters, but the loot and gold may help you defeat the beast`
const dialogTreeBea = `The time has come fight the Beast and complete your journey!`

function goDown(){
  window.scroll({
    top: 800,
    behavior: "smooth",
  });
}
function removeBtn(){
  btns.forEach((e) => {
    e.remove()
  })
}

function btnShow(){
 travel.forEach((e) => {
  e.style.display = "flex"
 })
}



