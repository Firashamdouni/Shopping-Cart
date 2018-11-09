let totalprice=0 ;
  let p =[20,50,100];
var a =document.getElementsByClassName('item-group');


let i=0 ;
while(i<a.length){
function myFunction(i) {
 
    var a =document.getElementsByClassName('item-group');
    var s = confirm('ARE YOU SURE!');
    if (s=== true){ 
        a[i].remove();
        
        
    }
    
    
}
function plusFunction(i,p){
    var x = document.getElementById("quantiter"+i);
    var z = document.getElementById("price"+i);
    var b = document.getElementById("total");
    var a =x.innerHTML;
    a= Number(a)+1;
    x.innerHTML=a;
    var c  = document.getElementById("price"+i);
    var total = p*a;
    z.innerHTML=total;
    
    //b.innerHTML = Number(totalprice)+total;

}
function minusFunction(i,p,e){
    
    var x = document.getElementById("quantiter"+i);
    var z = document.getElementById("price"+i);
    var b = document.getElementById("total"+i);
    var a =x.innerHTML;
    a= Number(a)-1;
    if (a<0){
        alert('stooop');
        e.preventDefault;
    } else{Number(a)-1;}
    x.innerHTML=a;
    var c  = document.getElementById("price");
    var total = p*a;
    z.innerHTML=total;
    var aa = document.getElementById('total');
    //aa.innerHTML = total-totalprice;
    
}
function likeFunction(i){
    var x = document.getElementById('like'+i);
    x.style.color = "red";
    //alert('good choice');
}
function unlikeFunction(i){
    var x = document.getElementById('like'+i);
    x.style.color = "light";
e.preventDefault();
}

/*var bb =document.getElementsByClassName('button');
bb.addEventListener("click",sum);
function sum (){
    sum=0;
    var a = document.getElementsByClassName('sum');
   
    for (let i =0 ;i<a.length;i++) { 
    sum+=Number(a[i].innerHTML);}  
    return sum;
    var b = document.getElementById("total").innerHTML;
        b=sum;

}*/
window.addEventListener("click", function(){
    sum=0;
    var a = document.getElementsByClassName('sum');
    var b = document.getElementById("total");
    for (let i =0 ;i<a.length;i++) { 
    sum+=Number(a[i].innerHTML);}  
    b.innerHTML=sum;
 
  
       
});

var show = document.getElementById('btn-show')
show.addEventListener("click", function(){
        var a = document.getElementById('hidden')  ;
        a.style.visibility="visible";   
});





i++;
}































/*

function myFunction() {
    var list = document.getElementById("myList");
    list.removeChild(list.childNodes[2]);
    confirm('ARE YOU SURE!')
}



function plusFunction(i){
    var p = 20
    var x = document.getElementById("quantiter");
    var z = document.getElementById("price");
    var b = document.getElementById("total");
    var a =x.innerHTML;
    a= Number(a)+1;
    x.innerHTML=a;
    var c  = document.getElementById("price");
    var total = p*a;
    z.innerHTML=total;
    var aa = document.getElementById('total');
    aa.innerHTML = totalprice+total;

}

function minusFunction(e){
    var p = 20
    var x = document.getElementById("quantiter");
    var z = document.getElementById("price");
    var b = document.getElementById("total");
    var a =x.innerHTML;
    a= Number(a)-1;
    if (a<0){
        alert('stooop');
        e.preventDefault;
    } else{Number(a)-1;}
    x.innerHTML=a;
    var c  = document.getElementById("price");
    var total = p*a;
    z.innerHTML=total;
    var aa = document.getElementById('total');
    aa.innerHTML = total-totalprice;
    
}

///////////////////////////////////////////////////////////////////////
function myFunction1() {
    var list = document.getElementById("myList");
    list.removeChild(list.childNodes[4]);
    confirm('ARE YOU SURE!')
}

function plusFunction1(){
    var p = 50
    var x = document.getElementById("quantiter1");
    var z = document.getElementById("price1");
    var b = document.getElementById("total1");
    var a =x.innerHTML;
    a= Number(a)+1;
    x.innerHTML=a;
    x.inxnerHTML=a;
    var c  = document.getElementById("price1");
    var total = p*a;
    z.innerHTML=total;

}

function minusFunction1(e){
    var p = 20
    var x = document.getElementById("quantiter1");
    var z = document.getElementById("price1");
    var b = document.getElementById("total1");
    var a =x.innerHTML;
    a= Number(a)-1;
    if (a<0){
        alert('stooop');
        e.preventDefault;
    } else{Number(a)-1;}
    x.innerHTML=a;
    var c  = document.getElementById("price1");
    var total = p*a;
    z.innerHTML=total;

    
}


function myFunction0() {
var x = document.getElementById("total");
var z = document.getElementById("price1").innerHTML;
var c = document.getElementById("price").innerHTML;
x .innerHTML= Number(z)+Number(c);
}
//////////////////////////////////////////////////
function likeFunction(){
    var x = document.getElementById('like');
    x.style.color = "red";
    alert('good choice');
}*/