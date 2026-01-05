
function calculate(){
    let price=document.getElementById("price").value;
    let qty=document.getElementById("quantity").value;
    let dis=document.getElementById("discount").value;
    let total=price*qty;
    let bill=total-(total*dis/100);
    document.getElementById("total").innerText="Total:"+bill+"/-";
}
function booktable(){
    alert("Your Table hasbeen booked successfully.")
}
function submitmsg(){
    alert("Your message sent.")
}
function show(){
    document.getElementById("lays").innerText="LAYS\n"+"PRICE:10/-";
}
function showice(){
    document.getElementById("ice").innerText="ICE CREAM\n"+"PRICE:30/-";
}
function showidly(){
    document.getElementById("idly").innerText="IDLY SAMBAR\n"+"PRICE:30/-\n"+"Rating:&#11088";
}
function showdosa(){
    document.getElementById("dosa").innerText="DOSA\n"+"PRICE:30/-\n"+"Rating:";
}

function showpuri(){
    document.getElementById("puri").innerText="POORI\n"+"PRICE:30/-";
}
let orderfood=()=>{
    console.log("your item is add to orderlist")
}