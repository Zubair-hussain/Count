let countEl = document.getElementById("count-el")

let SaveEl = document.getElementById("save-El")


console.log(SaveEl)

console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}


function save() {
    let CountSave = "" + count + "-"
    SaveEl.textContent += CountSave
    countEl.textContent = 0
    count = 0
}











// let greeting = "As Salam Allikum " + " " + "Zubair Hussain " + "👋 "

// console.log(greeting)