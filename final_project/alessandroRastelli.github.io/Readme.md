**COMPUTATIONAL GRAPHICS - FINAL PROJECT**
================
Rastelli Alessandro - 418531
-----------------------

View the project [here] (http://alessandroRastelli.github.io).

Code organization
================
* [windowAndDoor.js] (scripts/windowAndDoor.js): contains functions to create doors and windows.
* [fpsAnimation.js] (scripts/fpsAnimation.js): is the code used to switch between trackball system and PointerLock.
* [Furniture.js] (scripts/Furniture.js): used to import all of the .obj and .mtl files added in the scene.
* [init.js] (scripts/init.js): initializes all the variables,import larcc model and creates the dwelling and takes care of the rendering.
* [light.js] (scripts/light.js): contains functions to create lamps and lighting system.
* [gui.js] (scripts/gui.js): contain graphical user interface of system.
* [Animations.js] (scripts/Animations.js): contains all the animation assignement functions.
* [ParticlesEffects.js] (scripts/ParticlesEffects.js): creates effects using particle system.
* [textureUtility.js] (scripts/textureUtility.js): contains functions for the creation of textured meshes.
* [wallFloor.js] (scripts/wallFloor.js): is where all the textured planes are created.
* [objectAnimation.js] (scripts/wallFloor.js): contains functions to animate some specific objects

Features and Graphic Techniques:
==================
* Bump map and normal map
* Textures
* Tween animations
* .obj and .obj/.mtl models import
* Skybox
* PointerLockControl
* FPSControl
* Object-Picking
* Particle System
* Dynamic video texture
* WebRTC WebCam
* Audio distance fade
* Sound effects

Animations:
==================
* Doors and handles: open/close (with sound effect)
* Windows and handles: open/close
* Television: turn it on/off and change tv channel (with sound fade)
* Cooker: light the fires
* Toilet flushing button: push it and stare at the flush (with sound effect)
* Computer monitor: Windows XP startup + webcam (with sound fade)
* Light switches: switch up/down and make lamps light on/off
* Car : drive the car
* AndroidGame: plays with the Android characters (with sound effect)