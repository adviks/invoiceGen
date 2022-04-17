let prices = []
let HTML = []
let sum = 0
const tableEl = document.getElementById("table-el")
const washCarEl = document.getElementById("washCar-el")
const mowLawnEl = document.getElementById("mowLawn-el")
const pullWeedsEl = document.getElementById("pullWeeds-el")

const sumEl = document.getElementById("sum-el")

const removeCarEl = document.getElementById("removeCar-el")

// ADD ITEMS
// ADD CAR WASH

washCarEl.addEventListener("click", function(){
    prices.push(10)
    HTML.push(`<tr>
    <td class="left">Wash Car <span class="remove" id="removeCar-el" onclick="remCar()">REMOVE</span></td> 
    <td class="right"><span class="cr">$</span>10</td>
</tr>`)
washCarEl.disabled = true;
misc()

})

mowLawnEl.addEventListener("click", function(){
    prices.push(20)
    HTML.push(`<tr>
    <td class="left">Mow Lawn <span class="remove" id="removeCar-el" onclick="remLawn()">REMOVE</span></td> 
    <td class="right"><span class="cr">$</span>20</td>
</tr>`)
mowLawnEl.disabled = true;
misc()

})

pullWeedsEl.addEventListener("click", function(){
    prices.push(30)
    HTML.push(`<tr>
    <td class="left">Pull Weeds <span class="remove" id="removeCar-el" onclick="remWeeds()">REMOVE</span></td> 
    <td class="right"><span class="cr">$</span>20</td>
</tr>`)
pullWeedsEl.disabled = true;
misc()

})



// REMOVE ITEMS
// REMOVE CAR WASH
function remCar(){
    prices.pop(10)
    HTML.pop(`<tr>
    <td class="left">Mow Lawn <span class="remove" id="removeCar-el" onclick="remLawn()">REMOVE</span></td> 
    <td class="right"><span class="cr">$</span>20</td>
</tr>`)
washCarEl.disabled = false;
misc()

}

function remLawn(){
    prices.pop(20)
    HTML.pop(`<tr>
    <td class="left">Wash Car <span class="remove" id="removeCar-el" onclick="remCar()">REMOVE</span></td> 
    <td class="right"><span class="cr">$</span>10</td>
</tr>`)
mowLawnEl.disabled = false;
misc()
}

function remWeeds(){
    prices.pop(20)
    HTML.pop(`<tr>
    <td class="left">Pull Weeds <span class="remove" id="removeCar-el" onclick="remWeeds()">REMOVE</span></td> 
    <td class="right"><span class="cr">$</span>20</td>
</tr>`)
pullWeedsEl.disabled = false;
misc()
}











/*-------------------------------------------------------------*/
// RENDER FUNCTION 

function render(){
    if(HTML.length === 0){
        tableEl.innerHTML = `<tr>
        <th class="left">TASK</th>
        <th class="right">TOTAL</th>
    </tr>`
    } 
        for(let i = 0; i < HTML.length; i++){
            tableEl.innerHTML+= HTML[i]
    }
}


// TOTAL FUNCTION

function total (){
    for (let i = 0; i < prices.length; i++){
    sum += prices[i]
    }
    
    sumEl.textContent = "$"+sum;
}

// misc function 
function misc (){
    render()
    total()
    sum = 0
}