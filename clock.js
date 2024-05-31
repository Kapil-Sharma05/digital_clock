const hours1 =document.getElementsByClassName("hours")[0];
const minutes1 =document.getElementsByClassName("minutes")[0];
const seconds1 =document.getElementsByClassName("seconds")[0];
const ampm =document.getElementsByClassName("ampm")[0];
function changedate()
{
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();



let zone= "AM";
h = h<10 ? "0"+h :h;
m = m<10 ? "0"+m :m;
s = s<10 ? "0"+s :s;
if(h>12)
{
zone="PM";
}


hours1.innerText = h;
minutes1.innerText = m;
seconds1.innerText = s;
ampm.innerText=zone;
// setTimeout(() => {
// }, timeout);

setTimeout(function()
{
changedate();
},1000);
}
changedate();