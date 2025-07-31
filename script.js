const imgbutton = document.getElementById("img-button");

const pdiv = document.getElementById("p-div");
let pcount = 0
const pbutton = document.getElementById("p-button");
let pcounter = document.createElement("p")

pcounter.innerHTML = `pCount: ${pcount}`
imgbutton.after(pcounter)

pbutton.onclick = function() {
    imgdiv.style.display = "none"
    nothingDiv.style.display = "none"
    pdiv.style.display = "inline-block"
    pcount ++;
    pcounter.innerHTML = `pCount: ${pcount}`
    let newP = document.createElement("p")
    newP.style["background-color"] = "black"
    newP.style.color = "White"
    newP.innerHTML = "I love Lucario"
    pdiv.appendChild(newP)
}

let imgcount = 0
const imgdiv = document.getElementById("img-div");
let imgcounter = document.createElement("p")
imgcounter.innerHTML = `imgCount: ${imgcount}`
pcounter.after(imgcounter)

imgbutton.onclick = function() {
    pdiv.style.display = "none"
    nothingDiv.style.display = "none"
    imgdiv.style.display = "inline-block"
    let newI = document.createElement("img")
    newI.src = "images/lucario.png"
    imgdiv.appendChild(newI)
    imgcount ++;
    imgcounter.innerHTML = `imgCount: ${imgcount}`
}

let nothingcount = 0
let nothingcounter = document.createElement("p")
let nothingButton = document.createElement("button")
let nothingDiv = document.createElement("div")

nothingcounter.innerHTML = `nothingCount: ${nothingcount}`

nothingButton.innerText = "Do nothing"
nothingButton.style.display = "inline-block"
nothingButton.style["margin-left"] = "5px"

nothingDiv.style.display = "none"
nothingDiv.style.width = "600px"
nothingDiv.style["min-height"] = "300px"
nothingDiv.style.border = "3px solid black"

pbutton.after(nothingButton);
document.body.appendChild(nothingDiv);
imgcounter.after(nothingcounter);

nothingButton.onclick = function() {
    pdiv.style.display = "none"
    imgdiv.style.display = "none"
    nothingDiv.style.display = "block"
    nothingcount ++;
    nothingcounter.innerHTML = `nothingCount: ${nothingcount}`
}   