const przyciskNowaGra = document.getElementById('nowaGra');
const karta = document.getElementById('karta');
const up = document.getElementById('up'); 
const down = document.getElementById('down');
const info = document.getElementById('info');
const punkty = document.getElementById('punkty');
let stol = 0;
let reka = 0;
let punktacja = 0;
up.style.display = 'none';
down.style.display = 'none';
const karty = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const kolory = ['C','D','H','S'];
let kolor = 0;


function rozpocznijGre(){
    punkty.classList.remove('red-glow');
    info.innerHTML = "";
    punktacja = 0;
    punkty.innerHTML = "Punkty: "+punktacja;
    stol = Math.floor(Math.random()*13);
    kolor = Math.floor(Math.random()*4);
    przyciskNowaGra.style.display = 'none';
    up.style.display = 'inline-block';
    down.style.display = 'inline-block';
    karta.classList.add('green-glow');
    setTimeout(() => karta.classList.remove('green-glow'), 1000);    
    setTimeout(() => karta.innerHTML = "<img src='img/"+karty[stol]+kolory[kolor]+".png'>",500);
}

main();
function main (){
    przyciskNowaGra.addEventListener('click',rozpocznijGre)
    up.addEventListener ('click', function() {
        wybor ("gora");
    })
    down.addEventListener ('click', function() {
        wybor ("dol");
    })
}

function wybor(przycisk){
    reka = Math.floor(Math.random()*13);
    kolor = Math.floor(Math.random()*4);
    console.log(przycisk);
    console.log(stol);
    console.log(reka)
    if (reka>stol){
        info.innerHTML = "Wylosowana karta jest większa, punkt dla Ciebie!";
        if(przycisk=="gora"){
            punktacja++;
            punkty.classList.add('swing');
            setTimeout(() => punkty.classList.remove('swing'), 1000);
            punkty.innerHTML = "Punkty: "+punktacja;
        }
        if(przycisk=="dol"){
            koniecgry();            
        }
    }
    if(reka<stol){
        info.innerHTML = "Wylosowana karta jest mniejsza, punkt dla Ciebie!";
        if(przycisk=="dol"){
            punkty.classList.add('swing');
            setTimeout(() => punkty.classList.remove('swing'), 1000);
            punktacja++;
            punkty.innerHTML = "Punkty: "+punktacja;
        }
        if(przycisk=="gora"){
            koniecgry();            
        }
    }
    if(reka==stol){
        punkty.classList.add('swing');
        setTimeout(() => punkty.classList.remove('swing'), 1000);
        info.innerHTML = "Wylosowana karta jest taka sama";
    }

    karta.classList.add('green-glow');
    setTimeout(() => karta.classList.remove('green-glow'), 1000);
    setTimeout(() => karta.innerHTML = "<img src='img/"+karty[reka]+kolory[kolor]+".png'>", 500); 
    stol = reka;
  
}

function koniecgry(){
    punkty.classList.add('red-glow');
    punkty.innerHTML = "Twój wynik: "+punktacja;
    up.style.display = 'none';
    down.style.display = 'none';
    przyciskNowaGra.style.display = 'inline-block';
    info.innerHTML = "Przegrałeś :(";
}