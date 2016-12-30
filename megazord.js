// No scalability, just get the job done and create functions as needed


console.log("VIVA PERON")
var culol = 0;
var alabasto = 0;
var romulo = true;

//var templateChapter = {"imageURL":"link","text":"<p> Text </p> <br><p> Text </p>","footer":"text"};
var templateChapter = {
        "title": "Title",
        "imageURL":"images/0.JPG",
				"textHTML": '<p> Text </p> <br><p> Text </p>',
				"footer":"text"};

//unused right now
var content = [
  {
    "title": "Feliz Celebración Anual de lo Anualizable",
    "imageURL": "images/rev0-0.JPG",
    "textHTML": "<br><br><br><p> Estimado Usted: </p> <br><p> Esto es sólo para Usted. </p>",
    "footer": "Y también para los culeables del futuro que sepan apretar el culo adecuado."
  },
  {
    "title": "Introducción a lo introduccionable",
    "imageURL": "images/rev0-1.JPG",
    "textHTML": "<p> Incluso las máquinas más perfectas creadas por la humanidad (como por ejemplo, las toallas y los tostadores) tienen, por definición, errores de fabricación e interfaces que generan dudas para los humanos inadvertidos. La gran innovación en la técnica perfeccionista de los humanos manufacturadores fue, por supuesto, resuelto a nivel legal: se llama Reductio ad Terminums et Condicionems, y sigue los principios de “Como proveedor de un servicio que no está claramente definido, sus datos son míos, y yo a cambio doy garantía de absolutamente nada”.</p><p>Como consecuencia de este fenómeno histórico y poco rastreable, la recolección de evidencias siempre fue el trabajo más difícil para un cerebro superdesarrollado como el positrónico y multidimensional cerebrín de Megazord. Verá, estimado e ignorante lector, todo se debe a que las cosas pasan y seguirán pasando por todas las eternidades siempre dependiendo de las oscilaciones sociopolíticas pretéritas de los atardeceres analíticos del tiempoespacio. En más simples palabras, Megazord sabe muy bien que los registros son siempre ficcionales y bipartidistas, por tanto tiene un nivel de desconfianza insalvable para todo lo sucedido en las épocas pre-Megazordianas.</p>",
    "footer": "Ya todos sabemos quién es y qué hace Megazord, che."
  },
  {
    "title": "Desambiguando la historieta histórica",
    "imageURL": "images/rev0-2.JPG",
    "textHTML": "<p> Algunas versiones de Megazord, diseñadas para la particular tarea de reconstrucción de realidades pretéritas confluenciadas, se basan en el arte como método irónico y trastornado de registro social y entusiasmagórico verbal y emocional. Salvando las distancias, los grandes sabiundos de lo supible coinciden que es mejor escuchar una historia contada por alguien que no la vivió, no la peleó, no la leyó, y está enojado con su padre porque no le deja ver la tele después de la hora de irse a la camucha.</p><p>Es así como Megazord le tira letras a Nautilus, el colectivo artístico futurista multirracial de los animales humanizados más blancos de la temporada astral. Podemos, junto con ellos, discernir grandes historias de heroísmo protagonizadas por nadie en particular, aplicables a cualquier fenómeno histórico de relevancia completamente inexistente. </p>",
    "footer": "Cuénteme más sobre lo que hace Nautilus, señor narrador, me aburro leyendo tanto."
  },
  {
    "title": "Nautilus es la banda de los capos blancos, sí.",
    "imageURL": "images/rev0-3.JPG",
    "textHTML": "<p> En un disco conceptual de una saga de cuarenta y dos tomos audiovisuales que, si se consume como se debe, dura setecientosmillonesculo horas terráqueas, Nautilus nos cuenta las grandes historias de las vidas y muertes del gran Godzilla, alienígena líder y gran amenaza contra el Status Quo del momento. Según el colectivo artístico, Godzilla es uno de los grandes héroes reptilianos que están fuera de los dominios obvios de la Reina Católica de la Bandera De Turno. Como contrato ficcional, Godzilla es derrotado por los Defensores del Bien Local y Multirracial en gran cantidad de los tomos de la composición. En otros tomos, cosas más divertidas suceden. Lo invitamos, entonces, a consumir una de las versiones gratuitas de este material archipirateable, formatizado para la ocasión. </p>",
    "footer": "Me pregunto qué tiene Nautilus para contarme hoy..."
  }
];

var fullContent = 
[
  {
    "content": [
      {
        "title": "Feliz Celebración Anual de lo Anualizable",
        "imageURL": "images/rev1-0.JPG",
        "textHTML": "<br><br><br><p> Estimado Usted: </p> <br><p> Esto es sólo para Usted. </p>",
        "footer": "Y también para los culeables del futuro que sepan apretar el culo adecuado."
      },
      {
        "title": "Introducción a lo introduccionable",
        "imageURL": "images/rev1-1.JPG",
        "textHTML": "<p> Incluso las máquinas más perfectas creadas por la humanidad (como por ejemplo, las toallas y los tostadores) tienen, por definición, errores de fabricación e interfaces que generan dudas para los humanos inadvertidos. La gran innovación en la técnica perfeccionista de los humanos manufacturadores fue, por supuesto, resuelto a nivel legal: se llama Reductio ad Terminums et Condicionems, y sigue los principios de “Como proveedor de un servicio que no está claramente definido, sus datos son míos, y yo a cambio doy garantía de absolutamente nada”.</p><p>Como consecuencia de este fenómeno histórico y poco rastreable, la recolección de evidencias siempre fue el trabajo más difícil para un cerebro superdesarrollado como el positrónico y multidimensional cerebrín de Megazord. Verá, estimado e ignorante lector, todo se debe a que las cosas pasan y seguirán pasando por todas las eternidades siempre dependiendo de las oscilaciones sociopolíticas pretéritas de los atardeceres analíticos del tiempoespacio. En más simples palabras, Megazord sabe muy bien que los registros son siempre ficcionales y bipartidistas, por tanto tiene un nivel de desconfianza insalvable para todo lo sucedido en las épocas pre-Megazordianas.</p>",
        "footer": "Ya todos sabemos quién es y qué hace Megazord, che."
      },
      {
        "title": "Desambiguando la historieta histórica",
        "imageURL": "images/rev1-2.JPG",
        "textHTML": "<p> Algunas versiones de Megazord, diseñadas para la particular tarea de reconstrucción de realidades pretéritas confluenciadas, se basan en el arte como método irónico y trastornado de registro social y entusiasmagórico verbal y emocional. Salvando las distancias, los grandes sabiundos de lo supible coinciden que es mejor escuchar una historia contada por alguien que no la vivió, no la peleó, no la leyó, y está enojado con su padre porque no le deja ver la tele después de la hora de irse a la camucha.</p><p>Es así como Megazord le tira letras a Nautilus, el colectivo artístico futurista multirracial de los animales humanizados más blancos de la temporada astral. Podemos, junto con ellos, discernir grandes historias de heroísmo protagonizadas por nadie en particular, aplicables a cualquier fenómeno histórico de relevancia completamente inexistente. </p>",
        "footer": "Cuénteme más sobre lo que hace Nautilus, señor narrador, me aburro leyendo tanto."
      },
      {
        "title": "Nautilus es la banda de los capos blancos, sí.",
        "imageURL": "images/rev1-3.JPG",
        "textHTML": "<p> En un disco conceptual de una saga de cuarenta y dos tomos audiovisuales que, si se consume como se debe, dura setecientosmillonesculo horas terráqueas, Nautilus nos cuenta las grandes historias de las vidas y muertes del gran Godzilla, alienígena líder y gran amenaza contra el Status Quo del momento. Según el colectivo artístico, Godzilla es uno de los grandes héroes reptilianos que están fuera de los dominios obvios de la Reina Católica de la Bandera De Turno. Como contrato ficcional, Godzilla es derrotado por los Defensores del Bien Local y Multirracial en gran cantidad de los tomos de la composición. En otros tomos, cosas más divertidas suceden. Lo invitamos, entonces, a consumir una de las versiones gratuitas de este material archipirateable, formatizado para la ocasión. </p>",
        "footer": "Me pregunto qué tiene Nautilus para contarme hoy..."
      }
    ]
  },
  {
    "content": [
      {
        "title": "Feliz Celebración Anual de lo Anualizable",
        "imageURL": "images/rev1-0.JPG",
        "textHTML": "<br><br><br><p> Estimado Usted: </p> <br><p> Esto es sólo para Usted. </p><br><br><br><p> DELE PLAY DELE!</p>",
        "footer": "Y también para los culeables del futuro que sepan apretar el culo adecuado."
      },
      {
        "title": "Unused",
        "imageURL": "images/rev1-1.JPG",
        "textHTML": "<p>Godzilla quiere volver a nacer pero necesita ayuda de un Sheriff multiastral!</p>",
        "footer": "Ya todos sabemos quién es y qué hace Megazord, che."
      },
      {
        "title": "Unused",
        "imageURL": "images/rev1-2.JPG",
        "textHTML": "<p> La humanidad no sabe cómo usar a Megazord, deberemos confiar en los profesionales de siempre </p>",
        "footer": "Cuénteme más sobre lo que hace Nautilus, señor narrador, me aburro leyendo tanto."
      },
      {
        "title": "Unused",
        "imageURL": "images/rev1-3.JPG",
        "textHTML": "<p> Es sólo cuestión de conectar a la gente adecuada con los full-retards adecuados </p>",
        "footer": "Me pregunto qué tiene Nautilus para contarme hoy..."
      }
    ]
  },
  {
    "content": [
      {
        "title": "Los reptiles son un riesgo para la Galaxia!",
        "imageURL": "images/rev2-0.JPG",
        "textHTML": "<p>Los reptiles están amotinándose por la muerte de su líder rebelde. A estas alturas, ni siquiera La Reina los puede mantener a raya.</p> <br> <p> Las defensas ya no dan abasto, es un momento de medidas desesperadas.</p>",
        "footer": "Se viene jodido, se viene!"
      },
      {
        "title": "Mensaje en una botella",
        "imageURL": "images/rev2-1.JPG",
        "textHTML": "<p>Este trabajo requiere de un Sheriff Multiastral!</p>",
        "footer": "Es hora de llamar a los Super Agentes de lo Agentizable!"
      },
      {
        "title": "Quién podrá desambiguarnos?!",
        "imageURL": "images/rev2-2.JPG",
        "textHTML": "<p> La humanidad no sabe cómo usar a Megazord, deberemos confiar en los profesionales de siempre. Sólo un operativo multirracial y multidisciplinario devolverá la paz a la Galaxia.</p>",
        "footer": "El fin está cerca pero tenemos un as bajo la manga."
      },
      {
        "title": "Nautilus: Blancos pero vivos",
        "imageURL": "images/rev2-3.JPG",
        "textHTML": "<p> Es sólo cuestión de conectar a la gente adecuada con los full-retards adecuados... </p>",
        "footer": "Me pregunto qué tiene Nautilus para cantarme hoy..."
      }
    ]
  },
  {
    "content": [
      {
        "title": "Nautilus es blanco e inocente",
        "imageURL": "images/rev3-0.JPG",
        "textHTML": "<br><br><br><p> Esta misión sólo tendrá éxito si Nautilus no sabe... </p> <br><p> Querrán destruir a Godzilla cuando todo lo que deben hacer es revivirlo.</p>",
        "footer": "Y necesitaremos refuerzos, recursos, mucha astucia... Y cosas. Y culos."
      },
      {
        "title": "Mensaje en una botella",
        "imageURL": "images/rev3-1.JPG",
        "textHTML": "<p>Godzilla quiere volver a nacer pero todos quieren destruírlo. Espere instrucciones y prepare sus armas más poderosas.</p>",
        "footer": "Necesitamos un doble agente."
      },
      {
        "title": "Tenemos a Los Profesionales listos",
        "imageURL": "images/rev3-2.JPG",
        "textHTML": "<p> Megazord ha reunido al Dream Team del contracontraterrorismo. Este será un complejísimo juego de ajedrez humano.</p>",
        "footer": "Debemos actuar en silencio y con diligencia."
      },
      {
        "title": "Nautilus es la banda de los capos blancos, sí.",
        "imageURL": "images/rev3-3.JPG",
        "textHTML": "<p> Es sólo cuestión de conectar a la gente adecuada con los full-retards adecuados y cantarles una canción que los ilumine...</p>",
        "footer": "Me pregunto qué tiene Nautilus para contarme hoy..."
      }
    ]
  }
];


function makeContent(){
    if (alabasto<fullContent.length){
        if (romulo){
            content = fullContent[alabasto].content;
        } else {
            content = fullContent[alabasto].countercontent;
        }
    } 
}

function narrador(){
    if (culol>=content.length){
        culol = 0;
        alabasto++;
    } 
    makeContent();
    var chapter = content[culol];

    document.getElementById("Title-culo").innerHTML="<h3><b>"+chapter.title+"</b></h3>";
    document.getElementById('Image-culo').src=chapter.imageURL;
    document.getElementById('Text-culo').innerHTML=chapter.textHTML;
    document.getElementById('Footer-culo').innerHTML="<p> "+chapter.footer+"</p>";
}

function slartibartfasteala(){
    console.log("slart in the house");
    switch (culol){
        case 1:
            document.getElementById("Title-culo").innerHTML="<h3><b>Bienvenidos a la sala de Slartibartfast</b></h3>";
            document.getElementById('Image-culo').style.display='none';
            init();
            animate();
            document.getElementById('Text-culo').innerHTML="<p>A Slartibartfast se le da por crear planetas, y éste es su taller.</p>";
            document.getElementById('Footer-culo').innerHTML="<p> Tarda en cargar y es pequeño, como su ego.</p>";
            break;
        case 2:
            skyboxOnDemand("images/slart0-0.JPG");
            document.getElementById('Text-culo').innerHTML="<p>Al saber crear planetas, Slartibartfast también puede condicionar la evolución de criaturas monstruosas</p>";
            document.getElementById('Footer-culo').innerHTML="<p> Tardan en evolucionar y son medio deformes, como el ego de su creador.</p>";
            break;
        case 3:
            skyboxOnDemand("images/slart0-1.JPG");
            document.getElementById('Text-culo').innerHTML="<p>Como todo nerd, Slartibartfast adora la fantasía y las batallas épicas.</p>";
            document.getElementById('Footer-culo').innerHTML="<p> Los monstruos pelean por razones épicas y poco razonables, como su creador.</p>";
            break;
        case 4:
            skyboxOnDemand("images/slart0-2.JPG");
            document.getElementById('Text-culo').innerHTML="<p>Él sabe los secretos de la alquimia, necesarios para crear y destruir a Godzilla...</p>";
            document.getElementById('Footer-culo').innerHTML="<p> Es cuestión de pedírselo con las palabras adecuadas.</p>";
            break;
        case 5:
            skyboxOnDemand("images/slart0-2.JPG");
            document.getElementById('Title-culo').innerHTML="<p>Él sabe los secretos de la alquimia, necesarios para crear y destruir a Godzilla...</p>";
            document.getElementById('chat-footer-culo').style.display='';
            break;
        default:
            document.getElementById('container-culo').removeChild(child);
            document.getElementById('Image-culo').style.display='';
            culol=0;
            alabasto++;
            culo();
    }
}

function dameAudio(id){
    switch (id){
        case 1:
            var audio = 'Audio-culo-'+String(id)
            document.getElementById(audio).style.visibility='visible';            
            culol=0;
            alabasto++;
            narrador();
            break;
        default:
            narrador();
    }
    
}

function batmaneala(){

    console.log("and the batman donde está?");
    
    switch(culol){
      case 0: 
        console.log("Does this happen?");
        break;
      case 1:
        console.log("batman in montevideo for the reunion of the mates");
        document.getElementById("Text-culo").style.display='none';
        document.getElementById("chat-culo").style.display=''; 
        culol=2;
        break;
      case 2:
        document.getElementById("Text-culo").style.display='';
        document.getElementById("chat-culo").style.display='none'; 
        culol=0;
        alabasto++;
        narrador();
        break;
      default:
        narrador();
    }
    

}

function culo() {

    console.log("VIVAN LOS CULOS number "+culol);
    console.log("VIVAN LOS ALABASTOS DEL MUNDO "+alabasto);

    switch (alabasto){
        case 0:
            narrador();
            break;
        case 1:
            romulo = confirm("Querés que Godzilla viva?");
            dameAudio(alabasto);
            break;
        case 4:
            batmaneala();
            break;
        case 5:
            slartibartfasteala();
            break;
        //case 6:
            //batmaneala();
            //dameAudio(alabasto);
            //break;
        default:
            narrador();
    }
    
    
}


window.onload = function() {
    document.getElementById("btn-culo").onclick = function fun() {
        culo();
        culol++;
    }
}