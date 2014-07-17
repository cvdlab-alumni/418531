function addObjAnimation(config,url){
        loaderObj(config,url, function (object) {
        object.scale.set.apply(object.scale,config.scale);
        object.position.set.apply(object.position,config.position);
        object.rotation.set.apply(object.rotation,config.rotate);
        ListObject.add(object);

        tazza = object.children[10];
        vasca = object.children[6];
        coperchio=object.children[9];
        perno=object.children[8];
        object.remove(tazza);
        object.remove(coperchio);
        var hook = new THREE.Object3D();
      
        tazza.add(hook);
        hook.position.set(0,40,18);
        coperchio.position.set(0,-40,-18.5);
        hook.add(coperchio);
        object.add(tazza);
        waterAnimation1(coperchio,hook);
        waterAnimation2(vasca);
        
      });
}

function addObjScrivania(config,url){
        loaderObj(config,url, function (object) {
        object.scale.set.apply(object.scale,config.scale);
        object.position.set.apply(object.position,config.position);
        object.rotation.set.apply(object.rotation,config.rotate);
        ListObject.add(object);
        tavolaSotto = object.children[0];
        schermo = object.children[1];        
        object.remove(tavolaSotto);
        animationPc(schermo);
      });
}


function addFucile(config,url){
      loaderObj(config,url, function (object) {
      object.scale.set.apply(object.scale,config.scale);
      object.position.set.apply(object.position,config.position);
      object.rotation.set.apply(object.rotation,config.rotate);
      camera.add(object);
      });
}

function addObj(config,meshObj,url){
  var objMesh = new THREE.Object3D();
  loaderObj(config,url, function (object) {
  object.scale.set.apply(object.scale,config.scale);
  object.position.set.apply(object.position,config.position);
  object.rotation.set.apply(object.rotation,config.rotate);
  if(meshObj!=undefined){
    objMesh.add(object);
      
  }else{
    ListObject.add(object);
  }
  });
  if(meshObj!=undefined){
    meshObj.position.set.apply(meshObj.position,config.position);
    objMesh.add(meshObj);
    objMesh.mesh=meshObj;
    return objMesh;
  }
}

function loaderObj(config,url,callback){
  elem=config.obj;
  mtl=config.mtl;
  var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {
      callback(event.content);
    });
  if(url!=undefined){ 
    if(mtl===undefined){
      loader.load(
      'assets/models/'+url+elem+'.obj',
      'assets/models/'+url+elem+'.mtl', 
      {side: THREE.DoubleSide}
      );
    }else {
      loader.load(
      'assets/models/'+url+elem+'.obj', 
      {side: THREE.DoubleSide}
      );
    }
  }else{
      if(mtl===undefined){
      loader.load(
      'assets/models/arredamento/'+elem+'.obj',
      'assets/models/arredamento/'+elem+'.mtl', 
      {side: THREE.DoubleSide}
      );
      }else {
        loader.load(
        'assets/models/arredamento/'+elem+'.obj', 
        {side: THREE.DoubleSide}
        );
      }
  }
}

var ListObject = new THREE.Object3D();

function getListObject(){

    addObj({
      obj: 'chandelier-lamp',
      scale: [0.02,0.02,0.02],
      position: [17,28.5,2],
      rotate: [Math.PI/2,Math.PI/2,0]
    });
    //bagno
    addObj({
      obj: 'pendantLamp',
      scale: [2,1.5,2],
      position: [14,8,6],
      rotate: [Math.PI/2,Math.PI/2,0],
      mtl:null,
    });
    addObj({
      obj: 'bathroom_bidet',
      scale: [0.04,0.04,0.04],
      position: [10.8,8,0],
      rotate: [Math.PI/2,Math.PI/2,0],
     
    });
     addObjAnimation({
      obj: 'toilets_unit_jay_hardy',
      scale: [0.05,0.05,0.05],
      position: [9.7,2.5,0],
      rotate: [Math.PI/2,Math.PI/2,0],
    });
    addObj({
      obj: 'bathroom_vanity',
      scale: [0.03,0.02,0.02],
      position: [17,7,2.2],
      rotate: [Math.PI/2,-Math.PI/2,0],
    });
    addObj({
      obj: 'bathroomRadiator',
      scale: [0.03,0.03,0.03],
      position: [16.7,0.5,-3],
      rotate: [Math.PI/2,-Math.PI/2,0],
    });
    addObj({
      obj: 'doccia',
      scale: [0.03,0.03,0.03],
      position: [21.8,12,0.5],
      rotate: [Math.PI/2,Math.PI,0],
    });
    //stanza1
    addObj({
      obj: 'pendantLamp',
      scale: [2,1.5,2],
      position: [32,5,6],
      rotate: [Math.PI/2,Math.PI/2,0],
        mtl : ''
    });
    addObj({
      obj: 'pendantLamp',
      scale: [2,1.5,2],
      position: [24,5,6],
      rotate: [Math.PI/2,Math.PI/2,0],
        mtl : ''
    });
    addObj({
      obj: 'Nightstand',
      scale: [3,3,3],
      position: [31,1.2,1],
      rotate: [Math.PI/2,Math.PI,0],
    });
    addObj({
      obj: 'bed1',
      scale: [0.03,0.03,0.03],
      position: [28,0.8,0],
      rotate: [Math.PI/2,Math.PI,0],
    });
    //stanza2

    addObj({
      obj: 'bed',
      scale: [0.03,0.03,0.03],
      position: [32.8,24,1.2],
      rotate: [Math.PI/2,Math.PI/2,0],
    });
    addObj({
      obj: 'Nightstand',
      scale: [3,3,3],
      position: [27,27.2,1],
      rotate: [Math.PI/2,Math.PI/2,0],
    });
    addObj({
      obj: 'Nightstand',
      scale: [3,3,3],
      position: [27,20.8,1],
      rotate: [Math.PI/2,Math.PI/2,0],
    });
    addObj({
      obj: 'pendantLamp',
      scale: [2,1.5,2],
      position: [32,20,6],
      rotate: [Math.PI/2,Math.PI/2,0],
        mtl : ''
    });
    addObj({
      obj: 'pendantLamp',
      scale: [2,1.5,2],
      position: [32,29,6],
      rotate: [Math.PI/2,Math.PI/2,0],
      mtl : ''
    });
    addObj({
      obj: 'office_chair',
      scale: [2.5,2.5,2.5],
      position: [34.5,14.5,0.5],
      rotate: [Math.PI/2,0,0]
    });
    addObjScrivania({
      obj: 'pc_obj',
      scale: [0.025,0.02,0.02],
      position: [32.2,13.4,2.3],
      rotate: [Math.PI/2,Math.PI,0]
    })
    addObj({
      obj: 'bedroom_pcdesk',
      scale: [0.04,0.04,0.03],
      position: [32.5,13.3,1.5],
      rotate: [Math.PI/2,Math.PI,0]
    });
    //salone
    
    addObj({
      obj: 'clear_sofa',
      scale: [0.03,0.03,0.03],
      position: [10,29,0],
      rotate: [Math.PI/2,-Math.PI/2,0]
    });
    addObj({
      obj: 'Minimalist Dining Table',
      scale: [0.03,0.03,0.03],
      position: [17,29,0.1],
      rotate: [Math.PI/2,Math.PI,0],
      mtl:''
    });

    addObj({
      obj: 'salontafel',
      scale: [0.02,0.03,0.05],
      position: [7.2,26.2,0.5],
      rotate: [Math.PI/2,Math.PI,0],
    });
     addObj({
      obj: 'oriental-rug',
      scale: [0.032,0.032,0.032],
      position: [7.5,28,0.4],
      rotate: [Math.PI/2,Math.PI,0],
    });
     /*
    addObj({
      obj: 'saloon_table',
      scale: [2,2,2],
      position: [8.5,26,0.8],
      rotate: [Math.PI/2,Math.PI,0],
    });
*/
    addObj({
      obj: 'dining_room',
      scale: [0.045,0.03,0.03],
      position: [1,27,0],
      rotate: [Math.PI/2,Math.PI/2,0],
    });
     return ListObject;
}
