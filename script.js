const washCarEl = document.getElementById("washCar-el")
const tableEl = document.getElementById("table-el")
const mowLawnEl = document.getElementById("mowLawn-el")
const pullWeedsEl = document.getElementById("pullWeeds-el")
let items = []
let sum = 0
const sumEl = document.getElementById("sum-el")


washCarEl.addEventListener("click", function(){
    items.push(10)
    tableEl.innerHTML += `<tr>
    <td class="left">Wash Car</td>
    <td class="right"><span class="cr">$</span>10</td>
</tr>`
washCarEl.disabled = true;
total()
sum = 0
})

mowLawnEl.addEventListener("click", function(){
    items.push(20)
    tableEl.innerHTML+= `<tr>
    <td class="left">Mow Lawn</td>
    <td class="right"><span class="cr">$</span>20</td>
</tr>
    `
    mowLawnEl.disabled = true;
    total()
    sum = 0
})

pullWeedsEl.addEventListener("click", function(){
    items.push(30)
    tableEl.innerHTML+= `<tr>
    <td class="left">Pull Weeds</td>
    <td class="right"><span class="cr">$</span>30</td>
</tr>
    `
pullWeedsEl.disabled = true;
total()
sum = 0
})


function total (){
    for (let i = 0; i < items.length; i++){
    sum += items[i]
    }
    
    sumEl.textContent = "$"+sum;
}
