var canvas;
var ctx;
var tiles = [];
var r = 50; //tile radius and side length
var sideAngle = Math.PI/5;
var sideRCos = r*Math.cos(sideAngle);
var sideRSin = r*Math.sin(sideAngle);
var h = Math.sqrt(3/4)*r; //hex triangle height
var hAngle = Math.PI/10;
var hRCos = h*Math.cos(hAngle);
var hRSin = h*Math.sin(hAngle);
var coord = [];

var smallMap=[
	// {
	// 	"id":0,
	// 	"coord":[0,0,0],
	// 	"text":"0",
	// 	"color":"#FFFFGG"
	// },
	{
		"id":1,
		"coord":[1,0,0],
		"text":"1",
		"color":"#FFFFFF"
	},
	{
		"id":2,
		"coord":[0,1,0],
		"text":"2",
		"color":"#FFFFFF"
	},
	{
		"id":3,
		"coord":[0,0,1],
		"text":"3",
		"color":"#FFFFFF"
	},
	// {
	// 	"id":-1,
	// 	"coord":[-1,0,0],
	// 	"text":"-1",
	// 	"color":"#FFFFFF"
	// },
	// {
	// 	"id":-2,
	// 	"coord":[0,-1,0],
	// 	"text":"-2",
	// 	"color":"#FFFFFF"
	// },
	// {
	// 	"id":-3,
	// 	"coord":[0,0,-1],
	// 	"text":"-3",
	// 	"color":"#FFFFFF"
	// },
	// {
	// 	"id":4,
	// 	"coord":[2,0,0],
	// 	"text":"4",
	// 	"color":"#FFFFFF"
	// },
	// {
	// 	"id":5,
	// 	"coord":[0,2,0],
	// 	"text":"5",
	// 	"color":"#FFFFFF"
	// },
	// {
	// 	"id":6,
	// 	"coord":[0,0,2],
	// 	"text":"6",
	// 	"color":"#FFFFFF"
	// },
	// {
	// 	"id":-4,
	// 	"coord":[-2,0,0],
	// 	"text":"-4",
	// 	"color":"#FFFFFF"
	// },
	// {
	// 	"id":-5,
	// 	"coord":[0,-2,0],
	// 	"text":"-5",
	// 	"color":"#FFFFFF"
	// },
	// {
	// 	"id":-6,
	// 	"coord":[0,0,-2],
	// 	"text":"-6",
	// 	"color":"#FFFFFF"
	// }
	
];

function init(){

	var img = document.getElementById("Image-culo");
	canvas = document.getElementById("container-culo");

	img.style.display='none';
	canvas.style.display='';

	ctx = canvas.getContext("2d");

	canvas.height=500;
	canvas.width=800;

	ctx.font="15px Arial";
}

function drawCellBorders(zerox,zeroy,r){

	// ctx.arc(zerox,zeroy,r,0,Math.PI*2);
	// ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(zerox+sideRCos,zeroy+sideRSin); 	//a
	ctx.lineTo(zerox+r,zeroy);					//b
	ctx.lineTo(zerox+sideRCos,zeroy-sideRSin);	//c
	ctx.lineTo(zerox-sideRCos,zeroy-sideRSin);	//d
	ctx.lineTo(zerox-r,zeroy);					//e
	ctx.lineTo(zerox-sideRCos,zeroy+sideRSin);	//f
	ctx.lineTo(zerox+sideRCos,zeroy+sideRSin);	//a
	ctx.stroke();
	ctx.moveTo(0,0);;
}

function drawCellMap(map){
	var distancexetx = hRCos*2;
	var distancexety = hRSin*2;
	var distanceyetx = 0;
	var distanceyety = h*2;
	var distancezetx = hRCos*2;
	var distancezety = -hRSin*2;
	var centerx = r*2;
	var centery = r*2;

	for (cell of map){

		var cellx = cell["coord"][0];
		var celly = cell["coord"][1];
		var cellz = cell["coord"][2];

		var x = centerx+cellx*distancexetx+celly*distanceyetx+cellz*distancezetx
		var y = centery+cellx*distancexety+celly*distanceyety+cellz*distancezety
		drawCellBorders(x,y,r);

		var txt=cell["text"];
		ctx.fillText(txt,x-ctx.measureText(txt).width/2,y-7);
	}
}

function makeEmptyMap(size){
	var lastMap = smallMap.slice(0);
	var currentMap = [];
	var id = 0;

	// for (var count=0;count<size;count++){
		for (var j=0;j<lastMap.length;j++){
			currentMap.push(lastMap[j]);
			for (var i=0;i<=j;i++){
				var cell = {
					"id":0,
					"coord":[0,0,0],
					"text":"0",
					"color":"#FFFFGG"
				};
				cell["id"]=id;
				cell["coord"][0]=lastMap[i]["coord"][0]+lastMap[j]["coord"][0];
				cell["coord"][1]=lastMap[i]["coord"][1]+lastMap[j]["coord"][1];
				cell["coord"][2]=lastMap[i]["coord"][2]+lastMap[j]["coord"][2];
				cell["text"]=id;
				cell["color"]="#FFFFFF";

				currentMap.push(cell);
				id++;
			}
		}
	// }
	return currentMap;

}

function endmap(){
	var img = document.getElementById("image-culo");
	var canvas = document.getElementById("container-culo");

	img.style.display='';
	c.style.display='none';
}

// function createPopulatedMap(){
// 	init();
// 	defaultMap = makeEmptyMap(5);
// 	drawCellMap(defaultMap);

// }

function createPopulatedMap(){
	init();
	drawCellBorders(0,0,10)

}
