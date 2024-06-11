//////////////////////////////////////////////////////////////////
// addCart Product
var add=JSON.parse(localStorage.getItem('addCart')) || [];
var dataUsser=JSON.parse(localStorage.getItem('dataUser')) || [];
// Cap nhat  sl  gio hang
    function uploadCart(){
        let soluong=0;
        add.forEach(slCart=>{
            soluong+=slCart.sl;
        })
       document.querySelector('#uploadCart').innerText=soluong;
    }
    uploadCart()
// button add cart
    function addCart(ID) {
        // alert('Đã thêm vào giỏ hàng')
        var product= document.querySelectorAll('.Pro');
        var sp=product[ID-1];
        var index=add.findIndex(value=>{
            return value.id==ID;
        });
        if(index<0){
            var addID=0;
        }else{
            addID=add[index].id;
        }
        if(ID==addID){
            add[index].sl+=1;
            console.log(add[index].sl)
        }
        else{
            var newArr={
                user:dataUsser.name,
                id:sp.getAttribute('data-id'),
                sl:1,
                name:sp.querySelector('h3').textContent,
                gia:sp.querySelector('#gia').textContent,
                img:sp.querySelector('img').getAttribute('src'),
            }
            add.push(newArr);
            console.log(add)
        }
        localStorage.setItem('addCart',JSON.stringify(add))
        uploadCart();
    }
// Xem giỏ hàng
var view_cart = document.getElementById('view-cart');

var view_buy=document.getElementById('buy-a');
    //  hien buy
    view_buy.addEventListener('mouseover', function() {
        view_cart.innerHTML = ''; // delet viewcart
        add.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
                <p>Quantity:${item.sl} |${item.name} - ${item.gia} </p>
            `;
            view_cart.appendChild(itemElement);
        });
        view_cart.style.display = 'block';

    });
    // an buy
    document.getElementById('buy-a').addEventListener('mouseout',function(){
        view_cart.style.display='none';
    })

////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////
// ViewCart
function ViewCart(){
    var PrintPro=document.getElementById('AllProducts');
    PrintPro.innerHTML='';
    var dola;
    let so=0;
    add.forEach(data=>{
        dola=(data.gia).slice(1);
        // console.log(dola);
        PrintPro.innerHTML+=`
        <div id="NamePro" class="NamePro" data-id=${data.id}>
            <ul class="ulName">
                <li>
                    <div class="id_img">
                        <i>ID:${data.id}</i>
                        <img src="${data.img}" alt="img">
                    </div>
                </li>
                <li>${data.name} <br>${data.gia}</li>
                <li><div class="soluong" >
                    <i class="min fas fa-minus" id="min"></i>
                    <input id="number" class="number" type="number" min="0" value="${data.sl}">
                    <i class="max fas fa-plus" id="max"></i>
                </li>
                <li id="dola">$${(dola)*(data.sl)}</li>
            </ul>
        </div>
        `
    })
}
ViewCart(); 
document.addEventListener('DOMContentLoaded',function(){
    var MoneyTotal=document.getElementById('MoneyTotal');
    var sl=document.querySelectorAll('.NamePro');
    var pay=document.getElementById('pay');
    function total(){
        var money=0,tien;
        add.forEach(item=>{
            var so=item.gia;
            so=so.slice(1)
            var sl=item.sl;
            tien=so*sl;
            money+=tien;
        })
        MoneyTotal.innerText="$ "+money;
        pay.innerHTML="$ "+money
    };
    total();
    sl.forEach(i=>{
        var id=i.getAttribute('data-id')
        var min=i.querySelector('.min');
        var max=i.querySelector('.max');
        var so=i.querySelector('#number');
        var dola=i.querySelector('#dola')
        let index=add.findIndex(i=> i.id===id);
        console.log(index)
        min.addEventListener('click',function(){
            if(parseInt(so.value)>=0){
                var value=parseInt(so.value)-1;
                so.value=value;
                var GIA=add[index].gia;
                GIA=GIA.slice(1);
                GIA=GIA*value;
                // console.log(GIA)
                dola.innerText="$ "+GIA;
                add[index].sl=value;
                if(value===0){
                    add.splice(index,1)
                    i.style.display='none';
                }
                localStorage.setItem('addCart',JSON.stringify(add))
                uploadCart();
                total();

            }
        });
        max.addEventListener('click',function(){
            var value = parseInt(so.value)+1;
            so.value = value;
            var GIA=add[index].gia;
            if(value>=0){
                GIA=GIA.slice(1);
                GIA=GIA*value;
                // console.log(gia)
                dola.innerText="$"+GIA;
                add[index].sl=value;
                localStorage.setItem('addCart',JSON.stringify(add))
                uploadCart();
                total();
            }
        });
    })
})
//////////////////////////////////////////////////////////////////
// check pay
document.addEventListener('DOMContentLoaded',function(){
    var userPay=document.querySelector('#userPay')
    var numberPay=document.querySelector('#numberPay')
    var addressPay=document.querySelector('#addressPay')
    var submit=document.querySelector('input[type="submit"]')
    // var check=document.querySelectorAll('.methods')
    // console.log(check)
    var checkRadio=document.querySelectorAll('input[name="radio"]');
    var  selec=false;
    console.log(selec)  
    console.log(add.length)
    submit.addEventListener('click',function(){
        if(add.length<=0){
            alert("Hãy thêm sản phẩm vào giỏ hàng!\nMua sắm ngay nào><")
            location.href='index.html#products'
        }else{
            checkRadio.forEach(r=>{
            if(r.checked)selec=true})  
            console.log(selec)
            if(userPay.value.trim()===''||numberPay.value.trim()===''|| !selec){
                alert('Vui lòng không để trống!')
            }else{
                alert('Bạn đã đặt thành công!')
            }
        }
    });
});