// No scalability, just get the job done and create functions as needed


console.log("VIVA PERON")


function f1() {
    alert("f1 called");
    //form validation that recalls the page showing with supplied inputs.    
}


function culo() {
    document.getElementById('Image-culo').src='http://www.cdc.gov/std/spanish/gonorrea/images/gonomain.jpg'
    console.log("VIVAN LOS CULOS");
}

window.onload = function() {
    document.getElementById("btn-culo").onclick = culo();
}
