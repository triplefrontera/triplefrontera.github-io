// No scalability, just get the job done and create functions as needed


console.log("VIVA PERON")
var culol = 0;

/*'<p>But... should toasts follow the same rule?\n\nI would say it\'s 
				pretty reasonable to have smoke coming out of a damn toaster, dude. \n\n
				What do product people have to say about this?</p>
				<br>
				<p>Wikipedia, however, is not so romantic: The term "smoke test" refers to 
				powering on a device simply to make sure it does not start smoking (indicating 
					a major problem). It originated in the testing of electronic hardware</p>',*/

//var templateChapter = {"imageURL":"link","text":"<p> Text </p> <br><p> Text </p>","footer":"text"};
var chapter = {"imageURL":"http://www.cdc.gov/std/spanish/gonorrea/images/gonomain.jpg",
				"textHTML":
				'<p>But... should toasts follow the same rule?\n\nI would say it\'s 
				pretty reasonable to have smoke coming out of a damn toaster, dude. \n\n
				What do product people have to say about this?</p>
				<br>
				<p>Wikipedia, however, is not so romantic: The term "smoke test" refers to 
				powering on a device simply to make sure it does not start smoking (indicating 
					a major problem). It originated in the testing of electronic hardware</p>'
				,
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