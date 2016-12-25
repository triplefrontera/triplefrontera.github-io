// No scalability, just get the job done and create functions as needed


console.log("VIVA PERON")
var culol = 0;



//var templateChapter = {"imageURL":"link","text":"<p> Text </p> <br><p> Text </p>","footer":"text"};
var chapter = {"imageURL":"images/0.JPG",
				"textHTML": '<p> Text </p> <br><p> Text </p>',
				"footer":"text"};
var content = [
  {
    "imageURL": "images/rev1-0.JPG",
    "textHTML": "<p> Introduction </p> <br><p> Paragraph 2 </p>",
    "footer": "Footer text makes it interesting"
  },
  {
    "imageURL": "images/rev1-1.JPG",
    "textHTML": "<p> Incluso las máquinas más perfectas creadas por la humanidad (como por ejemplo, las toallas y los tostadores) tienen, por definición, errores de fabricación e interfaces que generan dudas para los humanos inadvertidos. La gran innovación en la técnica perfeccionista de los humanos manufacturadores fue, por supuesto, resuelto a nivel legal: se llama Reductio ad Terminums et Condicionems, y sigue los principios de “Como proveedor de un servicio que no está claramente definido, sus datos son míos, y yo a cambio doy garantía de absolutamente nada”.</p><p>Como consecuencia de este fenómeno histórico y poco rastreable, la recolección de evidencias siempre fue el trabajo más difícil para un cerebro superdesarrollado como el positrónico y multidimensional cerebrín de Megazord. Verá, estimado e ignorante lector, todo se debe a que las cosas pasan y seguirán pasando por todas las eternidades siempre dependiendo de las oscilaciones sociopolíticas pretéritas de los atardeceres analíticos del tiempoespacio. En más simples palabras, Megazord sabe muy bien que los registros son siempre ficcionales y bipartidistas, por tanto tiene un nivel de desconfianza insalvable para todo lo sucedido en las épocas pre-Megazordianas.</p>",
    "footer": "Footer text makes it interesting"
  },
  {
    "imageURL": "images/rev1-0.JPG",
    "textHTML": "<p> Introduction </p> <br><p> Paragraph 2 </p>",
    "footer": "Footer text makes it interesting"
  },
  {
    "imageURL": "images/rev1-0.JPG",
    "textHTML": "<p> Introduction </p> <br><p> Paragraph 2 </p>",
    "footer": "Footer text makes it interesting"
  }
];


function culold() {
    console.log("VIVAN LOS CULOS number "+culol);
    document.getElementById('Image-culo').src=chapter.imageURL;
    document.getElementById('Text-culo').innerHTML=chapter.textHTML;
    document.getElementById('Footer-culo').innerHTML="<p> "+chapter.footer+"</p>";
    
}

function culo() {
    console.log("VIVAN LOS CULOS number "+culol);
    var chapter = content[culol];
    document.getElementById('Image-culo').src=chapter.imageURL;
    document.getElementById('Text-culo').innerHTML=chapter.textHTML;
    document.getElementById('Footer-culo').innerHTML="<p> "+chapter.footer+"</p>";
    
}


window.onload = function() {
    document.getElementById("btn-culo").onclick = function fun() {
        culo();
        culol++;
    }
}