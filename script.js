const buttonCount = 3;
const winnerId = Math.ceil(Math.random() * buttonCount);
const output = document.querySelector('#randomText');

function handleClick(clickedId) {
    if (Number(clickedId) === winnerId) {
        output.textContent += "Congratulations! ";
    } else {
        output.textContent += "  Keep trying!";
    }   
}
