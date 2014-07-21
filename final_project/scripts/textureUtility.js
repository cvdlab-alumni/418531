function addBumpMap(mesh, image, scale, repeat_U, repeat_V) {
  var bump = THREE.ImageUtils.loadTexture("assets/images/bump/" + image);
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(repeat_U, repeat_V);

  mesh.geometry.computeVertexNormals();
  mesh.material.bumpMap = bump;
  mesh.material.bumpScale = scale;
}


function createMesh(geom, imageFile,x,y) {
    var texture = THREE.ImageUtils.loadTexture("assets/images/" + imageFile)
    var mat = new THREE.MeshPhongMaterial();
    mat.map = texture;
    if(x!=undefined && y!=undefined){
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set( x, y );
    }
    var mesh = new THREE.Mesh(geom, mat);
    return mesh;
}

function createMeshSkybox (geom,list) {
  var materialArray = [];
  var texture0 = THREE.ImageUtils.loadTexture("assets/images/skybox/" + list[0]+".jpg")
  var texture1 = THREE.ImageUtils.loadTexture("assets/images/skybox/" + list[1]+".jpg")
  var texture2 = THREE.ImageUtils.loadTexture("assets/images/skybox/" + list[2]+".jpg")
  var texture3 = THREE.ImageUtils.loadTexture("assets/images/skybox/" + list[3]+".jpg")
  var texture4 = THREE.ImageUtils.loadTexture("assets/images/skybox/" + list[4]+".jpg")
  var texture5 = THREE.ImageUtils.loadTexture("assets/images/skybox/" + list[5]+".jpg")

  materialArray.push(new THREE.MeshBasicMaterial({  map: texture0 ,side: THREE.BackSide }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture1 ,side: THREE.BackSide }));
  materialArray.push(new THREE.MeshBasicMaterial({  map: texture2 ,side: THREE.BackSide}));
  materialArray.push(new THREE.MeshBasicMaterial({  map: texture3  ,side: THREE.BackSide}));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture4 ,side: THREE.BackSide}));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture5  ,side: THREE.BackSide}));
  var faceMaterial = new THREE.MeshFaceMaterial(materialArray);
  side: THREE.BackSide

  // create a multimaterial
  var mesh = new THREE.Mesh(geom, faceMaterial);

  return mesh;
}


function createMeshPorte (geom,imageFile,imageFile2,imageFile3) {
  var materialArray = [];
  var texture = THREE.ImageUtils.loadTexture("assets/images/" + imageFile)
  var texture2 = THREE.ImageUtils.loadTexture("assets/images/" + imageFile2)
  var texture3 = THREE.ImageUtils.loadTexture("assets/images/" + imageFile3)

  materialArray.push(new THREE.MeshPhongMaterial({  map: texture3  }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture3  }));
  materialArray.push(new THREE.MeshPhongMaterial({  map: texture2 }));
  materialArray.push(new THREE.MeshPhongMaterial({  map: texture  }));
  materialArray.push(new THREE.MeshPhongMaterial({ map: texture3 }));
  materialArray.push(new THREE.MeshPhongMaterial({ map: texture3  }));
  var faceMaterial = new THREE.MeshFaceMaterial(materialArray);

  // create a multimaterial
  var mesh = new THREE.Mesh(geom, faceMaterial);

  return mesh;
}

function createMeshArray (geom,imageFile,n,imageFile2) {
  var materialArray = [];
  var texture = THREE.ImageUtils.loadTexture("assets/images/" + imageFile);
  if(imageFile2!=undefined){
  var texture2 = THREE.ImageUtils.loadTexture("assets/images/" + imageFile2);
  }else{
    texture2=undefined;
  }
  for (var i = 1; i <= 6; i++) {
    if(i!=n){
      if(texture2!=undefined){
          materialArray.push(new THREE.MeshPhongMaterial({  map: texture2  }));
      }
      else{
          materialArray.push(new THREE.MeshPhongMaterial({  color: 0x555555  }));
      }
    }
    else{
        materialArray.push(new THREE.MeshPhongMaterial({ map: texture }));

    }
    var faceMaterial = new THREE.MeshFaceMaterial(materialArray);
  }
  // create a multimaterial
  var mesh = new THREE.Mesh(geom, faceMaterial);

  return mesh;
}


function createMeshTV (geom,text2) {
  var materialArray = [];
  materialArray.push(new THREE.MeshPhongMaterial({ color: 0x7777ff,transparent:true,opacity:0.9  }));
  materialArray.push(new THREE.MeshPhongMaterial({ color: 0x7777ff,transparent:true,opacity:0.9  }));
  materialArray.push(new THREE.MeshPhongMaterial({ color: 0x7777ff,transparent:true,opacity:0.9  }));
  materialArray.push(new THREE.MeshPhongMaterial({ color: 0x7777ff,transparent:true,opacity:0.9   }));
  materialArray.push(new THREE.MeshPhongMaterial({ map: text2 }));
  materialArray.push(new THREE.MeshPhongMaterial({ color: 0x7777ff,transparent:true,opacity:0.9  }));
  var faceMaterial = new THREE.MeshFaceMaterial(materialArray);

  // create a multimaterial
  var mesh = new THREE.Mesh(geom, faceMaterial);

return mesh;
}



function mkShape  (vertices) {
    var shape = new THREE.Shape();
    shape.moveTo.apply(shape, vertices.shift());
    vertices.forEach(function (v) {
        shape.lineTo.apply(shape, v);
    });
    return shape;
}

function mkHole (shape, vertices) {
    var hole = new THREE.Path();
    hole.moveTo.apply(hole,vertices.shift());
    vertices.forEach(function (v) {
        hole.lineTo.apply(hole,v);
    });

    shape.holes.push(hole);
}


function createTexturedShape(obj,textureImageFile, shapeList,x,y, holeList) {
    var texture = THREE.ImageUtils.loadTexture("assets/images/" + textureImageFile);

    var shape = mkShape(shapeList);
    if (holeList && (holeList.length !== 0)) {
        for(var i = 0; i < holeList.length; i++) {
            mkHole(shape, holeList[i]);
        }
    }
    var shapeGeometry = new THREE.ShapeGeometry(shape);
    var shapeMaterial = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide });

    shapeMaterial.map = texture;
    //shapeMaterial.bumpScale = 0.5;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( x, y );

    var shapeMesh = new THREE.Mesh(shapeGeometry, shapeMaterial);
    obj.add(shapeMesh);
    return shapeMesh;
}

