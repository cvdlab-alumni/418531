var FPenabled = false;
ModeGame=false;

function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
	
  camera.up = new THREE.Vector3(0,3,0);
	camera.position.set(-120,10,0);
	trackballControls = new THREE.TrackballControls(camera);
	

	// create a render and set the size
  var ambiLight = new THREE.AmbientLight(0x242424)
  scene.add(ambiLight);
  light = new THREE.PointLight();
  light.position.set(80, 150, 50);
  light.intensity = 1;
  scene.add(light);
  
  var directions = ["skybox_xpos", "skybox_xneg", "skybox_zpos", "skybox_zneg", "skybox_ypos", "skybox_yneg"];
  var skyboxGeometry = new THREE.BoxGeometry(500, 500, 500);
  skybox=createMeshSkybox(skyboxGeometry,directions);
  skybox.position.set(0,75,0);
  skybox.color = new THREE.Color('#FFFFFF');
  scene.add(skybox);

  var planeGeometry = new THREE.PlaneGeometry(500, 500, 10,10);

  var plane=createMesh(planeGeometry,"prato.jpg",2,1);
  plane.rotation.x=-Math.PI/2;

  scene.add(plane);

  //struttura
  apartment = new THREE.Object3D();
  apartment.scale.set(2,2,2.5);

  floor=PlaneList();
  floor.position.z=0.4
  apartment.add(floor);

  door=doorsList();
  apartment.add(door);
  windows=windowList();
  apartment.add(windows);

  tv=TvList();
  apartment.add(tv);

  quadri=QuadroList();
  apartment.add(quadri);

  wall=WallList();
  apartment.add(wall);

  soffitto=listLuce();
  apartment.soffitto=soffitto;
  apartment.add(soffitto);

  inter=InterruttoreList();
  apartment.add(inter);

  mobili=mobileList();
  mobili.position.set(12,0,0);
  mobili.scale.set(0.8,1,0.8);
  apartment.add(mobili);


  armadi=ArmadioList();
  apartment.add(armadi);


  apartment.rotation.set(-Math.PI/2,0,-Math.PI/2);

  apartment.position.set(-20,0,-30);
  scene.add(apartment);

  //inizializzata nel GUI
  arredamentoInterno=getListObject();

  createCar();
  gasHob();

  var mesh;

  //import model from larcc
  var loader = new THREE.OBJLoader();
  loader.load('assets/models/master.obj', function (obj) {

    global_o = obj;
    var material = new THREE.MeshLambertMaterial({color: 0xaaaaaa});
    material.side = THREE.DoubleSide;
    obj.children[0].material = material;
    mesh = obj.children[0];
    apartment.add(mesh);
  });
  

  raycaster = new THREE.Raycaster();
	raycaster.ray.direction.set(0, 1, 0);
	projector = new THREE.Projector();

	
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0xffffff);
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

 
	render();

}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}


function onDocumentMouseDown(event) {
  event.preventDefault();
  if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
    var vector = new THREE.Vector3(0, 0, 2);
    projector.unprojectVector(vector, camera);
    var raycaster = new THREE.Raycaster(vector,controls.getDirection(new THREE.Vector3(0, 0, 0)).clone());
  } else {
    var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1, 0.5);
        projector.unprojectVector(vector, camera);

        var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
        var intersects = raycaster.intersectObjects(toIntersect);
  }
  var intersects = raycaster.intersectObjects(toIntersect);

  if (intersects.length > 0) {
    intersects[0].object.interact && intersects[0].object.interact();
  }

}


function render() {
  if (controlGUI.enableTrackball) {
    trackballControls.update();
  }
  // first person controls
  if (FPenabled === true) {
    apartment.position.set(-20,0,20);
    document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    controls.update();
  }
  //androidGame
  if(ModeGame===true){
    move(man);
  }
  //tv
  if ( video.readyState === video.HAVE_ENOUGH_DATA ) {
    videoImageContext.drawImage( video, 0, 0 );
    if ( videoTexture ) {
        videoTexture.needsUpdate = true;
        video.updateVolume();
      }
  }

// webcam
  if ( webCamvideo.readyState === webCamvideo.HAVE_ENOUGH_DATA ) {
    webCamImageContext.drawImage( webCamvideo, 0, 0 );
    if ( webCamTexture ) {
      webCamTexture.needsUpdate = true;

    }
  }
  if (pc_logo.readyState === pc_logo.HAVE_ENOUGH_DATA) {
    pc_logo_imageContext.drawImage(pc_logo, 0, 0, pc_logo_image.width, pc_logo_image.height);
    if (pc_logo_texture) 
      pc_logo_texture.needsUpdate = true;
  }

  TWEEN.update();
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}