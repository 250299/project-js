let myform =document.getElementById('form');
let eror=document.getElementById('err');
//validate username input
myform.addEventListener('input',(e)=>
        {
            let usr=document.getElementById('usr');
            if(usr.value.trim()===""){
                eror.innerHTML="le champ username est obligatoire";
                eror.style.color='red';
                e.preventDefault();
            }else if(usr.value.length<=3 || usr.value.length>25){
                eror.innerHTML="username est compris entre 3 est 25 caractère";
                eror.style.color='red';
                e.preventDefault();
                }else{
                  eror.innerHTML="Valid username";
                eror.style.color='green';
                
                }
        });
//validate email input 
/*
<div class="centre">
    <label for="mail" >Email:</label><br>
    <input type=""  name="email" id="mail" placeholder="Email">
    <br><span id="er"></span>
    </div>*/
   
myform.addEventListener('input',(e)=>
        {
            let em=document.getElementById('mail');
            const regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
            if(em.value.trim()===""){
                let ereur=document.getElementById('er');
                ereur.innerHTML="le champ email est obligatoire";
                ereur.style.color='red';
                e.preventDefault();
          }else if(regex.test(em.value)==false){
            let ereur=document.getElementById('er');
            ereur.innerHTML="entre a valid email ex:chdgdf@hhh.com";
            ereur.style.color='red';
            e.preventDefault();
          }else {
            let ereur=document.getElementById('er');
            ereur.innerHTML="valid email ";
            ereur.style.color='green';

          }
        
      });
//password validation
myform.addEventListener('input',(e)=>
        {
            let pass=document.getElementById('pasw');
            let re=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;;
            if(pass.value.trim()===""){
                let rr=document.getElementById('r');
                rr.innerHTML="password est obligatoire";
                rr.style.color='red';
                e.preventDefault();
          }else if(re.test(pass.value)==false){
            let rr=document.getElementById('r');
            rr.innerHTML="entre a strong password";
            rr.style.color='red';
            e.preventDefault();
          }else {
            let rr=document.getElementById('r');
            rr.innerHTML="strong password ";
            rr.style.color='green';
            
         }
        
      });
//comfirm password
myform.addEventListener('input',(e)=>{
                  let c=document.getElementById("cm").value;
                  let pass=document.getElementById("pasw").value;
                  let message=document.getElementById("f");
               if(pass=="" && c==""){
                message.innerHTML='confirmation obligatoire';
                message.style.color="red";
               }else if(c==pass){
              message.innerHTML='mot de pass confirmé avec succés';
              message.style.color="green";
               }else{
                message.innerHTML='confirmation echoué ';
              message.style.color="red";
               }
               
});
/*document.querySelector('#redirect').addEventListener('click',() =>{   
  window.location.href='ff.html';
});*/
       
       
       function myfunction(){  
        'use strict';
        let pass=document.getElementById('pasw').value;
        let em=document.getElementById('mail').value;
      if(em=="admin@gmail.com" && pass=="Admin@123"){
        window.location.assign("./Page acceuil.html")
      }else {
        alert("pour etablir une connexion utiliser email:admin@gmail.com et password:Admin@123");
      }
    }

  
   


  
    
      
     
    

       
  
  
       
      
          
          








        
