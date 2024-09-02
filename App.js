let selection = document.getElementById('select_fighter')
let theArcher = document.getElementById('Archer')
let theThief = document.getElementById('Thief')
let theWarrior = document.getElementById('Warrior')
let theMage = document.getElementById('Mage')

console.log(selection)

theArcher.addEventListener("click", function(){
  console.log("Archer")
})
theThief.addEventListener("click", function(){
  console.log("Thief")
})
theWarrior.addEventListener("click", function(){
  console.log("Warrior")
})
theMage.addEventListener("click", function(){
  console.log("Mage")
})

const characters = [
  Archer = {
    name : "Archer",
    health:80,
    baseAttack: 2,
    skill: "Long Shot",
    skillAttack: 6,
    skillPoints: 20
  },
  Thief = {
    name : "Thief",
    health:100,
    baseAttack: 6,
    skill: "Back Stab",
    skillAttack: 8,
    skillPoints: 20
  },
  Warrior = {
    name : "Warrior",
    health:150,
    baseAttack: 4,
    skill: "Long Sword",
    skillAttack: 6,
    skillPoints: 20
  },
  Mage = {
    name : "Mage",
    health:100,
    baseAttack: 3,
    skill: "Fire Ball",
    skillAttack: 6,
    skillPoints: 20
  }
]
console.log(characters[0].name)

/*const select = characters.map(function(character){
 console.log(character)
})*/