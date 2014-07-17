function maniglia(){
    var Maniglia = new THREE.Object3D();
    var hookManiglia1 = new THREE.Object3D();

    var geometry = new THREE.CylinderGeometry( 0.05, 0.05, 0.75, 32 );
    var material = new THREE.MeshPhongMaterial( {color: "#CC9900", metal:true} );
    var cylinder = new THREE.Mesh( geometry, material );

    var geometry2 = new THREE.CylinderGeometry( 0.1, 0.1, 0.4, 32 );
    var cylinder4 = new THREE.Mesh( geometry2, material );

    cylinder.add(hookManiglia1);
    cylinder.add(cylinder4);

    var cylinder2 = new THREE.Mesh( geometry, material );
    cylinder2.position.x=-0.25;
    cylinder2.position.y=-0.4;
    cylinder2.rotation.z = -1/2*Math.PI;

    //cylinder2.position.x=-2.5
    var cylinder3 = new THREE.Mesh( geometry, material );
    cylinder3.position.x=-0.25;
    cylinder3.position.y=0.4;
    cylinder3.rotation.z = -1/2*Math.PI;

    hookManiglia1.add(cylinder2);
    hookManiglia1.add(cylinder3);


    Maniglia.add( cylinder );
    Maniglia.add( hookManiglia1 );
   // Maniglia.add( hookManiglia2 );
   Maniglia.scale.x=0.6
   Maniglia.scale.y=0.6
   Maniglia.scale.z=0.7
   Maniglia.position.x=0.92;
    Maniglia.perno=cylinder2;

    return Maniglia;

}

function createDoor(door2){
    var Door = new THREE.Object3D();
    var hook = new THREE.Object3D();

    var corn1 = createMesh(new THREE.BoxGeometry(0.3, 0.6,5.2), "cornicePorta.jpg");
    if(door2===undefined){
        var mesh = createMeshPorte(new THREE.BoxGeometry(2.3, 0.2,5.2), "porta.jpg","portaReverse.jpg","cornicePorta.jpg");
        mesh.position.set(1.3, 0, 0);

        var corn2 = createMesh(new THREE.BoxGeometry(0.3, 0.6,5.2), "cornicePorta.jpg");
        corn2.position.set(2.6, 0, 0);

        var corn3 = createMesh(new THREE.BoxGeometry(2.9, 0.6,0.3), "cornicePorta.jpg");
        corn3.position.set(1.3, 0,2.7);

        manigliaFin=maniglia();
        mesh.add(manigliaFin);

        animateDoor(mesh,manigliaFin);
        
    }else{
        var mesh = createMeshPorte(new THREE.BoxGeometry(2.3, 0.2,4.8), "portone.jpg","portoneReverse.jpg","cornice.png");
        mesh.position.set(1.3, 0, 0.2);

        var corn2 = createMesh(new THREE.BoxGeometry(0.3, 0.6,5.2), "cornice.png");
        corn2.position.set(2.6, 0, 0);

        var corn3 = createMesh(new THREE.BoxGeometry(2.9, 0.6,0.3), "cornice.png");
        corn3.position.set(1.3, 0,2.7);

        var marmo = createMesh(new THREE.BoxGeometry(2.7, 0.45,0.3), "marmo.jpg");
        marmo.position.set(1.3, 0,-2.4);
        Door.add(marmo);
        animateDoor(mesh)

    }
   
    Door.add(corn1);
    Door.add(corn2);
    Door.add(corn3);

    corn1.add(hook);

    hook.add(mesh);
    
    return Door
}


function manigliaFinestra(){
    var Maniglia = new THREE.Object3D();
    var hookManiglia = new THREE.Object3D();

    //intersect con cornice
    var geometry = new THREE.CylinderGeometry( 0.05, 0.05, 0.45, 32 );
    var material = new THREE.MeshPhongMaterial( {color: "#CC9900", metal:true} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.set(0,-0.2,0);


    //cilindro rifinitura
    var geometry4 = new THREE.CylinderGeometry( 0.1, 0.1, 0.1, 32 );
    var cylinder4 = new THREE.Mesh( geometry4, material );

    cylinder.add(hookManiglia);
    cylinder.add(cylinder4);

    //maniglia
    var geometry2 = new THREE.CylinderGeometry( 0.05, 0.05, 0.65, 32);
    var cylinder2 = new THREE.Mesh( geometry2, material );
    //quando apro
    //cylinder2.position.x=0.25;
    //leva quando apri 
    cylinder2.position.z=-0.15;
    cylinder2.position.y=-0.4;
    cylinder2.rotation.z = -1/2*Math.PI;
    cylinder2.rotation.y = -1/2*Math.PI;

    hookManiglia.add(cylinder2);

    Maniglia.add( cylinder );
    Maniglia.add( hookManiglia );

   Maniglia.scale.x=0.6
   Maniglia.scale.y=0.6
   Maniglia.scale.z=0.7
   //Maniglia.position.x=0.92;
    Maniglia.perno=cylinder2;
    return Maniglia;

}

function createWindow(){
    var Window = new THREE.Object3D();
    var hook = new THREE.Object3D();
    hook.position.set(0.2, 0, -0.1);

    var hook2 = new THREE.Object3D();
    hook2.position.set(-0.2, 0, -0.1);


    var WindowGeometry = new THREE.BoxGeometry(1, 0.1, 2.8);
    var meshMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
    meshMaterial.transparent=true;
    meshMaterial.opacity=0.8;
    var background1 = new THREE.Mesh(WindowGeometry, meshMaterial);
    background1.position.set(0.6,0,0);
    var background2 = new THREE.Mesh(WindowGeometry, meshMaterial);
    background2.position.set(-0.6,0,0);
    var sx = createMesh(new THREE.BoxGeometry(0.2, 0.6,3), "corniceFin.png");
    var dx = createMesh(new THREE.BoxGeometry(0.2, 0.6,3), "corniceFin.png");
    var up= createMesh(new THREE.BoxGeometry(3.2, 0.6,0.2), "corniceFin.png");
    var down= createMesh(new THREE.BoxGeometry(3.2, 0.6,0.2), "corniceFin.png");

    sx.position.set(0, 0,0);
    dx.position.set(3, 0,0);
    up.position.set(1.5, 0, 1.6);
    down.position.set(1.5, 0, -1.6);


    //sopra e sotto anta sinistra
    var Sxup = createMesh(new THREE.BoxGeometry(1.4, 0.2,0.2), "corniceFin.png");
    Sxup.position.set(0.6, 0,1.5);
    var Sxdown = createMesh(new THREE.BoxGeometry(1.4, 0.2,0.2), "corniceFin.png");
    Sxdown.position.set(0.6, 0,-1.3);

    //sopra e sotto anta destra
    var Dxup = createMesh(new THREE.BoxGeometry(1.4, 0.2,0.2), "corniceFin.png");
    Dxup.position.set(-0.6, 0,1.5);

    var Dxdown = createMesh(new THREE.BoxGeometry(1.4, 0.2,0.2), "corniceFin.png");
    Dxdown.position.set(-0.6, 0,-1.3);
   
    //ante centrali
    var corn4 = createMesh(new THREE.BoxGeometry(0.2, 0.2,2.6), "corniceFin.png");
    corn4.position.set(1.2, 0,0.1);
    //var corn5 = createMesh(new THREE.BoxGeometry(0.2, 0.2,2.6), "corniceManiglia.png");
    var corn5 = createMesh(new THREE.BoxGeometry(0.2, 0.2,2.6), "corniceFin.png");
    corn5.position.set(-1.2, 0,0.1);
    manigliaFin=manigliaFinestra();
    corn5.add(manigliaFin);

    //ante laterali
    var corn4a = createMesh(new THREE.BoxGeometry(0.2, 0.2,2.6), "corniceFin.png");
    corn4a.position.set(0, 0,0.1);
    var corn5a = createMesh(new THREE.BoxGeometry(0.2, 0.2,2.6), "corniceFin.png");
    corn5a.position.set(0, 0,0.1);

    Window.add(up);
    Window.add(down);

    Window.add(sx);
    sx.add(hook);
    hook.add(background1);
    hook.add(Sxup);
    hook.add(Sxdown);
    hook.add(corn4);
    hook.add(corn4a);

    Window.add(dx);
    dx.add(hook2);
    hook2.add(background2);
    hook2.add(Dxup);
    hook2.add(Dxdown);
    hook2.add(corn5);
    hook2.add(corn5a);

    

    Window.hook=hook;
    Window.hook2=hook2;
    Window.background1=background1;
    Window.background2=background2;


    Window.maniglia=manigliaFin;

    return Window
}


function createWindow2(){
    var Window = new THREE.Object3D();
    var hook = new THREE.Object3D();
    hook.position.set(0.2, 0, -0.1);

    var hook2 = new THREE.Object3D();
    hook2.position.set(-0.2, 0, -0.1);


    var WindowGeometry = new THREE.BoxGeometry(1, 0.1, 5.8);
    var meshMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
    meshMaterial.transparent=true;
    meshMaterial.opacity=0.8;
    var background1 = new THREE.Mesh(WindowGeometry, meshMaterial);
    background1.position.set(0.6,0,0);
    var background2 = new THREE.Mesh(WindowGeometry, meshMaterial);
    background2.position.set(-0.6,0,0);
    var sx = createMesh(new THREE.BoxGeometry(0.2, 0.6,6.1), "corniceFin.png");
    var dx = createMesh(new THREE.BoxGeometry(0.2, 0.6,6.1), "corniceFin.png");
    var up= createMesh(new THREE.BoxGeometry(3.2, 0.6,0.2), "corniceFin.png");
    sx.position.set(0, 0,0);
    dx.position.set(3, 0,0);
    up.position.set(1.5, 0, 3.1);


    //sopra e sotto anta sinistra
    var Sxup = createMesh(new THREE.BoxGeometry(1.4, 0.2,0.2), "corniceFin.png");
    Sxup.position.set(0.6, 0,3);
    var Sxdown = createMesh(new THREE.BoxGeometry(1.4, 0.2,0.2), "corniceFin.png");
    Sxdown.position.set(0.6, 0,-2.9);

    //sopra e sotto anta destra
    var Dxup = createMesh(new THREE.BoxGeometry(1.4, 0.2,0.2), "corniceFin.png");
    Dxup.position.set(-0.6, 0,3);

    var Dxdown = createMesh(new THREE.BoxGeometry(1.4, 0.2,0.2), "corniceFin.png");
    Dxdown.position.set(-0.6, 0,-2.9);
   
    //ante centrali
    var corn4 = createMesh(new THREE.BoxGeometry(0.2, 0.2,5.7), "corniceFin.png");
    corn4.position.set(1.2, 0,0.05);
    var corn5 = createMesh(new THREE.BoxGeometry(0.2, 0.2,5.7), "corniceFin.png");
    corn5.position.set(-1.2, 0,0.05);
    manigliaFin=manigliaFinestra();
    corn5.add(manigliaFin);

    //ante laterali
    var corn4a = createMesh(new THREE.BoxGeometry(0.2, 0.2,5.7), "corniceFin.png");
    corn4a.position.set(0, 0,0.05);
    var corn5a = createMesh(new THREE.BoxGeometry(0.2, 0.2,5.7), "corniceFin.png");
    corn5a.position.set(0, 0,0.05);

    Window.add(up);
    Window.add(sx);
    sx.add(hook);
    hook.add(background1);
    hook.add(Sxup);
    hook.add(Sxdown);
    hook.add(corn4);
    hook.add(corn4a);

    Window.add(dx);
    dx.add(hook2);
    hook2.add(background2);
    hook2.add(Dxup);
    hook2.add(Dxdown);
    hook2.add(corn5);
    hook2.add(corn5a);

    

    Window.hook=hook;
    Window.hook2=hook2;
    Window.background1=background1;
    Window.background2=background2;
    Window.maniglia=manigliaFin;



    return Window
}



function createWindow3(){
    var Window = new THREE.Object3D();
    var hook = new THREE.Object3D();
    hook.position.set(0.2, 0, -0.1);

    var hook2 = new THREE.Object3D();
    hook2.position.set(-0.2, 0, -0.1);


    var WindowGeometry = new THREE.BoxGeometry(1, 0.1, 2.8);
    var meshMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
    meshMaterial.transparent=true;
    meshMaterial.opacity=0.8;
    var background1 = new THREE.Mesh(WindowGeometry, meshMaterial);
    background1.position.set(0.6,0,0);
    var background2 = new THREE.Mesh(WindowGeometry, meshMaterial);
    background2.position.set(-0.6,0,0);
    var sx = createMesh(new THREE.BoxGeometry(0.2, 0.6,3), "corniceFin.png");
    var dx = createMesh(new THREE.BoxGeometry(0.2, 0.6,3), "corniceFin.png");
    var up= createMesh(new THREE.BoxGeometry(3.2, 0.6,0.2), "corniceFin.png");
    var down= createMesh(new THREE.BoxGeometry(3.2, 0.6,0.2), "corniceFin.png");

    sx.position.set(0, 0,0);
    dx.position.set(3, 0,0);
    up.position.set(1.5, 0, 1.6);
    down.position.set(1.5, 0, -1.6);


    //sopra e sotto anta sinistra
    var Sxup = createMesh(new THREE.BoxGeometry(1.4, 0.2,0.2), "corniceFin.png");
    Sxup.position.set(0.6, 0,1.5);
    var Sxdown = createMesh(new THREE.BoxGeometry(1.4, 0.2,0.2), "corniceFin.png");
    Sxdown.position.set(0.6, 0,-1.3);

    //sopra e sotto anta destra
    var Dxup = createMesh(new THREE.BoxGeometry(1.4, 0.2,0.2), "corniceFin.png");
    Dxup.position.set(-0.6, 0,1.5);

    var Dxdown = createMesh(new THREE.BoxGeometry(1.4, 0.2,0.2), "corniceFin.png");
    Dxdown.position.set(-0.6, 0,-1.3);
   
    //ante centrali
    var corn4 = createMesh(new THREE.BoxGeometry(0.2, 0.2,2.6), "corniceFin.png");
    corn4.position.set(1.2, 0,0.1);
    var corn5 = createMesh(new THREE.BoxGeometry(0.2, 0.2,2.6), "corniceManiglia.png");
    corn5.position.set(-1.2, 0,0.1);
    manigliaFin=manigliaFinestra();
    manigliaFin.scale.set(0.4,0.8,0.8);
    manigliaFin.position.set(0,0.1,0);
    corn5.add(manigliaFin);

    //ante laterali
    var corn4a = createMesh(new THREE.BoxGeometry(0.2, 0.2,2.6), "corniceFin.png");
    corn4a.position.set(0, 0,0.1);
    var corn5a = createMesh(new THREE.BoxGeometry(0.2, 0.2,2.6), "corniceFin.png");
    corn5a.position.set(0, 0,0.1);

    Window.add(up);
    Window.add(down);

    Window.add(sx);
    sx.add(hook);
    hook.add(background1);
    hook.add(Sxup);
    hook.add(Sxdown);
    hook.add(corn4);
    hook.add(corn4a);

    Window.add(dx);
    dx.add(hook2);
    hook2.add(background2);
    hook2.add(Dxup);
    hook2.add(Dxdown);
    hook2.add(corn5);
    hook2.add(corn5a);

    

    Window.hook=hook;
    Window.hook2=hook2;
    Window.background1=background1;
    Window.background2=background2;
    Window.maniglia=manigliaFin;




    return Window
}

function windowList(){
    var windList = new THREE.Object3D();
    w1=createWindow();
    w1.scale.x=0.87;
    w1.scale.z=0.8;
    w1.position.x=14.95;
    w1.position.y=0.15;
    w1.position.z=4.2;
    w1.rotation.z = Math.PI;
    animateWindow(w1.background2,w1.background1,w1.maniglia.perno);

    w2=createWindow();
    w2.scale.x=0.75;
    w2.scale.z=0.8;
    w2.position.x=33.85;
    w2.position.y=0.15;
    w2.position.z=4.2;
    w2.rotation.z = Math.PI;
    animateWindow(w2.background2,w2.background1,w2.maniglia.perno);
   
    w3=createWindow3();
    w3.scale.set(2.3,1,0.73);
    w3.position.x=18.5;
    w3.position.y=35.05;
    w3.position.z=3.9;
    animateWindow(w3.background2,w3.background1,w3.maniglia.perno);


    w4=createWindow();
    w4.rotation.z = 3/2*Math.PI;
    w4.scale.x=0.7;
    w4.scale.z=0.8;
    w4.position.x=39.35;
    w4.position.y=7.35;
    w4.position.z=4.2;
    animateWindow(w4.background2,w4.background1,w4.maniglia.perno);

    w5=createWindow();
    w5.rotation.z = 3/2*Math.PI;
    w5.scale.x=0.81;
    w5.scale.z=0.8;
    w5.position.x=39.35;
    w5.position.y=17.25;
    w5.position.z=4.2;
    animateWindow(w5.background2,w5.background1,w5.maniglia.perno);

    w6=createWindow();
    w6.rotation.z = 3/2*Math.PI;
    w6.scale.x=0.7;
    w6.scale.z=0.8;
    w6.position.x=39.35;
    w6.position.y=30.6;
    w6.position.z=4.2;
    animateWindow(w6.background2,w6.background1,w6.maniglia.perno);


    w7=createWindow2();
    w7.scale.z=0.8;
    w7.scale.x=0.95;
    w7.position.x=3.4;
    w7.position.y=35;
    w7.position.z=2.8;
    animateWindow(w7.background2,w7.background1,w7.maniglia.perno);

    w8=createWindow2();
    w8.scale.z=0.8;
    w8.position.x=31.2;
    w8.position.y=35;
    w8.position.z=2.8;
    animateWindow(w8.background2,w8.background1,w8.maniglia.perno);

    windList.add(w1);
    windList.add(w2);
    windList.add(w3);
    windList.add(w4);
    windList.add(w5);
    windList.add(w6);
    windList.add(w7);
    windList.add(w8);

return windList;

}

function doorsList(){
    var DoorList = new THREE.Object3D();
    door1=createDoor();
    door1.scale.x=0.9;
    door1.position.set(12.5,12.45,2.65);

    door2=createDoor();
    door2.scale.x=0.91;
    door2.position.set(12.4,19.75,2.65);

    door3=createDoor();
    door3.scale.x=0.93;
    door3.position.set(20.7,19.75,2.65);

    door6=createDoor();
    door6.scale.x=0.93;
    door6.position.set(20.7,12.45,2.65);

    door4=createDoor();
    door4.rotation.z = 3/2*Math.PI;
    door4.scale.x=1.1;
    door4.position.set(9.45,17.5,2.65);

    door5=createDoor();
    door5.scale.x=1.1;
    door5.rotation.z = 3/2*Math.PI;
    door5.position.set(26.05,17.5,2.65);

    doorFirst=createDoor("portone");
    doorFirst.rotation.z = 3/2*Math.PI;
    doorFirst.scale.x=1.2;
    doorFirst.scale.y=1.4;
    doorFirst.position.set(0.15,7.7,2.65);                                                                                                                                                                                                                     ;

    DoorList.add(door1);
    DoorList.add(door3);
    DoorList.add(door4);
    DoorList.add(door5);
    DoorList.add(door6);
    DoorList.add(doorFirst);

    return DoorList;
}