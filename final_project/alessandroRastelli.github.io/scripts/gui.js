controlGUI = new function() {
  this.FPS = startFPS;
  this.enableTrackball = true;
  this.AndroidGame = createMan;
  this.furniture=false;
  this.switchLights=false;
  this.nigth=false;
};

var gui = new dat.GUI();
gui.add(controlGUI, "FPS");
gui.add(controlGUI, "enableTrackball");
gui.add(controlGUI, "AndroidGame");
gui.add(controlGUI, "furniture").onChange(function(arreda) {
  if(arreda){
    apartment.add(arredamentoInterno);
  }
  else{
    apartment.remove(arredamentoInterno);
  }
});
gui.add(controlGUI, "switchLights").onChange(function(on) {

 if (on && FPenabled === false) {
       swicthAll(0);
  }
  else{
      swicthAll(1);
  }
});
gui.add(controlGUI, "nigth").onChange(function(change) {
    if (change) {
        //var directions = ["jajcannons1_back", "jajcannons1_front", "jajcannons1_top", "skybox_zneg", "jajcannons1_left", "jajcannons1_right"];
        scene.remove(skybox);
        var directions = ["stars_back", "stars_front", "stars_top", "skybox_zneg", "stars_left","stars_right"];
        var skyboxGeometry = new THREE.BoxGeometry(500, 500, 500);
        skyboxNigth=createMeshSkybox(skyboxGeometry,directions);
        skyboxNigth.position.set(0,0,0);
        skyboxNigth.color = new THREE.Color('#FFFFFF');

        light.intensity = 0;
        scene.add(skyboxNigth);
        swicthAll(0);
              
    } else {
        scene.remove(skyboxNigth);
        var directions = ["skybox_xpos", "skybox_xneg", "skybox_zpos", "skybox_zneg", "skybox_ypos", "skybox_yneg"];
        //var directions = ["jajcannons1_back", "jajcannons1_front", "jajcannons1_top", "skybox_zneg", "jajcannons1_left", "jajcannons1_right"];
        var skyboxGeometry = new THREE.BoxGeometry(500, 500, 500);
        skybox=createMeshSkybox(skyboxGeometry,directions);
        skybox.position.set(0,75,0);
        skybox.color = new THREE.Color('#FFFFFF');

        
        light.intensity = 1;
        scene.add(skybox);
        swicthAll(1);

      }
});