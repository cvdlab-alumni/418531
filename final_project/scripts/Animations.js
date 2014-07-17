var src=[['TG5.ogv'],["rossi-lorenzo.ogv"],["fantozzi.ogv"],["xp.mp4"]]
//webcamInit
webCamvideo=document.getElementById('monitor');
videoImage2 = document.createElement( 'canvas' );
videoImage2.width=512;
videoImage2.height=512;
webCamImageContext = videoImage2.getContext( '2d' );
// background color if no video present
webCamImageContext.fillStyle = '#000000';
webCamImageContext.fillRect( 0, 0, videoImage2.width, videoImage2.height );
webCamTexture = new THREE.Texture( videoImage2 );
webCamTexture.minFilter = THREE.LinearFilter;
webCamTexture.magFilter = THREE.LinearFilter;

// monitor Xp
pc_logo = document.createElement('video');
pc_logo_image = document.createElement('canvas');
pc_logo_image.width = 1024;
pc_logo_image.height = 768;
pc_logo_imageContext = pc_logo_image.getContext('2d');
pc_logo_imageContext.fillStyle = '#000000';
pc_logo_imageContext.fillRect(0, 0, pc_logo_image.width, pc_logo_image.height);
pc_logo_texture = new THREE.Texture(pc_logo_image);
pc_logo_texture.minFilter = THREE.LinearFilter;
pc_logo_texture.magFilter = THREE.LinearFilter;
pc_logo_texture.format = THREE.RGBFormat;
pc_logo_texture.generateMipmaps = false;

// Tvvideo element
video = document.createElement( 'video' );
video.load(); // must call after setting/changing source
videoImage = document.createElement( 'canvas' );
videoImage.width = 380;
videoImage.height = 234;
videoImageContext = videoImage.getContext( '2d' );
// background color if no video present
videoImageContext.fillStyle = '#000000';
videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );
videoTexture = new THREE.Texture( videoImage );
videoTexture.minFilter = THREE.LinearFilter;
videoTexture.magFilter = THREE.LinearFilter;
video.defaultRadius = 50;
video.defaultVolume = 1;    

video.updateVolume = function() {
        var distance = this.position.distanceTo((!FPenabled) ? camera.position : controls.getObject().position);
        if (distance <= this.defaultRadius) {
            this.volume = this.defaultVolume * (1 - distance / this.defaultRadius);
        } else {
            this.volume = 0;
        }        
    }



function animateTv(obj){
    screen=obj.children[1];
    var index=0;
    //sistema e crea una box in base alle dimensioni del tv
    var videoImageToTV = createMeshTV(new THREE.BoxGeometry(2.9, 2.9, 0.3),videoTexture );
    videoImageToTV.position.set(1.5,0,0);
    videoImageToTV.rotation.x = -3/2*Math.PI;
    screen.interact = function () {
        scene.updateMatrixWorld();
        var tvPosition = new THREE.Vector3(obj.position.y*2-20, 1, obj.position.x*2+20);
        scene.localToWorld(tvPosition);
        video.position= tvPosition;
        obj.add(videoImageToTV);
        //obj.ligth.intensity=2;
        video.src = "assets/movies/"+src[index];
        if(index===3){
            obj.remove(videoImageToTV);
            index =0;
            //obj.ligth.intensity=0;
        }else{
            video.play();
            index+=1;
        }   
    }
    toIntersect.push(screen);
}

function animationPc(obj){
    on=false;
    index2=0;
    var videoImageToPc;
    obj.interact = function () {
        if(!on){
            if(index2===0){
                scene.updateMatrixWorld();
                var pcPosition = new THREE.Vector3(obj.position.y*2+15, 1, obj.position.x*2+78);
                scene.localToWorld(pcPosition);
                pc_logo.position= pcPosition;
                pc_logo.src = "assets/movies/"+src[3];
                videoImageToPc = createMeshTV(new THREE.BoxGeometry(65, 33, 1),pc_logo_texture);
                videoImageToPc.position.set(0,67,1.8);
                obj.add(videoImageToPc);
                pc_logo.play();
                index2+=1;
            }else{
                obj.remove(videoImageToPc);
                webcamImageToPc = createMeshTV(new THREE.BoxGeometry(65, 33, 1),webCamTexture );
                webcamImageToPc.position.set(0,67,1.8);
                obj.add(webcamImageToPc);
                on=true;
            }
        }else{
            obj.remove(webcamImageToPc);
            on=false;
            index2=0;
        }
    }
    toIntersect.push(obj);
}


function animateLigth(geom,obj){
    ligth = false;    
    geom.interact = function () {
        if(!ligth) {
            for (var i = 1; i <= obj.length; i++) {
                //obj[i-1].pointLight.intensity=2.5;
                obj[i-1].pointLight.intensity=1.5;

            };
            ligth = true;
        }
        else {
                for (var i = 1; i <= obj.length; i++) {
                    obj[i-1].pointLight.intensity=0;
                };
            ligth = false;
        }
    }
    toIntersect.push(geom);
}
function waterAnimation1(tazza,hook){
    geom=tazza.children[0];
    close=false;
    angle=-Math.PI/2;
    geom.interact = function () {
        if(!close) {
        var movTween1 = new TWEEN.Tween(hook.rotation)
        .to({ x: angle },1000)
        .start();
        close=true;
        }
        else {
             var movTween1 = new TWEEN.Tween(hook.rotation)
            .to({ x: 0 },1000)
            .start();
            close = false;
        }
    }
    toIntersect.push(geom);
}

function waterAnimation2(obj){
    geom=obj.children[0];
    // WATER
    var water_material = new THREE.MeshPhongMaterial({
        color: '#658C98',
        specular: '#FFFFFF',
        transparent: true,
        opacity: 0.8,
        normalMap: THREE.ImageUtils.loadTexture("assets/images/"+ 'water_norm.jpg'),
        shininess: 200
    })
    water_material.normalMap.repeat.set(1, 2);
    water_material.normalMap.wrapS = THREE.RepeatWrapping;
    water_material.normalMap.wrapT = THREE.RepeatWrapping; 
    var geometry = new THREE.CylinderGeometry( 0.5, 0.02, 0.1, 32 );
    var water = new THREE.Mesh( geometry, water_material );
    water.position.set(-15,1,42.8);
    geom.interact = function () {
            scene.add(water);
            bathroom.play();
            var waterTweenUp = new TWEEN.Tween(water.scale);
            var waterTweenDown = new TWEEN.Tween(water.scale);
             waterTweenUp.to({y: 60,z:3,x:3}, 6000).start();
             waterTweenDown.to({y: 0.001,z:1,x:1}, 4000);
             waterTweenUp.chain(waterTweenDown);
    }
    toIntersect.push(geom);
}
function animateGas(gas){
    //count, radius, delta, h
    var fire1 = castFire(30,0.08,0.5,0.11);
    fire1.position.set(24.45,23.47,2.5);
    fire1.visible=true;

    var fire2 = castFire(30,0.12,0.5,0.11);
    fire2.position.set(24.43,24.83,2.5);
    fire2.visible=true;

    var fire3 = castFire(30,0.1,0.5,0.11);
    fire3.position.set(25.3,23.47,2.5);
    fire3.visible=true;

    var fire4 = castFire(30,0.1,0.5,0.11);
    fire4.position.set(25.3,24.82,2.5);
    fire4.visible=true;

    rf= 0.09;
    var alfa=0;


    fornelli=gas.mesh;
    on=false;
    //man2.open = false;

    fornelli.interact = function () {

        if(!on) {
            gas.add(fire1);
            gas.add(fire2);
            gas.add(fire3);
            gas.add(fire4);
            for (var i = 1; i <= 4; i++) {
                if(i===1){
                    sF=fire1;
                }
                  if(i===2){
                    sF=fire2;
                }
                  if(i===3){
                    sF=fire3;
                }  if(i===4){
                    sF=fire4;
                }   
                var counter = 1;
                var singleFire = sF.geometry.vertices;
          
            singleFire.forEach(function(v){
            alfa += 2/50;
                if(counter%2===0){
                  new TWEEN.Tween(v)
                  .to({x:(rf*1.1 * Math.cos(alfa*2* Math.PI)), y: (rf*1.3 * Math.sin(alfa*2* Math.PI))},200)
                  .repeat(Infinity)
                  .easing(TWEEN.Easing.Linear.None)
                  .yoyo(true)
                  .start();
                }
            counter++;
            });
              };
            on=true;
        }else{
            gas.remove(fire1);
            gas.remove(fire2);
            gas.remove(fire3);
            gas.remove(fire4);
            on=false;

        }

    }
    toIntersect.push(fornelli);
}

function animateCar(car){
    car2=car.mesh;
    drive=false;

    car2.interact = function () {
        if(!drive) {         
           scene.remove(car);
           camera.add(car);
           car.position.set(-8,-5.5,45.7);
           camera.position.set(0,0,0);
        }
    }
    toIntersect.push(car2);
}

function animatekill(man){
    android=man.mesh;
    kill=false;
    android.interact = function () {
        if(!kill) {
           sparo.play();
           scene.remove(man);
        }

    }
    toIntersect.push(android);
}

function animateDoor(porta,perno){

	toRotate=true;
    porta.open = false;
    var angle = -Math.PI/2;
    var angle2 = -Math.PI/4;

    porta.interact = function () {
        if(!porta.open) {
            var movTween1 = new TWEEN.Tween(porta.parent.rotation)
                .to({ z: angle }, 1000)
                .start();
            porta.open = true;
            door_close_sound.stop();
            door_open_sound.play();
        }
        else {
            var movTween1 = new TWEEN.Tween(porta.parent.rotation)
                .to({ z: 0 }, 1000)
                .start();
                door_open_sound.stop();
                door_close_sound.play();
            porta.open = false;
        }
        if(perno!=undefined){
             doorHandleOpenTween = new TWEEN.Tween(perno.rotation)
            .to({
                y: -0.5,
            }, 500)
            .easing(TWEEN.Easing.Cubic.Out)
            .repeat(1)
            .yoyo(true)
            .start();
        }
    }
    toIntersect.push(porta);
}

function animateWindow(finestra,finestra2,perno,x){
    toRotate=true;
    var flag=false;
    finestra.open = false;
    var angle = -Math.PI/2;
    var angle2 = -Math.PI/2;

    finestra.interact = function () {
        if(!finestra.open) {
            
                var movTween1 = new TWEEN.Tween(finestra.parent.rotation)
                .to({ z: angle }, 1000)
                .start();
                
                var movTween2 = new TWEEN.Tween(perno.parent.rotation)
                .to({ y: angle2 }, 1000)
                .start();
                
                var movTween3 = new TWEEN.Tween(finestra2.parent.rotation)
                .to({ z: -angle }, 1000)
                .start();
                
                finestra.open = true;
            
        }
        else {
            var movTween1 = new TWEEN.Tween(finestra.parent.rotation)
            .to({ z: 0 }, 1000)
            .start();

             var movTween1 = new TWEEN.Tween(finestra2.parent.rotation)
            .to({ z: 0 }, 1000)
            .start();
                 
            var movTween2 = new TWEEN.Tween(perno.parent.rotation)
            .to({ y: 0 }, 1000)
            .start();
          
            finestra.open = false;
        }
    }

    finestra2.interact = function () {
        if(!finestra.open) {
            
                var movTween1 = new TWEEN.Tween(finestra.parent.rotation)
                .to({ z: angle }, 1000)
                .start();
                
                var movTween2 = new TWEEN.Tween(perno.parent.rotation)
                .to({ y: angle2 }, 1000)
                .start();
                
                var movTween3 = new TWEEN.Tween(finestra2.parent.rotation)
                .to({ z: -angle }, 1000)
                .start();
                
                finestra.open = true;
            
        }
        else {
            var movTween1 = new TWEEN.Tween(finestra.parent.rotation)
            .to({ z: 0 }, 1000)
            .start();

             var movTween1 = new TWEEN.Tween(finestra2.parent.rotation)
            .to({ z: 0 }, 1000)
            .start();
                 
            var movTween2 = new TWEEN.Tween(perno.parent.rotation)
            .to({ y: 0 }, 1000)
            .start();
          
            finestra.open = false;
        }
    }
        //console.log(toIntersect);

    toIntersect.push(finestra);
    toIntersect.push(finestra2);

}

function animateMobile(geom,x){
	toRotate=true;
    geom.open = false;
    var angle = Math.PI/2;
    geom.interact = function () {
        if(!geom.open) {
        	if(x==1){
        		var movTween1 = new TWEEN.Tween(geom.parent.rotation)
                .to({ y: angle }, 1000)
                .start();
            	geom.open = true;
        	}
        	else{
        		var movTween1 = new TWEEN.Tween(geom.parent.rotation)
                .to({ y: -angle }, 1000)
                .start();
           		geom.open = true;
        	}
            
        }
        else {
            var movTween1 = new TWEEN.Tween(geom.parent.rotation)
                .to({ y: 0 }, 1000)
                .start();
            geom.open = false;
        }
    }
    toIntersect.push(geom);
}

function animateCucina(geom){

	toRotate=true;
    geom.open = false;
    var angle = Math.PI/2;
   
    geom.interact = function () {
        if(!geom.open) {
            var movTween1 = new TWEEN.Tween(geom.parent.rotation)
                .to({ y: angle }, 1000)
                .start();
            geom.open = true;
        }
        else {
            var movTween1 = new TWEEN.Tween(geom.parent.rotation)
                .to({ y: 0 }, 1000)
                .start();
            geom.open = false;
        }
    }
    toIntersect.push(geom);
}

var Sound = function(src, radius, volume, toUpdate, loop) {
    var audio = document.createElement('audio');
    var source = document.createElement('source');
    source.src = 'assets/sounds/' + src;
    audio.appendChild(source);
    this.position = new THREE.Vector3();
    audio.volume = volume;
    audio.loop = loop;
    this.play = function() {
        audio.play();
    }
    this.pause = function() {
        audio.pause();
    }
    this.stop = function() {
        audio.pause();
        audio.currentTime = 0;
    }
    this.updateVolume = function() {
        var distance = this.position.distanceTo((!FPenabled) ? camera.position : controls.getObject().position);
        if (distance <= radius) {
            audio.volume = volume * (1 - distance / radius);
        } else {
            audio.volume = 0;
        }
    }
}

var door_open_sound = new Sound(['door_open.mp3'], 0, 0.1, false);
var door_close_sound = new Sound(['door_close.mp3'], 0, 0.1, false);
var bathroom = new Sound(['bathroom_faucet.mp3'], 5, 0.2, true, false);
var sparo = new Sound(['Gun.wav'], 0, 0.1, false);