console.log("VIVA PERON")
var culol = 0;
var alabasto = 0;


function culo() {

    console.log("VIVAN LOS CULOS number "+culol);
    console.log("VIVAN LOS ALABASTOS DEL MUNDO "+alabasto);

    switch (alabasto){
        case 0:
            createPopulatedMap();
            break;
        
        default:
            turnos();
    }
    
    
}


window.onload = function() {
    document.getElementById("btn-culo").onclick = function fun() {
        console.log("eee");
        culo();
        culol++;
    }
}