let humburger = document.getElementById('hamburger-lines');
let humburgerClose = document.getElementById('menu-hamburger-close');
let humburgerMenu = document.querySelector('.hamburger-menu');
let visitSubmit = document.getElementById('btn-visit');

const menuHumburger = function(){
  
    humburgerMenu.classList.remove('hide-element');
    
}
const menuHumburgerClose = function(){
    
    humburgerMenu.classList.add('hide-element');
}
humburger.addEventListener('click',menuHumburger);
humburgerClose.addEventListener('click',menuHumburgerClose);

/* Obsłga formularza ajax */

let btnForm = document.getElementById('btn-visit');
let visitCommit  = document.getElementById('visit-commit');

const addVisite = (visit) =>{
    
        fetch(`https://akademia108.pl/api/ajax/post-appointment.php`,{
            headers:{
                'Content-Type': 'application/json'
            },
            
            mode: 'cors',
            method: 'POST',
    
            body: JSON.stringify(visit)
    
            })
            .then(res=>res.json())
            .then(resJSON =>{
                console.log(resJSON);
    
                if(!resJSON.error){
                    visitCommit.style.color='#fff';
                    visitCommit.innerText=`Dziękujemy ${resJSON.appointment.name} za umówienie wizyty.
                    Numer wizyty to:  ${resJSON.appointment.id}`;
                    
                }
            })
            
             
        
    }


document.getElementById('visit-form').addEventListener('submit', function(e){
    e.preventDefault();

    
    let formName = document.getElementById('visit-name');
    let formEemail = document.getElementById('visit-email');
    let formService = document.getElementById('visit-service');
    let formTel = document.getElementById('visit-tel');
    let formDate = document.getElementById('visit-date');
    let formTime = document.getElementById('visit-time');
    let formMessage = document.getElementById('visit-message');
    
    
    let corect = 0;

    if (formName.value == ''){
        formName.style.borderBottom = "1px solid red";
        corect += 1;
    } else{
        formName.style.borderBottom = "1px solid #fff";
        
        }
    

    if (formEemail.value == ''){
        formEemail.style.borderBottom = "1px solid red";
        corect += 1;
    }
    else{
        formEemail.style.borderBottom = "1px solid #fff";
          
    }
    
    if (formService.value == ''){
        formService.style.borderBottom = "1px solid red";
        corect += 1;
    }
    else{
        formService.style.borderBottom = "1px solid #fff";
        
    }
    
    if (formTel.value == ''){
        formTel.style.borderBottom = "1px solid red";
        corect += 1;
    }
    else{
        formTel.style.borderBottom = "1px solid #fff";
        
    }
    
    if (formDate.value == ''){
        formDate.style.borderBottom = "1px solid red";
        corect += 1;
    }
    else{
        formDate.style.borderBottom = "1px solid #fff";
         
    }
    
    if (formTime.value == ''){
        formTime.style.borderBottom = "1px solid red";
        corect += 1;
    }
    else{
        formTime.style.borderBottom = "1px solid #fff";
         
    }

    let visit = {
        name: formName.value.trim(),
        email: formEemail.value.trim(),
        service: formService.value.trim(),
        phone: formTel.value.trim(),
        date: formDate.value.trim(),
        time: formTime.value.trim(),
        message: formMessage.value.trim()
    }
    console.log(corect);
    if (corect==0){
    
        
       addVisite(visit);
       console.log('wysłałem');
    } else{
    
        visitCommit.innerText='Wypełnji wszystkie pola';
     
    }
       
   
})
