// Part 1
const titleElement = document.querySelector('#main-title')
titleElement.style.textAlign = 'center'

// part 2

const bodyElement = document.querySelector('body')

bodyElement.style.background= 'bisque'

// Part 3 

const paragraphElement = document.querySelector('p')

paragraphElement.textContent ='Life happens, coffee helps.'

//  Part4 

const titleElements = document.querySelectorAll('.highlight-title')

titleElements.style.fontStyle = 'italic'

//Part 5 
const listElements = document.querySelectorAll('#cafe-specialties')

const createElement = listElements.createElement('li')

createElement.textContent='Rose Cake'
listElements.appendChild(createElement)

