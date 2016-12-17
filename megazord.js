// No scalability, just get the job done and create functions as needed


console.log("VIVA PERON")
var culol = 0;



//var templateChapter = {"imageURL":"link","text":"<p> Text </p> <br><p> Text </p>","footer":"text"};
var chapter = {"imageURL":"images/0.JPG",
				"textHTML": '<p> Text </p> <br><p> Text </p>',
				"footer":"text"};
var content = [];


function culo() {
    console.log("VIVAN LOS CULOS number "+culol);
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