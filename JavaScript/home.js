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

//  Scroll animation
document.addEventListener('DOMContentLoaded', function() {
    const animate = ScrollReveal({
        origin: "top",// cuon tu tren xuong
        distance: "60px",// khoang cach 
        duration: 2500,//tgian
        delay: "400",// do tre cac phan tu
    });
    animate.reveal(".hero-section,.logo")
    animate.reveal(".about-text,#review h1",{origin:"left"})
    animate.reveal(".about",{interval:100})//  cuon xuat hien 
    animate.reveal("#products .h1 , b , products-span",{interval:100})
    animate.reveal(".Pro,.blogs .news-item",{interval:150});
    animate.reveal(".Alltext-contact",{origin:"top"})
});
/////////////////////////////////////////////////////////////////////

//  check login
function checkLogin(){
    var  Status=document.body.getAttribute('data-body')
    function link(){location.href='login.html'}
    function link2(){location.href='../login.html'}
    var user=JSON.parse(localStorage.getItem('dataUser'))||[];
    console.log(user)
    if(!user|| !user.status || user.length==0){
        //  check true  index.html
        if(Status=='body'){
            setTimeout(link,3000);
        }else if(Status!='body'){
            setTimeout(link,3000);
        }else{
            //   link  khac
            setTimeout(link2,3000);    
        }
        console.log('12343')
    }else{
        console.log('Login Succes');
    }
}
checkLogin(); 