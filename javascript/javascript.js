var d = new Date ();
var cpthr = d.getHours();

if(cpthr >= 21 || cpthr <= 6) {
   const nuit = document.getElementById ('teste');
   nuit.setAttribute('class', 'nuit');
}

else{
   const jour = document.getElementById('teste');
   jour.setAttribute('class', 'jour');
}

const btnToggle = document.querySelector('.btn-toggle');
const body = document.body;

//clair => light ; sombre => dark
var choixtheme = localStorage.getItem('choixtheme');

//////////////////////////////////////////////////////////
//Pour recharger le dernier theme utilisé
if (choixtheme == "clair")
    {
    body.classList.add('light');
    body.classList.remove('dark');
    localStorage.setItem('choixtheme','clair');
    }
else if (choixtheme == "sombre")
    {
    body.classList.add('dark');
    body.classList.remove('light');
    localStorage.setItem('choixtheme','sombre');    
    }   
else
    {
    body.classList.add('light');
    body.classList.remove('dark');  
    localStorage.setItem('choixtheme','clair');          
    }
//////////////////////////////////////////////////////////

btnToggle.addEventListener('click', () =>{
    const body = document.body;

    if(body.classList.contains('dark')){
        body.classList.add('light');
        body.classList.remove('dark');
        localStorage.setItem('choixtheme','clair');
    }
    else if(body.classList.contains('light')){
        body.classList.add('dark');
        body.classList.remove('light');
        localStorage.setItem('choixtheme','sombre');
    }

})