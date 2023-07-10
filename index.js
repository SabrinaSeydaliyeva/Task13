let box1 = document.querySelector('.box-1')
let box2 = document.querySelector('.box-2')
let box3 = document.querySelector('.box-3')

function Number(a) {
    let ul = document.createElement('ul')
    ul.innerText = a

    if (a % 3 == 0) {
        box1.append(ul)
    }
    else if (a % 5 == 0) {
        box2.append(ul)
    }
    else if (a % 7 == 0) {
        box3.append(ul)
    }
}

Number('10')
Number('7')
Number('6')