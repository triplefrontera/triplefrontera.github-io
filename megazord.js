// No scalability, just get the job done and create functions as needed


console.log("VIVA PERON")


function culo() {
    document.getElementById('Image-culo').src='http://www.cdc.gov/std/spanish/gonorrea/images/gonomain.jpg';
    console.log("VIVAN LOS CULOS");
}


window.onload = function() {
    document.getElementById("btn-culo").onclick = function fun() {
        culo();
    }
}