const washCarEl = document.getElementById("washCar-el")
const tableEl = document.getElementById("table-el")
const mowLawnEl = document.getElementById("mowLawn-el")
const pullWeedsEl = document.getElementById("pullWeeds-el")
let items = []
let sum = 0
const sumEl = document.getElementById("sum-el")
const removeCarEl = document.getElementById("removeCar-el")

// ADD ITEMS

// ADD CAR WASH

washCarEl.addEventListener("click", function(){
    items.push(10)
    tableEl.innerHTML += `<tr>
    <td class="left">Wash Car <span class="remove" id="removeCar-el">REMOVE</span></td> 
    <td class="right"><span class="cr">$</span>10</td>
</tr>`
washCarEl.disabled = true;
total()
sum = 0
})

// ADD LAWN MOWING

mowLawnEl.addEventListener("click", function(){
    items.push(20)
    tableEl.innerHTML+= `<tr>
    <td class="left">Mow Lawn<span class="remove" id="removeLawn-el">REMOVE</span></td>
    <td class="right"><span class="cr">$</span>20</td>
</tr>
    `
    mowLawnEl.disabled = true;
    total()
    sum = 0
})

// ADD PULL WEEDS

pullWeedsEl.addEventListener("click", function(){
    items.push(30)
    tableEl.innerHTML+= `<tr>
    <td class="left">Pull Weeds<span class="remove" id="removeWeeds-el" onClick="delWeeds()">REMOVE</span></td>
    <td class="right"><span class="cr">$</span>30</td>
</tr>
    `
pullWeedsEl.disabled = true;
total()
sum = 0
})
/*
TOTAL FUNCTION
*/

function total (){
    for (let i = 0; i < items.length; i++){
    sum += items[i]
    }
    
    sumEl.textContent = "$"+sum;
}

// REMOVE ITEMS

// REMOVE CAR WASH 


// REMOVE PULL WEEDS
function delWeeds (){
    items.push(30)
    tableEl.innerHTML+= `<tr>
    <td class="left">Pull Weeds<span class="remove" id="removeWeeds-el" onClick="delWeeds()">REMOVE</span></td>
    <td class="right"><span class="cr">$</span>30</td>
</tr>
    `
pullWeedsEl.disabled = true;
total()
sum = 0
}