let array=[];
function arrayPush(){
    let pushvalue=document.getElementById("demo").value;
    array.push( pushvalue);
    arrayLop();
}
function arrayPop(){
     array.pop();
    arrayLop();
}
function arrayLop(){
    document.getElementById("value").innerHTML="";
    document.getElementById("demo").value=""; 
   
    for (let index = 0; index < array.length; index++) {
        let html= `<h1>${index+1}: ${array[index]}</h1>`
        document.getElementById("value").innerHTML+=html; 
    }
}
