//  add money account

document.getElementById('btn-add-money')
    .addEventListener('click', function () {


        const addMoneyInput = document.getElementById('input-add-money').value;

        const pinNumber = document.getElementById('input-pin-number').value;

        if (pinNumber === '1234') {
            const balance = document.getElementById('account-balance').innerText;

            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);

            const newBalance = addMoneyNumber + balanceNumber;

            document.getElementById('account-balance').innerText = newBalance;



        }
        else {
            alert('Failed to add money! Please try again');
        }

        document.getElementById('input-add-money').value = '';

        document.getElementById('input-pin-number').value = '';

    })

// cash out amount

document.getElementById('btn-cash-out')
    .addEventListener('click', function(){
        const cashOutInput = document.getElementById('input-cash-out').value;

        const cashOutPin = document.getElementById('cashout-pin-number').value;

        if(cashOutPin === '1234'){

            const balance = document.getElementById('account-balance').innerText;

            
            const cashOutNumber = parseFloat(cashOutInput);
            const balanceNumber = parseFloat(balance);
            
            const newBalance = balanceNumber - cashOutNumber;

            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('Failed to add money! Please try again')
        }

        document.getElementById('input-cash-out').value = '';

        document.getElementById('cashout-pin-number').value = '';
        
    });