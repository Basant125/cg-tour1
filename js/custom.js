
let btn = document.querySelector('#bars');
let  navi = document.getElementById('navi');


btn.addEventListener('click', function(){
     navi.classList.toggle("show");
     btn.classList.toggle('change');
});

// modal section 
let tab = document.querySelector('#tab-contact');
let modal = document.querySelector('#mymodal');
let close = document.getElementById('close');

tab.addEventListener('click',function(){
        modal.style.display ="block";
});