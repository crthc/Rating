const stars=document.querySelector(".hearts").children;
const text=document.querySelector('.text-danger').children;

for(let i = 0; i<stars.length; i++){
    stars[i].onmouseover =  funcion;
    stars[i].onmouseout = funcionn;
    stars[i].onclick = funcio3;

 
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

     
};






