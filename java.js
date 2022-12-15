'use strict'

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

const header = document.querySelector('.header');

const minibox1 = document.querySelector('.minibox1');
const button = document.querySelectorAll('.button');

const java = document.querySelector('.java');

const logo = document.querySelectorAll('.logo2');

const logo3 = document.querySelector('.logo3');
const logo4 = document.querySelector('.logo4');

const zamykanie = document.querySelector('.zamykanie');

const kurwa2 = document.querySelector('.text-microbox2');
const kurwa3 = document.querySelector('.text-microbox3');

const txtshow = document.querySelector('.txtshow1');
const txtshow2 = document.querySelector('.txtshow2');
const txtshow22 = document.querySelector('.txtshow22');
const txtshow3 = document.querySelector('.txtshow3');
const txtshow33 = document.querySelector('.txtshow33');

const malybox1 = document.querySelector('.microbox1');


const kurwa = document.querySelector('.text-microbox1');

const kontener2 = document.querySelector('#container2')

const dol1 = document.querySelector('.dol1');
const dol2 = document.querySelector('.dol2');
const dol3 = document.querySelector('.dol3');
const dol4 = document.querySelector('.dol4');

const gora1 = document.querySelector('.gora1');
const gora2 = document.querySelector('.gora2');
const gora3 = document.querySelector('.gora3');
const gora4 = document.querySelector('.gora4');




function myFunction(q) {
    if (q.matches) {
        box2.style.marginTop = '20px';
        box2.style.marginBottom = '20px';
        kontener2.style.display = 'flex';
        kontener2.style.flexDirection = 'column';
        
        box1.addEventListener('click', function() {
            box2.style.transform = 'translateX(1000px)';
            box3.style.transform = 'translateX(1000px)';
            setTimeout(znikanie, 500)
            setTimeout(btnshow, 500 ); 
            setTimeout(wiekszeOknoBox1, 500);
            btnOff();  
            setTimeout(textshow1, 800);
            
            
            
        })

        box3.addEventListener('click', function() {
            box1.style.transform = 'translateX(1000px)';
            box2.style.transform = 'translateX(1000px)';
            setTimeout(znikanie2, 500);
            setTimeout(btnshow, 500 );
            setTimeout(wiekszeOknoBox3, 500);
            setTimeout(textshow3, 800);
            btnOff();
           
            
        })

        box2.addEventListener('click', function() {
            box1.style.transform = 'translateX(1000px)';
            box3.style.transform = 'translateX(1000px)';
            setTimeout(znikanie3, 500);
            setTimeout(btnshow, 500 );
            setTimeout(wiekszeOknoBox2, 500);
            setTimeout(textshow2, 800);
            btnOff();
            
        })
        

    } else {
        box2.style.marginRight = '20px';
        box2.style.marginLeft = '20px';
        kontener2.style.display = 'flex';
        kontener2.style.flexDirection = 'row';
        
        box1.addEventListener('click', function() {
            box2.style.transform = 'translateY(1200px)';
            box3.style.transform = 'translateY(1200px)';
            setTimeout(znikanie, 500);
            setTimeout(btnshow, 500 );
            setTimeout(wiekszeOknoBox1, 500);
            btnOff();
            setTimeout(textshow1, 800);
            
            
            
            
        })

        box3.addEventListener('click', function() {
            box1.style.transform = 'translateY(1200px)';
            box2.style.transform = 'translateY(1200px)';
            setTimeout(znikanie2, 500);
            setTimeout(btnshow, 500 );
            setTimeout(wiekszeOknoBox3, 500 );
            setTimeout(textshow3, 800);
            btnOff();
            
        })

        box2.addEventListener('click', function() {
            box1.style.transform = 'translateY(1200px)';
            box3.style.transform = 'translateY(1200px)';
            setTimeout(znikanie3, 500);
            setTimeout(btnshow, 500 );
            setTimeout(textshow2, 800);
            btnOff();
            wiekszeOknoBox2();
            
        })

    }
}

var q = window.matchMedia("(max-width: 1000px)")
myFunction(q)
q.addListener(myFunction)



zamykanie.addEventListener('click', function() {
    box1.style.display = 'block';
    box2.style.display = 'block';
    box3.style.display = 'block';
    box1.style.transform = 'translateY(0px)';
    box2.style.transform = 'translateY(0px)';
    box3.style.transform = 'translateY(0px)';
    zamykanie.style.display = 'none';
    wiekszeOknoOff();
    btnOn();
    textshow1Off();
       
})


const zamykanieCzas = function() {
    box1.style.display = 'block';
    box2.style.display = 'block';
    box3.style.display = 'block';
    box1.style.transform = 'translateY(0px)';
    box2.style.transform = 'translateY(0px)';
    box3.style.transform = 'translateY(0px)';
    zamykanie.style.display = 'none';
    btnOn();
}



const btnOff = function() {
    
    for (let i = 0; i < button.length; i++) {
        button[i].style.display = 'none';
    }
}

const btnOn = function() {
    
    for (let i = 0; i < button.length; i++) {
        button[i].style.display = 'block';
        button[i].style.display = 'flex';
        button[i].style.alignItems = 'center';
    }
}

const textshow1 = function() {
    txtshow.style.display = 'block';
}

const textshow2 = function() {
    
    txtshow2.style.display = 'block';
    txtshow22.style.display = 'block';
}

const textshow3 = function() {
    
    txtshow3.style.display = 'block';
    txtshow33.style.display = 'block';
}

const textshow1Off = function() {
    txtshow.style.display = 'none';
    txtshow2.style.display = 'none';
    txtshow22.style.display = 'none';
    txtshow3.style.display = 'none';
    txtshow33.style.display = 'none';
}


const wiekszeOknoBox1 = function() {
    box1.style.height = '700px';
    box1.style.width = '700px';
}

const wiekszeOknoBox2 = function() {
    box2.style.height = '700px';
    box2.style.width = '700px';
}

const wiekszeOknoBox3 = function() {
    box3.style.height = '700px';
    box3.style.width = '700px';
}

const wiekszeOknoOff = function() {
    box2.style.height = '500px';
    box2.style.width = '500px';

    box1.style.height = '500px';
    box1.style.width = '500px';

    box3.style.height = '500px';
    box3.style.width = '500px';
}



const btnshow = function() {
    zamykanie.style.display = 'block';

}

const znikanie = function() {
    box2.style.display = 'none';
    box3.style.display = 'none';
}


const znikanie2 = function() {
    box1.style.display = 'none';
    box2.style.display = 'none';
}

const znikanie3 = function() {
    box1.style.display = 'none';
    box3.style.display = 'none';
}



const logo3Show = function() {
    logo3.style.transform = 'translateX(0px)';
    logo3.style.transition = 'all 0.4s ease-in';
}

const logo4Show = function() {
    logo4.style.transform = 'translateY(0px)';
    logo4.style.transition = 'all 0.4s ease-in';
}


setTimeout(logo4Show, 1200);

setTimeout(logo3Show, 1000);




const logoShow = function () {
    logo.style.display = 'block';
    logo.style.transform = 'translateY(0px)';
}

const dolbox1 = function() {
    dol1.style.transform = 'translateY(0px)';
    dol1.style.transition = 'all 0.4s ease-in';
}

const dolbox2 = function() {
    dol2.style.transform = 'translate(0px)';
    dol2.style.transition = 'all 0.5s ease-in';
}

const dolbox3 = function() {
    dol3.style.transform = 'translate(0px)';
    dol3.style.transition = 'all 0.7s ease-in';
}

const dolbox4 = function() {
    dol4.style.transform = 'translate(0px)';
    dol4.style.transition = 'all 0.9s ease-in';
}

const gorabox1 = function() {
    gora1.style.transform = 'translate(0px)';
    gora1.style.transition = 'all 0.6s ease-in';
}

const gorabox2 = function() {
    gora2.style.transform = 'translate(0px)';
    gora2.style.transition = 'all 0.6s ease-in';
}

const gorabox3 = function() {
    gora3.style.transform = 'translate(0px)';
    gora3.style.transition = 'all 0.6s ease-in';
}

const gorabox4 = function() {
    gora4.style.transform = 'translate(0px)';
    gora4.style.transition = 'all 0.9s ease-in';
}

setTimeout(dolbox1, 1000);
setTimeout(dolbox2, 1100);
setTimeout(dolbox3, 1100);
setTimeout(dolbox4, 1100);

setTimeout(gorabox1, 1100);
setTimeout(gorabox2, 1300);
setTimeout(gorabox3, 900);
setTimeout(gorabox4, 1500);






setTimeout(logoShow, 700)








box1.addEventListener('mouseenter', function () {
    box1.style.transform = 'scale(1.02)';
})

box1.addEventListener('mouseleave', function () {
    box1.style.transform = 'scale(1.0)';
})


box2.addEventListener('mouseenter', function () {
    box2.style.transform = 'scale(1.02)';
   
})

box2.addEventListener('mouseleave', function () {
    box2.style.transform = 'scale(1.0)';
})

box3.addEventListener('mouseenter', function () {
    box3.style.transform = 'scale(1.02)';
})

box3.addEventListener('mouseleave', function () {
    box3.style.transform = 'scale(1.0)';
})


