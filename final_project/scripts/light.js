var planeGeometry = new THREE.PlaneGeometry(39.4,35);
var planeMaterial =  new THREE.MeshBasicMaterial({color: "#FFFFFF"});
var plane = new THREE.Mesh(planeGeometry,planeMaterial);


function createPointLight(faretto){
    var luce = new THREE.Object3D();
    var ring = new THREE.RingGeometry( 0.2, 0.1, 32 );
    var ringMaterial = new THREE.MeshPhongMaterial( {color: "#CC9900", metal:true , side: THREE.DoubleSide} );

    //led
    var colorLampada = "#F0F0F0 ";
    var geometry = new THREE.SphereGeometry( 0.10, 10, 10,0,Math.PI );
    var material = new THREE.MeshLambertMaterial({color: colorLampada,transparent: true, opacity: 0.3, side: THREE.DoubleSide});
    var led = new THREE.Mesh( geometry, material );

    pointColor3 = "#ffffff";
    pointLight = new THREE.PointLight(pointColor3);
    pointLight.intensity =0;
    pointLight.distance = 21;
    pointLight.rotation.x = 3/2*Math.PI;
    led.add(pointLight);
    if(faretto!=undefined){
        l1=new THREE.Mesh( ring, ringMaterial );
        luce.add(l1);
    }
    luce.add(led);
    luce.pointLight=pointLight;

    return luce
}

function listLuce(){
    var SoffittoFinal = new THREE.Object3D();
    plane.position.set(-0.4,0,0.1);
    SoffittoFinal.add(plane);

    //ingresso
    var ingresso = new THREE.Object3D();
    luce1=createPointLight("faretto");
    luce1.position.set(-15.5,13,0.11);
    luce1.pointLight.distance=23;
    ingresso.luce1=luce1;
    luce2=createPointLight("faretto");
    luce2.position.set(-15.5,0.4,0.11);
    luce2.pointLight.distance=23;
    ingresso.luce2=luce2;

    luce3=createPointLight("faretto");
    luce3.position.set(-15.5,-12.2,0.11);
    luce3.pointLight.distance=23;
    ingresso.luce3=luce3;

    ingresso.add(luce1);
    ingresso.add(luce2);
    ingresso.add(luce3);
    
    //corridoio
    var corridoio = new THREE.Object3D();
    luce4=createPointLight("faretto");
    luce4.position.set(-6.5,1,0.11);
    luce4.pointLight.distance=22;
    corridoio.luce4=luce4;
    luce5=createPointLight("faretto");
    luce5.position.set(-2.5,1,0.11);
    luce5.pointLight.distance=22;
    corridoio.luce5=luce5;

    luce6=createPointLight("faretto");
    luce6.position.set(2.5,1,0.11);
    luce6.pointLight.distance=22;
    corridoio.luce6=luce6;

    corridoio.add(luce4);
    corridoio.add(luce5);
    corridoio.add(luce6);
    
    SoffittoFinal.add(ingresso);
    SoffittoFinal.ingresso=ingresso;

    SoffittoFinal.add(corridoio);
    SoffittoFinal.corridoio=corridoio;

    salone=createPointLight();
    salone.position.set(-3,-11,0.5);
    //salone.pointLight.intensity=3.5;
    salone.pointLight.distance=38;
    SoffittoFinal.salone=salone;
    SoffittoFinal.add(salone);

    bagno=createPointLight();
    bagno.position.set(-6,9.5,1.3);
    SoffittoFinal.bagno=bagno;
    SoffittoFinal.add(bagno);

    stanza1=createPointLight();
    stanza1.pointLight.distance=17;
    stanza1.position.set(4,12.5,1.3);
    SoffittoFinal.stanza1=stanza1;

    SoffittoFinal.add(stanza1);
    stanza1a=createPointLight();
    stanza1a.pointLight.distance=17;

    stanza1a.position.set(12,12.5,1.3);

    SoffittoFinal.add(stanza1a);
    stanza1.pointLight.distance=25;        
    stanza1a.pointLight.distance=25;
    SoffittoFinal.stanza1a=stanza1a;

    stanza2=createPointLight();
    stanza2.position.set(12,-2.5,1.3);
    SoffittoFinal.stanza2=stanza2;

    SoffittoFinal.add(stanza2);
    stanza2a=createPointLight();
    stanza2a.position.set(12,-11.5,1.3);

    SoffittoFinal.add(stanza2a);
    stanza2.pointLight.distance=25;        
    stanza2a.pointLight.distance=25;
    SoffittoFinal.stanza2a=stanza2a;

    SoffittoFinal.position.set(20, 17.5,6.35);
    SoffittoFinal.rotation.x=Math.PI;

    return SoffittoFinal;
}