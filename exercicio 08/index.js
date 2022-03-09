let spaceshipName = prompt('Qual é o nome da nave?')
let invertedName = ''

for (let i = spaceshipName.length - 1; i >= 0; i--) {
  invertedName += spaceshipName[i]
}

alert(
  'Nome Original da nave: ' +
    spaceshipName +
    '\nO nome invertido da nave é : ' +
    invertedName
)
