const removeButton = document.querySelector('#remove')
const addButton = document.querySelector('#add')
const counterDiv = document.querySelector('#counterDiv')
const starDiv = document.querySelector('#starDiv')

removeButton.addEventListener("click", removeButtonClicked)
addButton.addEventListener("click", addButtonClicked)

let counter = 0

function removeButtonClicked(){
    if (counter === 0){ }
    else { 
        counter = counter - 1
        counterChanged()
        removeStars()
        }

}
function addButtonClicked() {
    counter = counter + 1
    counterChanged()
    displayStars()
}

function counterChanged(){
    counterDiv.innerText = counter
}
function displayStars() {
    const parent = document.createElement('div');
    parent.className = 'starBox';


    const image = document.createElement('img');
    image.className = 'starBoxImage'
    image.src = "./starLogo.png"

    parent.appendChild(image)
    starDiv.appendChild(parent)
}
function removeStars() {
    starDiv.removeChild(starDiv.lastChild);
}
