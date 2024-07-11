///products
var ID=document.querySelector('#img-main').getAttribute('data-Id');
var add=JSON.parse(localStorage.getItem('addCart')) || [];
var dataUsser=JSON.parse(localStorage.getItem('dataUser')) || [];
var number=document.getElementById('number');
var index=add.findIndex(i=>{
    return ID==i.id;
})
// //  nhap // cap nhap id addcart
// function Nhap(value){
//     if(value>0){
//         add[index].sl+=1;
//     }
//     else if(value<0 && add[index].sl >1 && number.value>1){
//             add[index].sl-=1;
//     }
//     number. value=add[index].sl;
//     uploadNhap();
//     updateMinButton();
//     localStorage.setItem('addCart',JSON.stringify(add))
// }
// kiem tra ham  số luong trong add thêm vào number 
function kiemtra(){
    if(index>=0){
        number.value=add[index].sl;
    }else{
        number.value=1;
    }
}
kiemtra();