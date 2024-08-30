const characters = [
  Archer = {
    health:80,
    baseAttack: 2,
    skill: "Long Shot",
    skillAttack: 6,
    skillPoints: 20
  },
  Thief = {
    health:100,
    baseAttack: 6,
    skill: "Back Stab",
    skillAttack: 8,
    skillPoints: 20
  },
  Warrior = {
    health:150,
    baseAttack: 4,
    skill: "Long Sword",
    skillAttack: 6,
    skillPoints: 20
  },
  Mage = {
    health:100,
    baseAttack: 3,
    skill: "Fire Ball",
    skillAttack: 6,
    skillPoints: 20
  }
]

const select = characters.map(function(character){
 console.log(character)
})