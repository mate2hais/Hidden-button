const buttonCnt = 3;
let winnerId = WinnerButton(buttonCnt)
const output = document.querySelector('#randomText');

function WinnerButton(buttonCnt) {
    let Winner = Math.ceil(Math.random() * buttonCnt);
    return Winner;
}

function handleClick(clicked_id) {
    if (Number(clicked_id) === winnerId) {
         output.textContent += "Congratulations! " + " ";
    } else {
        output.textContent += "  Keep trying!" + "  ";
    }   
}