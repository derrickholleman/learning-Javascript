let backgrounds = ['green', 'red', 'blue']

let background = backgrounds[Math.floor(Math.random() * backgrounds.length)]

document.querySelector('body').classList.add(`${background}`)