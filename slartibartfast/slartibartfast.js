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


	window.onload = function() {
	    // document.getElementById("btn-culo").onclick = function fun() {
	    //     culo();
	    //     culol++;
	    // }
	    init();
		animate();
	}



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
			container.appendChild( renderer.domElement );
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
					// "https://s10.postimg.org/7kh6zv4vt/Screen_Shot_2016_09_18_at_8_35_05_PM.png",
					//"https://s16.postimg.org/5j2oa9k51/Screen_Shot_2016_09_18_at_8_55_02_PM.png",
					// "https://s10.postimg.org/7kh6zv4vt/Screen_Shot_2016_09_18_at_8_35_05_PM.png",
					// "https://s16.postimg.org/5j2oa9k51/Screen_Shot_2016_09_18_at_8_55_02_PM.png",
					"http://embed.gyazo.com/a261a030ca7607ad46a0d3fd634de044.png",
					"http://www.arcondebuenosaires.com.ar/Borges7.jpg",
					// "https://s10.postimg.org/7kh6zv4vt/Screen_Shot_2016_09_18_at_8_35_05_PM.png",
					// "https://s12.postimg.org/5g366q1x9/Screen_Shot_2016_09_18_at_8_55_02_PM.png",
					// "https://s10.postimg.org/5p0kaonx5/Screen_Shot_2016_09_18_at_9_14_20_PM.png",
					"https://i.ytimg.com/vi/0cXDDMLVKTE/hqdefault.jpg",
					"http://images5.fanpop.com/image/answers/2820000/2820473_1340488730205.12res_251_251.jpg",
					"https://pbs.twimg.com/profile_images/503231713687117824/J1spq-9N.jpeg",
					// "http://image.shutterstock.com/z/stock-photo-business-poodle-portrait-poodle-is-wearing-a-cute-tie-image-taken-in-a-studio-412839934.jpg",
					// "http://image.shutterstock.com/z/stock-photo-business-poodle-portrait-poodle-is-wearing-a-cute-tie-image-taken-in-a-studio-412839934.jpg",
					"https://storage.googleapis.com/imgfave/image_cache/1249033817596537.jpeg",
					"http://cdn.topsecretwriters.com/wp-content/uploads/2013/07/weird-clock.jpg",
					"http://images2.travbuddy.com/1797811_13408385595771.jpg",
					// "https://s10.postimg.org/7kh6zv4vt/Screen_Shot_2016_09_18_at_8_35_05_PM.png",
					// "http://4.bp.blogspot.com/-PRpHlGof2XE/UqfPzuPCYYI/AAAAAAAABNU/4wVZXRTPzsA/s1600/Mr-Culo-Selfie.jpg",
					"http://static4.businessinsider.com/image/560be2d69dd7cc15008be1bb-1190-625/the-inventor-of-the-cellphone-thinks-apples-new-iphone-6s-is-boring.jpg",
					"http://www.youbioit.com/files/newimages/13/12/dott45.preview.jpg",
					// "http://i.cbc.ca/1.2606088.1397168099!/fileImage/httpImage/image.jpg_gen/derivatives/original_300/atari-e-t-the-extra-terrestrial-video-game.jpg",
					"http://f.fwallpapers.com/images/angry-poodle.jpg",
					// "https://thumbs.dreamstime.com/x/poodle-business-suit-thick-nerdy-glasses-isolated-white-background-29719675.jpg",
					"http://alcoholintheworkplace.com/wp-content/uploads/2014/01/Boredom.jpg",
					// "http://cache2.asset-cache.net/gc/172313204-red-business-poodle-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=dgLbF10%2BqaQECHLecCmYYgRUqII4muuf7frov0%2BUKGnVKf7tdZ6hRYycFHOQ6Q%2F1",
					// "https://i.ytimg.com/vi/tJeSE5W1hKw/maxresdefault.jpg",
					// "http://www.uwishunu.com/wp-content/uploads/2013/04/PIFA-Time-Machine030-680uw.jpg",
					// "https://s10.postimg.org/7kh6zv4vt/Screen_Shot_2016_09_18_at_8_35_05_PM.png",
					// "http://s15.postimg.org/elhqa5uvv/el_boceto_n1.jpg",
					// "https://cdn.meme.am/instances/400x400/39449236.jpg",
					"https://s-media-cache-ak0.pinimg.com/736x/8c/ba/d0/8cbad04500f085d77d5039f067293ce3.jpg"]
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