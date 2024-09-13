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
const travelTavern = document.querySelectorAll('.travel_button_tavern')
const travelFight = document.querySelectorAll('.travel_button_fight')
let tavern = document.querySelector('.tavern')
let cave = document.querySelector('.cave')
let beast = document.querySelector('.beast')
let town = document.querySelector('.town')
let stats = document.querySelector('.stats')
let health = document.querySelector('.health')
let wp = document.querySelector('.Weapon_power')
let sp = document.querySelector('.Skill_points')
let goldCount = document.querySelector('.Gold')
let bread = document.querySelector('.bread')
let weapon = document.querySelector('.weapon')
let strike = document.querySelector('.strike')
let skillStrike = document.querySelector('.skill')
let retreat = document.querySelector('.retreat')

let healthCurrent = 100
let breadHeal = 25
let wpCurrent = 4
let wpUpgrade = 4
let gold = 10
let monsters = ["slime","ork","treeBeast"]
let monstersHealth = Math.floor((Math.random() * 20) + 1)
let BeastHealth = Math.floor((Math.random() * 80) + 1)
// Character Select//
theArcher.addEventListener("click", function(){
  health.textContent = `Health: ${healthCurrent}`
  wp.textContent = `Weapon Power: ${wpCurrent}`
  sp.textContent = `Skill Points: ${archer.skillPoints}`
  goldCount.textContent = `Gold: ${gold}` 
  goDown()
  removeBtn()
  textBox.textContent = dialogTreeAr
  archerImg.style.display = 'block'
  btnShow()
})
theThief.addEventListener("click", function(){
  health.textContent = `Health: ${healthCurrent}`
  wp.textContent = `Weapon Power: ${wpCurrent}`
  sp.textContent = `Skill Points: ${thief.skillPoints}`
  goDown()
  removeBtn()
  textBox.textContent = dialogTreeTh
  thiefImg.style.display = 'block'
  btnShow()
})
theWarrior.addEventListener("click", function(){
  health.textContent = `Health: ${healthCurrent}`
  wp.textContent = `Weapon Power: ${wpCurrent}`
  sp.textContent = `Skill Points: ${warrior.skillPoints}`
  goDown()
  removeBtn()
  textBox.textContent = dialogTreeWar
  warriorImg.style.display = 'block'
  btnShow()
})
theMage.addEventListener("click", function(){
   health.textContent = `Health: ${healthCurrent}`
   wp.textContent = `Weapon Power: ${wpCurrent}`
  sp.textContent = `Skill Points: ${mage.skillPoints}`
  goDown()
  removeBtn()
  textBox.textContent = dialogTreeMa
  mageImg.style.display = 'block'
  btnShow()
})
//travel mechanics//
tavern.addEventListener('click', function(){
 textBox.textContent = dialogTreeTav
 btnNone()
 btnShowTavern()

})
cave.addEventListener('click', function(){
  textBox.textContent = dialogTreeCav
  btnNone()
  btnShowFight()
 })

 beast.addEventListener('click', function(){
  textBox.textContent = dialogTreeBea
  btnNone()
  btnShowFight()
 })
 town.addEventListener('click', function(){
  textBox.textContent = dialogTreeDefault
  btnShow()
  btnNoneTavern()
 })
 
 retreat.addEventListener('click', function(){
  textBox.textContent = dialogTreeDefault
  btnShow()
  btnNoneFight()
 })
//tavern mechanics//
 bread.addEventListener('click', function(){
  if(gold > 0){
    healthCurrent += breadHeal 
  health.textContent = `Health: ${healthCurrent}`
    gold -= 5
    goldCount.textContent = `Gold: ${gold}`
    if(healthCurrent == 300){
      textBox.textContent = `I think you've had enough friend`
      breadHeal = 0
    }
  } else{
    textBox.textContent = moreGold
  }

 
 })
 weapon.addEventListener('click', function(){
  if(gold > 0){
    wpCurrent += wpUpgrade 
  wp.textContent = `Weapon Power: ${wpCurrent}`
  gold -= 10
  goldCount.textContent = `Gold: ${gold}`
  if(wpCurrent == 12){
    textBox.textContent = `No use in fixing perfection my friend, thats as strong as it gets`
    wpUpgrade = 0
  }
  } else{
    textBox.textContent = moreGold
  }
 })
//fight Mechanics//
strike.addEventListener('click',function(){
  if(monstersHealth >= 0){
    monstersHealth -= wpCurrent
    textBox.textContent = `You strike the monster and did ${wpCurrent} damage`
    monsterAttack()
  } else{
    textBox.textContent = `You defeated the monster enjoy some gold`
    gold += Math.floor((Math.random() * 8) + 1)
    goldCount.textContent = `Gold: ${gold}`
    gold = 0
  }
 
  
  
  console.log(monstersHealth)
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
const dialogTreeDefault = `Where should we go to now traveler, buy more supplies, gather more gold in the caves or take on the beast?`
const dialogTreeTav = `Welcome to the tavern my friend if you have gold to spend i'll happily give you some items for your journey. I've got food to help your health and a blacksmith to make your weapon stronger. Breads 5 gold and the blacksmith charges 10 gold.`
const dialogTreeCav = `These caves are dangerous filled with all sorts of monsters, but the loot and gold may help you defeat the beast, a mopnster approaches what will you do`
const dialogTreeBea = `The time has come fight the Beast and complete your journey, make sure your ready my friend!`
const moreGold = `I'm not running a charity here bring me more gold and then I can help you`
//dynamic buttons//
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
 stats.style.display = 'flex'
}

function btnNone(){
  travel.forEach((e) => {
   e.style.display = "none"
  })
 }

 function btnShowTavern(){
  travelTavern.forEach((e) => {
   e.style.display = "flex"
  })
 }

 function btnNoneTavern(){
  travelTavern.forEach((e) => {
   e.style.display = "none"
  })
 }

 function btnShowFight(){
  travelFight.forEach((e) => {
   e.style.display = "flex"
  })
 }

 function btnNoneFight(){
  travelFight.forEach((e) => {
   e.style.display = "none"
  })
 }
 function monsterAttack(){
 let attackAmount = Math.floor((Math.random() * 6) + 1)
 console.log(attackAmount)
 healthCurrent -= attackAmount 
 console.log(healthCurrent)
 health.textContent = `Health: ${healthCurrent}`
 return attackAmount
 
 }
 
