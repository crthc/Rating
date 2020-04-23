let stars=document.querySelector(".hearts").children;


for(let i = 0; i<stars.length; i++){
    stars[i].onmouseover =  funcion;
    stars[i].onmouseout = funcionn;
    stars[i].addEventListener('click', funcio3);
    stars[i].addEventListener('click', funcio4);
    
   
 
    function funcion (){
        for(let j= 0; j<=i; j++){
            stars[j].classList.remove('fa-heart');
            stars[j].classList.add('fa-w-16');
        }
    };

    function funcionn (){
        for(let j= 0; j<=i; j++){
            stars[j].classList.remove('fa-w-16');
            stars[j].classList.add('fa-heart');
        }

    };

    function funcio3 (){
        for(let j= 0; j<=i; j++){
            stars[j].style.color = 'red';
        }
        
    };


    function funcio4 (){
        for(let j= 4; j>i; j--){
            stars[j].style.color = 'rgb(0, 162, 190)';
    }
};

     
};

window.addEventListener("click", function(e) {
    if(!document.querySelector(".hearts").contains(e.target)) { 
    for(let i = 0; i<stars.length; i++){
        stars[i].style.color = 'rgb(0, 162, 190)';
    }
    };
})






