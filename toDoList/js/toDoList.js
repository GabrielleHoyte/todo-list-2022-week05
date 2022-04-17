document.querySelector('.addButton').addEventListener('click', list)

function list(){
  let input = document.querySelector('input').value

  const node = document.createElement("li")
  const textnode = document.createTextNode(input)
  node.appendChild(textnode)
  document.getElementById("ul").appendChild(node) 
  document.querySelector('.input').value = ' '
  let number = document.querySelectorAll('li').length
  document.querySelector('.howMany').innerText = number
}

document.querySelector('ul').addEventListener('click', function(e){
  e.target.classList.toggle('strikeThrough')
  let number = document.querySelectorAll('li').length
  let strike = document.querySelectorAll('.strikeThrough').length
  document.querySelector('.howMany').innerText = number - strike
})

document.querySelector('.clearList').addEventListener('click', clearList)

function clearList() {   
  document.querySelectorAll('li').forEach(li => {
    li.remove()
  })
  document.querySelector('.howMany').innerText = 0
}

document.querySelector('.clearCompleted').addEventListener('click', clearCompleted)

function clearCompleted(){
  document.querySelectorAll('.strikeThrough').forEach(li => {
    li.remove()
  })
  let number = document.querySelectorAll('li').length
  document.querySelector('.howMany').innerText = number
}