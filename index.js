 const  textbox=document.getElementById("textbox");
 const  tofahrenheit=document.getElementById("tofahrenheit");
 const  celsius=document.getElementById("celsius");
 const  display=document.getElementById("display");
let temp;

function convert(){
 if(tofahrenheit.checked){
    temp=Number(textbox.value)
    temp= temp*9/5+32;
    display.textContent=temp.toFixed(1)+"°F"
 }
 else if(celsius.checked){
    temp=Number(textbox.value)
    temp= (temp-32)*(5/9);
    display.textContent=temp.toFixed(1)+"°C"
 }
 else{
    display.textContent="Select a Unit!"
 }

}