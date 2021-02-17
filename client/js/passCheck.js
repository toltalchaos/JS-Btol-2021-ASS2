window.addEventListener('load',(evnt) =>{

    const password = document.querySelector('#password');
    const confpassword = document.querySelector('#confpassword');

    confpassword.addEventListener('keyup', () => {validatepass()})
    
    function validatepass() {
        if(password.value != confpassword.value){
            //console.log('nomatch')
            confpassword.setCustomValidity('passwords do not match')
        }
        else{
            //console.log('MATCH')
            confpassword.setCustomValidity('')
        }


    }
    


})