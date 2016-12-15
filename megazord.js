// No scalability, just get the job done and create functions as needed


console.log("VIVA PERON")
var culol = 0;

function culo() {
    document.getElementById('Image-culo').src='http://www.cdc.gov/std/spanish/gonorrea/images/gonomain.jpg';
    console.log("VIVAN LOS CULOS "+culol);
}


window.onload = function() {
    document.getElementById("btn-culo").onclick = function fun() {
        culo();
        culol++;
    }
}