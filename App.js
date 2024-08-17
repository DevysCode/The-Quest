const characters = [
  Archer = {
    health:80,
    baseAttack: 2,
    skill: "Long Shot",
    skillAttack: 4
  },
  Thief = {
    health:100,
    baseAttack: 6,
    skill: "Back Stab",
    skillAttack: 8
  },
  Warrior = {
    health:150,
    baseAttack: 4,
    skill: "Long Sword",
    skillAttack: 6
  }
]

const select = characters.map(function(character){
 console.log(character)
})