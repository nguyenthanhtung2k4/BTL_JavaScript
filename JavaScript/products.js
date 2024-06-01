//  loadlStorage  thiet  lap lay  du  lieu 
    /* const products = [
    { id: 1, name: "PAPER POUCH", gia: 25,img: "./img/products/sp1.jpg",img2:'',img3:'' },
    { id: 2, name: "Barista 1864 CaFe", gia: 30, img: "./img/products/sp2.jpg" },
    { id: 3, name: "Priod coffee", gia: 25, img: "./img/products/sp3.jpg" },
    { id: 4, name: "Product", gia: 25, img: "img4.jpg" },
    { id: 5, name: "Product", gia: 500, img: "./img/products/sp4.jpg" },
    { id: 6, name: "Product", gia: 600, img: "img6.jpg" }
]; */
    var product=[]
    var tongSanpham=document.querySelectorAll('.sanpham-tong');
    tongSanpham.forEach(all=>{
        var pro=all.querySelectorAll('.Pro')
        pro.forEach(sp=>{
            var newArr={
               id:sp.getAttribute('data-id'),
               name:sp.querySelector('h3').textContent,
               gia:sp.querySelector('#gia').textContent,
               img:sp.querySelector('img').getAttribute('src'),
            }
            product.push(newArr);
        });
    });
    function Sp(id){
        var pro=product.find(p => p.id===id)
        localStorage.setItem('sp',JSON.stringify(pro))
        window.location.href='product.html'
    }
//  navar cuon  xuong 
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
