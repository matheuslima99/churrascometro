let homeBtn = document.querySelector('.bg-image button');
let modalInput = document.querySelector('.modal');
let inputAdults = document.querySelector('.input-adults');
let inputKids = document.querySelector('.input-kids');
let inputHours = document.querySelector('.input-hours');
let calcBtn = document.querySelector('.calc-btn');
let modalResult = document.querySelector('.modal-result');
let clearBtn = document.querySelector('.clear-btn');
let listResult = document.querySelector('.list-result ul');
let btnBack = document.querySelector('.btn-back');

homeBtn.onclick = ()=>{
    homeBtn.style.display = 'none';
    modalInput.style.display = 'block';
};

calcBtn.onclick = ()=>{
    if(inputAdults.value != '' && inputKids.value != '' && inputHours.value != '') {
        let adults = inputAdults.value;
        let kids = inputKids.value;
        let hours = inputHours.value;
        
        let totalMeat = ((calcMeat(hours) * adults) + (calcMeat(hours) * kids / 2)) / 1000;
        let totalBeer = Math.ceil((calcBeer(hours) * adults) / 473);
        let totalSoda = Math.ceil(((calcSoda(hours) * adults) + (calcSoda(hours) * kids / 2)) / 2000);
        
        // result presentation
        listResult.innerHTML = `<li><span class="result-number">${totalMeat}</span> Kg de carne</li>`
        listResult.innerHTML += `<li><span class="result-number">${totalBeer}</span> latas de cerveja (473ml)</li>`
        listResult.innerHTML += `<li><span class="result-number">${totalSoda}</span> garrafa(s) de refrigerante (2L)</li>`

        modalInput.style.display = 'none';
        modalResult.style.display = 'block';
    }else{
        alert('Por favor, preencha todos os campos.');
    };
};
function calcMeat (_hours){
    if(inputHours.value >= 6){
        return 600
    }else{
        return 400
    };
};

function calcBeer(_hours){
    if(inputHours.value >= 6){
        return 2000
    }else{
        return 1200
    };
};

function calcSoda(_hours){
    if(inputHours.value >= 6){
        return 1500
    }else{
        return 1000
    };
};

// clear all input value
function clearInput (){
    inputAdults.value = '';
    inputKids.value = '';
    inputHours.value = '';
}

clearBtn.onclick = ()=>{
    clearInput();
};

btnBack.onclick = ()=>{
    modalResult.style.display = 'none';
    modalInput.style.display = 'block';
    // clear input value
    clearInput();
};

