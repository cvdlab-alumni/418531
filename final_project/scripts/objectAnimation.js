function createCar(){
	var geom=new THREE.BoxGeometry(5,7,5);
	var mat = new THREE.MeshBasicMaterial( { transparent: true, opacity: 0.01 } );
	mesh = new THREE.Mesh(geom, mat);
  car=addObj({
    obj: 'F612',
    scale: [0.005,0.005,0.005],
    position: [10,4,-50],
    rotate: [-Math.PI/2,0,0]
  },mesh,"game/");
  scene.add(car);
  animateCar(car);
}

function createMan() {
  startFPS();
  FPenabled=true;
    addFucile({
      obj: 'Pistol_MK23',
      scale: [4,4,4],
      position: [0,-1,-3],
      rotate: [0,Math.PI,0]
    },"game/");

  var mesh;
  for (var i = 1; i <= 20; i++) {
    var geom=new THREE.BoxGeometry(5,7,5);
    var mat = new THREE.MeshBasicMaterial( { transparent: true, opacity: 0.001 } );
    mesh = new THREE.Mesh(geom, mat);
    var x=Math.random()*100;
    man[i]=addObj({
      obj: 'android',
      scale: [1,1,1],
      position: [250-Math.random()*100,4,-100+Math.random()*100],
      rotate: [0,-Math.PI/2,0],
    },mesh,"game/");
    scene.add(man[i]);
    animatekill(man[i]);
  };
  ModeGame=true;
};


function move(Obj){
    var angle = -Math.PI/2;
    for (var i = 1; i <= Obj.length-1; i++) {
        var movTween1 = new TWEEN.Tween(Obj[i].position)
        .to({ x: Obj[i].position.x-30*Math.random(), z: Obj[i].position.z+30*Math.random() }, 200)
        .start();
    };
}



function createMobile(x,y,z,corn,front,image){
    var mobile = new THREE.Object3D();
    var hook = new THREE.Object3D();
    var struct = createMeshArray(new THREE.BoxGeometry(x, y,z), image,4,corn);
    var anta=createMeshArray(new THREE.BoxGeometry(x, z, 0.2), front,5,corn);
    struct.add(hook)
    hook.position.y=-y/2-0.1;
    hook.position.x=+x/2;
    anta.position.x=-x/2;
    hook.rotation.x=1/2*Math.PI;
    hook.add(anta);

    mobile.add(struct);
    mobile.hook=hook;
    mobile.anta=anta;
   
    return mobile
}

function createMobile2ante(x,y,z,corn,front,front2,image){
    var mobile = new THREE.Object3D();
    var hook = new THREE.Object3D();
    var hook2 = new THREE.Object3D();

    var cornice = createMeshArray(new THREE.BoxGeometry(x, y,z), image,4,corn);

    var anta1=createMeshArray(new THREE.BoxGeometry(x/2, z, 0.2), front,5,corn);
    var anta2=createMeshArray(new THREE.BoxGeometry(x/2, z, 0.2), front2,5,corn);
    cornice.add(hook)
    cornice.add(hook2)

    hook.position.y=-y/2;
    hook.position.x=+x/2;
    hook2.position.y=-y/2;
    hook2.position.x=-x/2;
    anta1.position.x=-x/4
    anta2.position.x=x/4

    hook.rotation.x=1/2*Math.PI;
    hook2.rotation.x=1/2*Math.PI;

    animateMobile(anta1,1);
    animateMobile(anta2,2);


    hook.add(anta1);
    hook2.add(anta2);

    mobile.add(cornice);
   
    return mobile
}
function createQuadro(x,y,z,corn,oper){
    var Quadro = new THREE.Object3D();
    var cornice = createMeshArray(new THREE.BoxGeometry(x, y, z),corn,5);
    cornice.rotation.x=1/2*Math.PI;
    var background = createMeshArray(new THREE.BoxGeometry(x-x/4, y-x/4, z+0.01), oper,5);
    background.rotation.x = -3/2*Math.PI;
    Quadro.back=background;
    Quadro.add(cornice);
    Quadro.add(background);
    
    return Quadro
}


function createInterrutore(obj){
    var interut = new THREE.Object3D();
    var geometry = new THREE.BoxGeometry( 0.5, 0.3, 0.05 );
    var material = new THREE.MeshPhongMaterial( {color: "#CC9900", metal:true} );
    var cornice = new THREE.Mesh( geometry, material );

    var geometry2 = new THREE.BoxGeometry( 0.05, 0.1, 0.15 );
    var material2 = new THREE.MeshBasicMaterial( {color: '#FFFFFF'} );

    var tasto = new THREE.Mesh( geometry2, material2 );
    
    animateLigth(cornice,obj);
    cornice.add(tasto);
    interut.add(cornice);
    interut.tasto=tasto;

    
    return interut;
}
function createTv(id){
    var TV = new THREE.Object3D();
    var background = createMesh(new THREE.BoxGeometry(3, 3, 0.2), "corniceTV.png");
    var on=false;

    background.position.set(1.5,0,0);
    background.rotation.x = -3/2*Math.PI;

    var corn1 = createMesh(new THREE.BoxGeometry(0.2, 0.5,3), "corniceTV.png");
    var corn2 = createMesh(new THREE.BoxGeometry(0.2, 0.5,3), "corniceTV.png");
    corn2.position.set(3, 0, 0);

    var corn3 = createMesh(new THREE.BoxGeometry(3.2, 0.5,0.2), "corniceTV.png");
    corn3.position.set(1.5, 0,1.6);
    var corn4 = createMeshArray(new THREE.BoxGeometry(3.2, 0.5,0.2), "cornSams.png",4,"corniceTV.png");
    corn4.position.set(1.5, 0,-1.6);  

    /*
    var tvLight = new THREE.SpotLight('#7CC1B5');
    tvLight.position.set(5,-4,-1);
    tvLight.rotation.x=-Math.PI/2;
    tvLight.angle = Math.PI/2;
    tvLight.exponent = 3;
    tvLight.intensity = 5;
    tvLight.distance = 30;
    */

    TV.add(corn1);
    TV.add(background);
    TV.add(corn2);
    TV.add(corn3);
    TV.add(corn4);
    //TV.add(tvLight);

    TV.screenImage=background;
    TV.tvId=id;
    //TV.ligth=tvLight;
    animateTv(TV);

    return TV
}

function TvList(){
    var Tv = new THREE.Object3D();
    tv1=createTv("1");
    tv1.scale.x=1.8;
    tv1.scale.z=0.7;

    tv1.rotation.z = -  3/2*Math.PI;
    tv1.position.x=0.6;
    tv1.position.y=24.25;
    tv1.position.z=3.7;

    tv2=createTv("2");
    tv2.scale.x=1.5;
    tv2.scale.z=0.6;
    tv2.rotation.z = -1/2*Math.PI;
    tv2.position.x=39.2;
    tv2.position.y=24.15;
    tv2.position.z=4;


    tv3=createTv("3");
    tv3.scale.x=1.2;
    tv3.scale.z=0.6;

    tv3.rotation.y = -2*Math.PI;
    tv3.rotation.x = -2*Math.PI;
    tv3.position.x=26.6;
    tv3.position.y=12.15;
    tv3.position.z=4;

    Tv.add(tv1);
    Tv.add(tv2);
    Tv.add(tv3);

return Tv;

}


function InterruttoreList(){
    var Interruttori = new THREE.Object3D();
    
    ingresso=[apartment.soffitto.ingresso.luce1, apartment.soffitto.ingresso.luce2, apartment.soffitto.ingresso.luce3];
    corridoio=[apartment.soffitto.corridoio.luce4, apartment.soffitto.corridoio.luce5, apartment.soffitto.corridoio.luce6];
    salone=[apartment.soffitto.salone];

    bagno=[apartment.soffitto.bagno];
    stanza1=[apartment.soffitto.stanza1,apartment.soffitto.stanza1a];
    stanza2=[apartment.soffitto.stanza2,apartment.soffitto.stanza2a];

    int1=createInterrutore(ingresso);
    int1.rotation.y = -  1/2*Math.PI;
    int1.rotation.z = -  1/2*Math.PI;
    int1.position.set(9.2,5,3);


    int2=createInterrutore(corridoio);
    int2.rotation.y = -  1/2*Math.PI;
    int2.rotation.z = -  1/2*Math.PI;
    int2.position.set(9.2,13,3);


    int3=createInterrutore(corridoio);
    int3.rotation.y = -  1/2*Math.PI;
    int3.rotation.z = -  1/2*Math.PI;
    int3.position.set(9.65,14,3.5);

    int4=createInterrutore(salone);
    int4.rotation.x =   1/2*Math.PI;
    //int4.rotation.z = -  1/2*Math.PI;
    int4.position.set(12,20,3);


    int5=createInterrutore(bagno);
    int5.rotation.x =  1/2*Math.PI;
    int5.position.set(12,12.65,3);

    int6=createInterrutore(bagno);
    int6.rotation.x =  1/2*Math.PI;
    int6.position.set(16,12.15,3);

    int7=createInterrutore(stanza1);
    int7.rotation.x =  1/2*Math.PI;
    int7.position.set(24,12.65,3);

    int8=createInterrutore(stanza1);
    int8.rotation.x =  1/2*Math.PI;
    int8.position.set(24,12.15,3);

    int9=createInterrutore(stanza2);
    int9.rotation.y = -  1/2*Math.PI;
    int9.rotation.z = -  1/2*Math.PI;
    int9.position.set(25.8,14,3);


    int10=createInterrutore(stanza2);
    int10.rotation.y = -  1/2*Math.PI;
    int10.rotation.z = -  1/2*Math.PI;
    int10.position.set(26.3,14,3);


    Interruttori.add(int10);
    Interruttori.add(int9);
    Interruttori.add(int8);
    Interruttori.add(int7);
    Interruttori.add(int6);
    Interruttori.add(int5);
    Interruttori.add(int4);
    Interruttori.add(int3);
    Interruttori.add(int2);
    Interruttori.add(int1);

    return Interruttori;

}

function swicthAll(onOff){
    ingresso=[apartment.soffitto.ingresso.luce1, apartment.soffitto.ingresso.luce2, apartment.soffitto.ingresso.luce3];
    corridoio=[apartment.soffitto.corridoio.luce4, apartment.soffitto.corridoio.luce5, apartment.soffitto.corridoio.luce6];
    salone=[apartment.soffitto.salone];
    bagno=[apartment.soffitto.bagno];
    stanza1=[apartment.soffitto.stanza1,apartment.soffitto.stanza1a];
    stanza2=[apartment.soffitto.stanza2,apartment.soffitto.stanza2a];


    obj=ingresso.concat(corridoio,salone,bagno,stanza1,stanza2);

    for (var i = 1; i <= obj.length; i++) {

        if(onOff===1){
            obj[i-1].pointLight.intensity=0;
        }
        else{
            obj[i-1].pointLight.intensity=1.5;
        }
     };
}

function QuadroList(){
    var Quadro = new THREE.Object3D();
    quadro1=createQuadro(2,2,0.15,"cornice.jpg","gioconda.jpg");
    quadro1.scale.x=1;
    quadro1.rotation.z = -  1/2*Math.PI;
    quadro1.position.x=9.2;
    quadro1.position.y=9.15;
    quadro1.position.z=3.5;

    quadro2=createQuadro(4,2,0.15,"cornice2.jpg","angeliraffaello.jpg");
    quadro2.back.scale.set(1.07,1.1,1);
    quadro2.rotation.z = 1/2*Math.PI;
    quadro2.position.set(26.2,23.65,4);

    Quadro.add(quadro1);
    Quadro.add(quadro2);

return Quadro;

}

function mobileList(){
    var Mobile = new THREE.Object3D();
    frigo=createMobile(2.5,2.5,5.5,"frigoCornice.jpg","frigo.jpg","frigoAperto.jpg");
    frigo.rotation.z = -  1/2*Math.PI;
    frigo.position.x=16.5;
    frigo.position.y=21.25;
    frigo.position.z=3;
    animateCucina(frigo.anta);

    forno=createMobile(3,2.5,3,"frigoCornice.jpg","fornoEsterno.jpg","fornoInterno.jpg");
    forno.rotation.x =  1/2*Math.PI;
    forno.rotation.z = -  1/2*Math.PI;
    forno.position.x=16.5;
    forno.position.y=24.02;
    forno.position.z=2;
    animateCucina(forno.anta);

    lavastoviglie=createMobile(3,2.5,3,"frigoCornice.jpg","lavastoviglieEsterno.jpg","lavastoviglieInterno.jpg");
    lavastoviglie.rotation.x =  1/2*Math.PI;
    lavastoviglie.rotation.z = -  1/2*Math.PI;
    lavastoviglie.position.x=16.5;
    lavastoviglie.position.y=27.05;
    lavastoviglie.position.z=2;
    animateCucina(lavastoviglie.anta);

    lavandino=createMobile(3,2.5,3,"frigoCornice.jpg","pensile1.jpg","pensileInterno.jpg");
    lavandino.rotation.z = -  1/2*Math.PI;
    lavandino.position.x=16.5;
    lavandino.position.y=30.05;
    lavandino.position.z=2;
    animateCucina(lavandino.anta);

    pensile=createMobile(3,2.5,3,"frigoCornice.jpg","pensile2.jpg","pensileInterno2.jpg");
    pensile.rotation.z =  -1/2*Math.PI;
    pensile.rotation.x =  Math.PI;

    pensile.position.x=16.5;
    pensile.position.y=33.05;
    pensile.position.z=2;
    animateCucina(pensile.anta);

    Mobile.add(frigo);
    Mobile.add(forno);
    Mobile.add(lavastoviglie);
    Mobile.add(lavandino);
    Mobile.add(pensile);

return Mobile;

}
function ArmadioList(){
    var Mobile = new THREE.Object3D();
    armadio1=createMobile2ante(6,2,5.5,"coloreMobile.jpg","anta1.jpg","anta2.jpg","armadioInterno.jpg");
    armadio1.position.x=35.5;
    armadio1.position.y=11.35;
    armadio1.position.z=3;

    armadio2=createMobile2ante(5,2,5.5,"coloreMobile.jpg","anta1.jpg","anta2.jpg","armadioInterno.jpg");
    armadio2.rotation.z = Math.PI/2;
    armadio2.position.x=27;
    armadio2.position.y=32;
    armadio2.position.z=3;
    
    Mobile.add(armadio1);
    Mobile.add(armadio2);

return Mobile;
}