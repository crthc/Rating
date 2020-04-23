let hearts = document.querySelector(".hearts").children;


for(let i = 0; i<hearts.length; i++){
    hearts[i].onmouseover =  mouseover;
    hearts[i].onmouseout = mouseout;
    hearts[i].addEventListener('click', clickForward);
    hearts[i].addEventListener('click', clickBackward);
    
   
 
    function mouseover (){
        for(let j= 0; j<=i; j++){
            hearts[j].classList.remove('fa-heart');
            hearts[j].classList.add('fa-w-16');
        }
    };

    function mouseout (){
        for(let j= 0; j<=i; j++){
            hearts[j].classList.remove('fa-w-16');
            hearts[j].classList.add('fa-heart');
        }

    };

    function clickForward (){
        for(let j= 0; j<=i; j++){
            hearts[j].style.color = 'red';
        }
        
    };


    function clickBackward (){
        for(let j= 4; j>i; j--){
            hearts[j].style.color = 'rgb(0, 162, 190)';
    }
};

     
};

window.addEventListener("click", function(clickOutside) {
    if(!document.querySelector(".hearts").contains(clickOutside.target)) { 
    for(let i = 0; i<hearts.length; i++){
        hearts[i].style.color = 'rgb(0, 162, 190)';
    }
    };
});






