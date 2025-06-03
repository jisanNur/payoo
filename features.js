// show the cash out from

document.getElementById('show-cash-out-btn')
.addEventListener('click', function (){
    // show cash out button clicked
    document.getElementById('cash-out-form').classList.remove('hidden');

    // show add money form
    document.getElementById('add-money-form').classList.add('hidden')
    
})

// show add money from at hide the cash out form

document.getElementById('show-add-money-btn')
.addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');

    document.getElementById('cash-out-form').classList.add('hidden')
})