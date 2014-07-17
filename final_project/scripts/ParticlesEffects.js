//gas
  function castFire(count, radius, delta, h){
  var fireCount = count;
  var fireDrop = new THREE.Geometry();
  var fireDropMaterial = new THREE.ParticleBasicMaterial({
    color: 0xff0000,
    size: 0.5,
    map: THREE.ImageUtils.loadTexture("assets/images/frigo.jpg"),
    blending: THREE.AdditiveBlending,
    transparent: true
  });
  var alfa = 0;
  for(var i=0; i<fireCount; i++){
    
    alfa += (2/count);
    var px = radius * Math.cos(alfa*2* Math.PI);
    var py = radius * Math.sin(alfa*2* Math.PI);
    var pz = Math.PI*h;

    var drop = new THREE.Vector3(px,py,pz);
    fireDrop.vertices.push(drop);
  }
  var fireSystem = new THREE.ParticleSystem(fireDrop, fireDropMaterial);
  fireSystem.sortParticles = true;
  fireSystem.visible=false;
  return fireSystem;

}


function gasHob(){
  var geom=new THREE.BoxGeometry(1,2,0.1);
  var mat = new THREE.MeshBasicMaterial( { transparent: true, opacity: 0.01 } );
  mesh = new THREE.Mesh(geom, mat);
     
    gas=addObj({
      obj: 'gasHob',
      scale: [0.04,0.04,0.04],
      position: [24.8,24,-0.6],
      rotate: [Math.PI/2,-Math.PI/2,0]
    },mesh);
    gas.mesh.position.set(24.5,24,3);
    apartment.add(gas);
  animateGas(gas);
}