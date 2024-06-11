//  navar 
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
  
// Node back 
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var back=document.getElementById('back');
    var benner = document.getElementsByClassName("benner")[0];
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        benner.style.top = "-100";
    } else {
        benner.style.top = "0px";
    }
    if(document.body.scrollTop>2000 ||document.documentElement.scrollTop > 2000){
        back.style.display='block';
    }else{
        back.style.display='none';

    }
}       
/////////////////////////////////////////////////////////////////////
//  check login
function checkLogin(){
    function link(){location.href='login.html'}
    var user=JSON.parse(localStorage.getItem('dataUser'))||[];
    console.log(user)
    if(!user|| !user.status || user.length==0){
        setTimeout(link,3000);
        console.log('12343')
    }else{
        console.log('Login Succes');
    }
}
checkLogin(); 