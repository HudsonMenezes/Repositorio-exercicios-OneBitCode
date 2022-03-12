function saveHouse() {
  let area = document.querySelector('input[name=area]').value
  let number = document.querySelector('input[name=number]').value
  let neighborhood = document.querySelector('input[name=neighborhood]').value
  let city = document.querySelector('input[name=city]').value

  let newListValue = document.createElement('li') // Cria o elemento li e armazena em newListValue
  newListValue.innerText =
    area + 'm², número ' + number + ' (' + neighborhood + ' - ' + city + ') ' // Especifíca o que vai conter nesse novo elemento li.

  let removeButton = document.createElement('button') // Cria o botão de remover e adiciona as propriedades html através de JS
  removeButton.type = 'button'
  removeButton.innerText = 'Remover'
  removeButton.setAttribute('onclick', 'removeHouse(this)')

  newListValue.appendChild(removeButton) // adiciona o removeButton como filho de newListValue

  document.getElementById('house-list').appendChild(newListValue) // especifica onde o newListValue vai aparecer dizendo de quem ele é filho. No caso se quiser colocar em uma div qualquer, substituir o ID.
}

function removeHouse(button) {
  let liToRemove = button.parentNode // liToRemove está recebendo o pai do botão remover, que é o li todo.
  document.getElementById('house-list').removeChild(liToRemove) //aqui está removendo o elemento que o liToRemove recebeu, que é todo o li pai do botão.
}
