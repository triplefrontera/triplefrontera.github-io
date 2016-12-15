// No scalability, just get the job done and create functions as needed


console.log("VIVA PERON")
var culol = 0;

var imagenes = [];


function culo() {
    document.getElementById('Image-culo').src='http://www.cdc.gov/std/spanish/gonorrea/images/gonomain.jpg';
    ducoment.getElementById('Text-culo').innerHTML="<p> test </p><br><p> test </p>";
    console.log("VIVAN LOS CULOS number "+culol);
}


window.onload = function() {
    document.getElementById("btn-culo").onclick = function fun() {
        culo();
        culol++;
    }
}