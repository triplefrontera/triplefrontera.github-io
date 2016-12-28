		var camera, controls;
		var renderer;
		var scene;
			var container, stats;
			var camera, scene, renderer;
			var particleMaterial;
			var raycaster;
			var mouse;
			// var objects = [];
		var objects = [];
		var skyboxes= [];


	// window.onload = function() {
	//     // document.getElementById("btn-culo").onclick = function fun() {
	//     //     culo();
	//     //     culol++;
	//     // }
	//     init();
	// 	animate();
	// }



		function init() {
			var container = document.getElementById( "container-culo" );
				// var info = document.createElement( 'div' );
				// info.style.position = 'absolute';
				// info.style.top = '10px';
				// info.style.width = '100%';
				// info.style.textAlign = 'center';
				// info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> - clickable objects';
				// container.appendChild( info );
			renderer = new THREE.WebGLRenderer();
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize( window.innerWidth*3/7, window.innerHeight/2 );
			child = renderer.domElement;
			container.appendChild( child );
//-------------------------------------------//-------------------------------------------//-------------------------------------------
			raycaster = new THREE.Raycaster();
				mouse = new THREE.Vector2();
				// renderer = new THREE.CanvasRenderer();
				// renderer.setClearColor( 0xf0f0f0 );
				// renderer.setPixelRatio( window.devicePixelRatio );
				// renderer.setSize( window.innerWidth, window.innerHeight );
				// container.appendChild( renderer.domElement );
				stats = new Stats();
				container.appendChild( stats.dom );
				document.addEventListener( 'mousedown', onDocumentMouseDown, false );
//-------------------------------------------//-------------------------------------------//-------------------------------------------
container.appendChild( renderer.domElement );
			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 10000 );
			camera.position.z = 0.01;
			// camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
			// camera.position.set( 0, 300, 500 );
			controls = new THREE.OrbitControls( camera );
			controls.enableZoom = true;
			controls.enablePan = false;
			var filesRepeated=[
					"images/1.JPG",
					"images/2.JPG",
					"images/3.JPG",
					"images/4.JPG",
					"images/5.JPG",
					"images/6.JPG",
					"images/7.JPG",
					"images/8.JPG",
					"images/9.JPG",
					"images/10.JPG",
					"images/11.JPG",
					"images/12.JPG",
					"images/13.JPG",
					"images/14.JPG"
					]
			var filesCube=["slartibartfast/sun_temple_stripe.jpg"]
			var textures = getTexturesFromAtlasFile( filesCube[0], 6 );
			
			
			var name = filesCube[0];
			skybox(textures,name);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
			
			var geometry = new THREE.BoxGeometry( 0.05, 0.05, 0.05 );
// //CULOS
			var positions = [
							[0,0,0],[0,0,1],[0,0,-1],
							[0,1,0],[0,1,1],[0,1,-1],
							[0,-1,0],[0,-1,1],[0,-1,-1],
							[1,0,0],[1,0,1],[1,0,-1],
							[1,1,0],[1,1,1],[1,1,-1],
							[1,-1,0],[1,-1,1],[1,-1,-1]
							[-1,0,0],[-1,0,1],[-1,0,-1],
							[-1,1,0],[-1,1,1],[-1,1,-1],
							[-1,-1,0],[-1,-1,1],[-1,-1,-1],
							[1,-1,-1]
							];
			// var positions = [
			// 				[1,-1,1]
			// 				];
			// var textures = getTexturesFromAtlasFile( filesCube[1], 6 );
			// var name = filesCube[1];
 				//for ( var i = 0; i < positions.length; i ++ ) {
// var texts = [
// "Los viajes interplanetarios le re cuestan a Megazord3. Pruebe con Megazord6 o Megazord9 para comunicarse con el Planeta de los Nerds.",
// "Megazord3 sólo me incluye como historia, pero gracias a esa historia yo soy. Si usted, estimado humano, me deja mensajes a mí o a mis colegas, MegazordX será capaz de administrarlos y hacérmelos llegar por medio del tiempo y el espacio.",
// "Lo que más me gusta de Megazord3 es que puedo escribir todo lo que siento, por más que se vea espantoso. Los artistas siempre llegan rezagados a la ingeniería, pero pueden sumar y agregar para que Megazord crezca.",
// "Sea atento: Megazord3 es el trabajo de los más finos artistas... que pudieron conseguir. No espere que sea fabuloso: Hágalo fabuloso con su dedicación y tormento!",
// "Borges5","Borges6"
// ]
// var textures=getTexturesFromFileAndText("",texts);
// skybox(textures,"asd");
 				for ( var i = 0; i < 1; i ++ ) {
 					skybox(textures,name,0.05,positions[i],true);
 				}
				for ( var j = 0; j < filesRepeated.length; j ++ ) {
					var textures = getTexturesFromOneFile( filesRepeated[j] );
					var name = filesRepeated[j];
 					//for ( var i = 0; i < positions.length; i ++ ) {
 				
					i=j+1;
 					skybox(textures,name,0.05,positions[i],true);
 				
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
			 window.addEventListener( 'resize', onWindowResize, false );
		}
		function skybox(textures,name,size,centerCoord,isflying){
			size=size || 1;
			centerCoord=centerCoord || [0,0,0];
			geometry = new THREE.BoxGeometry( size, size, size )
			isflying=isflying || false;
			// geometry = new THREE.CubeGeometry( size, size, size )
			// var textures = getTexturesFromAtlasFile( texturefile, 6 );
			 // var textures = getTexturesFromAtlasFile( "textures/cube/test1.jpg", 6 );
			var materials = [];
			for ( var i = 0; i < 6; i ++ ) {
				materials.push( new THREE.MeshBasicMaterial( { map: textures[ i ] } ) );
			}
			var skyBox = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
			
 					skyBox.position.x = Math.random()*centerCoord[0]/2;
 					skyBox.position.y = Math.random()*centerCoord[1]/2;
 					skyBox.position.z = Math.random()*centerCoord[2]/2;
 					scale=Math.random()*0.5+0.5;
 					skyBox.scale.x = scale;
 					skyBox.scale.y = scale;
 					skyBox.scale.z = scale;
					skyBox.rotation.x = Math.random() * 2 * Math.PI;
 					skyBox.rotation.y = Math.random() * 2 * Math.PI;
 					skyBox.rotation.z = Math.random() * 2 * Math.PI;
 					skyBox.name = name;
			if(isflying){
				
				objects.push( skyBox );
			} else {
				
				skyBox.applyMatrix( new THREE.Matrix4().makeScale( 1, 1, - 1 ) );
			}
			
			scene.add( skyBox );
		}
		function getTexturesFromFileAndText(filename,text) {
			//fileStatic=fileStatic || "textures/cube/Mr-Culo-Selfie.jpg";
			text=text || ["uno","dos","tres","cuatro","cinco","seis"]
			filename=filename || "https://s10.postimg.org/7kh6zv4vt/Screen_Shot_2016_09_18_at_8_35_05_PM.png";
			var atlasImgUrl = "textures/cube/sun_temple_stripe.jpg";
			var tilesNum = 6;
			var textures = [];
			for ( var i = 0; i < tilesNum; i ++ ) {
				textures[ i ] = new THREE.Texture();
			}
			//var imageObj = new Image();
			//imageObj.onload = function() {
				var canvas, context;
				var tileWidth = 1000;
				for ( var i = 0; i < textures.length; i ++ ) {
					canvas = document.createElement( 'canvas' );
					context = canvas.getContext( '2d' );
					canvas.height = tileWidth;
					canvas.width = tileWidth;
					//context.drawImage( imageObj, tileWidth * i, 0, tileWidth, tileWidth, 0, 0, tileWidth, tileWidth );
					//context.drawImage( imageObj, 0, 0, tileWidth, tileWidth, 0, 0, tileWidth, tileWidth );
					//addTextToContext(context,canvas,text[i]);
					context.fillStyle="#FFFFFF";
					context.fillRect(0,0,tileWidth,tileWidth);
					context.fillStyle="#000000";
					context.font="50px Georgia";
					context.fillText(text[i],50,50,tileWidth);
					
					textures[ i ].image = canvas
					textures[ i ].needsUpdate = true;
				}
			//};
			//imageObj.src = filename;
			return textures;
		}
		function addTextToContext(ctx,c,text){
			//var c=document.getElementById("myCanvas");
			//var ctx=c.getContext("2d");
			context.font="20px Georgia";
			context.fillText(text,10,50);
			ctx.font="30px Verdana";
			// Create gradient
			var gradient=ctx.createLinearGradient(0,0,c.width,0);
			gradient.addColorStop("0","magenta");
			gradient.addColorStop("0.5","blue");
			gradient.addColorStop("1.0","red");
			// Fill with gradient
			ctx.fillStyle=gradient;
			ctx.fillText(text,10,90);
		}
		function getTexturesFromOneFile(filename) {
			//fileStatic=fileStatic || "textures/cube/Mr-Culo-Selfie.jpg";
			filename=filename || "https://s10.postimg.org/7kh6zv4vt/Screen_Shot_2016_09_18_at_8_35_05_PM.png";
			var atlasImgUrl = "textures/cube/sun_temple_stripe.jpg";
			var tilesNum = 6;
			var textures = [];
			for ( var i = 0; i < tilesNum; i ++ ) {
				textures[ i ] = new THREE.Texture();
			}
			var imageObj = new Image();
			imageObj.onload = function() {
				var canvas, context;
				var tileWidth = imageObj.height;
				for ( var i = 0; i < textures.length; i ++ ) {
					canvas = document.createElement( 'canvas' );
					context = canvas.getContext( '2d' );
					canvas.height = tileWidth;
					canvas.width = tileWidth;
					//context.drawImage( imageObj, tileWidth * i, 0, tileWidth, tileWidth, 0, 0, tileWidth, tileWidth );
					context.drawImage( imageObj, 0, 0, tileWidth, tileWidth, 0, 0, tileWidth, tileWidth );
					textures[ i ].image = canvas
					textures[ i ].needsUpdate = true;
				}
			};
			imageObj.src = filename;
			return textures;
		}
		function getTexturesFromAtlasFile( atlasImgUrl, tilesNum ) {
			var textures = [];
			for ( var i = 0; i < tilesNum; i ++ ) {
				textures[ i ] = new THREE.Texture();
			}
			var imageObj = new Image();
			imageObj.onload = function() {
				var canvas, context;
				var tileWidth = imageObj.height;
				for ( var i = 0; i < textures.length; i ++ ) {
					canvas = document.createElement( 'canvas' );
					context = canvas.getContext( '2d' );
					canvas.height = tileWidth;
					canvas.width = tileWidth;
					context.drawImage( imageObj, tileWidth * i, 0, tileWidth, tileWidth, 0, 0, tileWidth, tileWidth );
					textures[ i ].image = canvas
					textures[ i ].needsUpdate = true;
				}
			};
			imageObj.src = atlasImgUrl;
			return textures;
		}
		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize( window.innerWidth, window.innerHeight );
		}
		function animate() {
			controls.update();
			//renderer.render( scene, camera ); //camera control
			render(); //autocamera
			
			requestAnimationFrame( animate );
			stats.update();
		}
		var radius = 1;
		var theta = 0;
		function render() {
				theta += 0.1;
				//camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
				camera.position.x =  Math.sin( THREE.Math.degToRad( theta ) )/2;
				camera.position.y =  Math.sin( THREE.Math.degToRad( theta ) )/2;
				camera.position.z =  Math.cos( THREE.Math.degToRad( theta ) )/2;
				camera.lookAt( scene.position );
				renderer.render( scene, camera );
			}
		function onDocumentMouseDown( event ) {
				event.preventDefault();
				mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
				raycaster.setFromCamera( mouse, camera );
				var intersects = raycaster.intersectObjects( objects );
				if ( intersects.length > 0 ) {
				 	intersects[ 0 ].object.rotation.x = Math.random() * 2 * Math.PI;
				 	intersects[ 0 ].object.rotation.y = Math.random() * 2 * Math.PI;
				 	intersects[ 0 ].object.rotation.z = Math.random() * 2 * Math.PI;
				 	texturefilename = intersects[ 0 ].object.name;
				 	console.log(texturefilename);
					var textures = getTexturesFromOneFile( texturefilename );
					skybox(textures,texturefilename);
				 }
			}