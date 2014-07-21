var controls;
var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

if (havePointerLock) {

  var element = document.body;

  var pointerlockchange = function(event) {
    if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
      FPenabled = true;
      controls.enabled = true;
     camera.position.set(0,0,0);
      camera.lookAt(scene.position);

      camera.up = new THREE.Vector3(0, 0, 0);
      if(ModeGame===true){
          $("#point").fadeIn(1000);
      }else{
          $("#pointer").fadeIn(1000);
      }
    } else {
      location.reload();
    }
  }

  var pointerlockerror = function(event) {
    location.reload();
  }

  document.addEventListener('pointerlockchange', pointerlockchange, false);
  document.addEventListener('mozpointerlockchange', pointerlockchange, false);
  document.addEventListener('webkitpointerlockchange', pointerlockchange, false);

  document.addEventListener('pointerlockerror', pointerlockerror, false);
  document.addEventListener('mozpointerlockerror', pointerlockerror, false);
  document.addEventListener('webkitpointerlockerror', pointerlockerror, false);

  var startFPS = function() {
    trackballControls.reset();
    controls = new THREE.PointerLockControls(camera);
    scene.add(controls.getObject());
    element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
    if (/Firefox/i.test(navigator.userAgent)) {
      var fullscreenchange = function(event) {
        if (document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element) {
          document.removeEventListener('fullscreenchange', fullscreenchange);
          document.removeEventListener('mozfullscreenchange', fullscreenchange);
          element.requestPointerLock();
        }
      }
      document.addEventListener('fullscreenchange', fullscreenchange, false);
      document.addEventListener('mozfullscreenchange', fullscreenchange, false);
      element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;
      element.requestFullscreen();
    } else {
      element.requestPointerLock();
    }
  };

}