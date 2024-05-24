function clickMenu(){
     var navbar=document.getElementById('navbar')
     var menuBtn=document.getElementById('close-menu-btn');
     var menu=document.getElementById('menu-btn');
     var header=document.querySelector('header');
     var nav=document.querySelector('nav');
     menuBtn.addEventListener('click',()=>{
          
         navbar.classList.toggle('active');
         nav.classList.toggle('open');
         header.classList.toggle('active');
          // navbar.style.display='block';
         navbar.style.transition='left 0.15s ease';
         navbar.style.left='10';
         menuBtn.style.display='none';

     })
     menu.addEventListener('click',()=>{
         menuBtn.click();
         menuBtn.style.display='block';
     })  
 }
 clickMenu();