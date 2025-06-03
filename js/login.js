// console.log('clicked')

document.getElementById('login-btn')
    .addEventListener("click", function () {

        const phoneNumber = document.getElementById('phone-number').value;
        // console.log(phoneNumber)

        const pinNumber = document.getElementById('pin-number').value;
     
      if(phoneNumber === '5' && pinNumber === '1111'){
       window.location.href = '/payoo.html';
      }
      else{
        alert('Please Enter Carrect number and pin')
      }


    })