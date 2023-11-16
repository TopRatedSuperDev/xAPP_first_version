#Library

###1 PRINT_LIST(input) ###
变量 a = [1,2,3,"Hello","World", [1,2,3,[5,6,7]] ] 
定义函数 add_list_to_string(input)

  变量 result = "["
  变量 result = result + NUMBER_TO_STRING(input/0)
  
  循环从 i = 1 到 LEN(input) 那么 
  
    绝对如果 IS_NUM(input/i)  那么 变量 result = result + "," + NUMBER_TO_STRING(input/i)
    绝对如果 IS_STR(input/i)  那么 变量 result = result + "," + "'" + (input/i) + "'"
    绝对如果 IS_LIST(input/i) 那么 变量 result = result + "," + stringfy_list(input/i)
  结束
  
  变量 result = result + "]"
  函数返回 result 
结束


定义函数 stringfy_list(input)
  
  变量 result = ""
  
  绝对如果 IS_LIST(input) 那么 变量 result = add_list_to_string(input) 其他情况 函数返回 input

  函数返回 result
 
结束


定义函数 PRINT_LIST(input)
  PRINT(stringfy_list(input))
结束

PRINT_LIST(a)


###1 PRINT Three js ###

变量 three_js_code = "import * as THREE from 'https://threejs.org/build/three.module.js';  "
变量 three_js_code = three_js_code + " var scene = new THREE.Scene(); "
变量 three_js_code = three_js_code + " var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); "
变量 three_js_code = three_js_code + " var renderer = new THREE.WebGLRenderer();  "
变量 three_js_code = three_js_code + " renderer.setSize( window.innerWidth, window.innerHeight );   "
变量 three_js_code = three_js_code + " document.getElementById('root').prepend(renderer.domElement);   "
变量 three_js_code = three_js_code + " var geometry = new THREE.BoxGeometry( 1, 1, 1 );  "
变量 three_js_code = three_js_code + " var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );  "
变量 three_js_code = three_js_code + " var cube = new THREE.Mesh( geometry, material ); "
变量 three_js_code = three_js_code + "  scene.add( cube );   camera.position.z = 5;  "
变量 three_js_code = three_js_code + " var animate = function () {   "
变量 three_js_code = three_js_code + " requestAnimationFrame( animate );   cube.rotation.x += 0.01;   cube.rotation.y += 0.01;   renderer.render( scene, camera );   "
变量 three_js_code = three_js_code + " };   "
变量 three_js_code = three_js_code + " var onWindowResize = function () { "
变量 three_js_code = three_js_code + " camera.aspect = window.innerWidth / window.innerHeight;   camera.updateProjectionMatrix();   renderer.setSize( window.innerWidth, window.innerHeight );  "
变量 three_js_code = three_js_code + " };  "
变量 three_js_code = three_js_code + " window.addEventListener('resize', onWindowResize, false);  "
变量 three_js_code = three_js_code + " animate();  "
PRINT(three_js_code)
PRINT_RET(three_js_code)

PRINT_RET( "import * as THREE from 'https://threejs.org/build/three.module.js';   var scene = new THREE.Scene();   var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );     var renderer = new THREE.WebGLRenderer();     renderer.setSize( window.innerWidth, window.innerHeight );     document.getElementById('root').prepend(renderer.domElement);   var geometry = new THREE.BoxGeometry( 1, 1, 1 );  var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );   var cube = new THREE.Mesh( geometry, material );   scene.add( cube );   camera.position.z = 5;   var animate = function () {  requestAnimationFrame( animate );   cube.rotation.x += 0.01;   cube.rotation.y += 0.01;   renderer.render( scene, camera );   };  var onWindowResize = function () {  camera.aspect = window.innerWidth / window.innerHeight;   camera.updateProjectionMatrix();   renderer.setSize( window.innerWidth, window.innerHeight );  };  window.addEventListener('resize', onWindowResize, false);  animate(); ")




变量 three_js_code = "import * as THREE from 'https://threejs.org/build/three.module.js';     var container;  var stats;  var camera;  var scene;  var renderer;  var mesh;  camera = new THREE.PerspectiveCamera( 27, window.innerWidth / window.innerHeight, 1, 3500 ); camera.position.z = 2750; scene = new THREE.Scene(); scene.background = new THREE.Color( 0x050505 ); scene.fog = new THREE.Fog( 0x050505, 2000, 3500 ); scene.add( new THREE.AmbientLight( 0x444444 ) ); const light1 = new THREE.DirectionalLight( 0xffffff, 0.5 ); light1.position.set( 1, 1, 1 ); scene.add( light1 ); const light2 = new THREE.DirectionalLight( 0xffffff, 1.5 ); light2.position.set( 0, - 1, 0 ); scene.add( light2 ); const triangles = 160000; const geometry = new THREE.BufferGeometry(); const positions = []; const normals = []; const colors = []; const color = new THREE.Color(); const n = 800, n2 = n / 2; const d = 12, d2 = d / 2; const pA = new THREE.Vector3(); const pB = new THREE.Vector3(); const pC = new THREE.Vector3(); const cb = new THREE.Vector3(); const ab = new THREE.Vector3(); for ( let i = 0;  i < triangles;  i ++ ) { const x = Math.random() * n - n2; const y = Math.random() * n - n2; const z = Math.random() * n - n2; const ax = x + Math.random() * d - d2; const ay = y + Math.random() * d - d2; const az = z + Math.random() * d - d2; const bx = x + Math.random() * d - d2; const by = y + Math.random() * d - d2; const bz = z + Math.random() * d - d2; const cx = x + Math.random() * d - d2; const cy = y + Math.random() * d - d2; const cz = z + Math.random() * d - d2; positions.push( ax, ay, az ); positions.push( bx, by, bz ); positions.push( cx, cy, cz ); pA.set( ax, ay, az ); pB.set( bx, by, bz ); pC.set( cx, cy, cz ); cb.subVectors( pC, pB ); ab.subVectors( pA, pB ); cb.cross( ab ); cb.normalize(); const nx = cb.x; const ny = cb.y; const nz = cb.z; normals.push( nx, ny, nz ); normals.push( nx, ny, nz ); normals.push( nx, ny, nz ); const vx = ( x / n ) + 0.5; const vy = ( y / n ) + 0.5; const vz = ( z / n ) + 0.5; color.setRGB( vx, vy, vz ); const alpha = Math.random(); colors.push( color.r, color.g, color.b, alpha ); colors.push( color.r, color.g, color.b, alpha ); colors.push( color.r, color.g, color.b, alpha ); } function disposeArray() { this.array = null; } geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ).onUpload( disposeArray ) ); geometry.setAttribute( 'normal', new THREE.Float32BufferAttribute( normals, 3 ).onUpload( disposeArray ) ); geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 4 ).onUpload( disposeArray ) ); geometry.computeBoundingSphere(); const material = new THREE.MeshPhongMaterial( {color: 0xaaaaaa, specular: 0xffffff, shininess: 250, side: THREE.DoubleSide, vertexColors: true, transparent: true} ); mesh = new THREE.Mesh( geometry, material ); scene.add( mesh ); renderer = new THREE.WebGLRenderer(); renderer.setPixelRatio( window.devicePixelRatio ); renderer.setSize( window.innerWidth, window.innerHeight ); renderer.outputEncoding = THREE.sRGBEncoding;       document.getElementById('root').prepend(renderer.domElement);     window.addEventListener( 'resize', onWindowResize ); function onWindowResize() { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize( window.innerWidth, window.innerHeight ); } function animate() { requestAnimationFrame( animate ); render(); stats.update(); } function render() { const time = Date.now() * 0.001; mesh.rotation.x = time * 0.25; mesh.rotation.y = time * 0.5; renderer.render( scene, camera ); }    animate(); "


PRINT(three_js_code)
PRINT_RET(three_js_code)


变量 three_js_code = "import * as THREE from 'https://threejs.org/build/three.module.js';     "
变量 three_js_code = three_js_code +"var container;  "
变量 three_js_code = three_js_code +"var camera;  "
变量 three_js_code = three_js_code +"var scene;  "
变量 three_js_code = three_js_code +"var renderer;  "
变量 three_js_code = three_js_code +"var mesh;  "
变量 three_js_code = three_js_code +"camera = new THREE.PerspectiveCamera( 27, window.innerWidth / window.innerHeight, 1, 3500 ); "
变量 three_js_code = three_js_code +"camera.position.z = 2750; scene = new THREE.Scene(); scene.background = new THREE.Color( 0x050505 ); "
变量 three_js_code = three_js_code +"scene.fog = new THREE.Fog( 0x050505, 2000, 3500 ); "
变量 three_js_code = three_js_code +"scene.add( new THREE.AmbientLight( 0x444444 ) );"
变量 three_js_code = three_js_code +" const light1 = new THREE.DirectionalLight( 0xffffff, 0.5 ); "
变量 three_js_code = three_js_code +" light1.position.set( 1, 1, 1 ); "
变量 three_js_code = three_js_code +" scene.add( light1 ); "
变量 three_js_code = three_js_code +" const light2 = new THREE.DirectionalLight( 0xffffff, 1.5 ); "
变量 three_js_code = three_js_code +" light2.position.set( 0, - 1, 0 ); "
变量 three_js_code = three_js_code +" scene.add( light2 ); "
变量 three_js_code = three_js_code +" const triangles = 160000; "
变量 three_js_code = three_js_code +" const geometry = new THREE.BufferGeometry(); "
变量 three_js_code = three_js_code +" const positions = []; const normals = []; const colors = []; "
变量 three_js_code = three_js_code +" const color = new THREE.Color(); "
变量 three_js_code = three_js_code +" const n = 800, n2 = n / 2; "
变量 three_js_code = three_js_code +" const d = 12, d2 = d / 2; "
变量 three_js_code = three_js_code +" const pA = new THREE.Vector3(); const pB = new THREE.Vector3(); const pC = new THREE.Vector3(); "
变量 three_js_code = three_js_code +" const cb = new THREE.Vector3(); const ab = new THREE.Vector3(); "
变量 three_js_code = three_js_code +" for ( let i = 0;  i < triangles;  i ++ ) "
变量 three_js_code = three_js_code +" { const x = Math.random() * n - n2; "
变量 three_js_code = three_js_code +" const y = Math.random() * n - n2; "
变量 three_js_code = three_js_code +" const z = Math.random() * n - n2; "
变量 three_js_code = three_js_code +" const ax = x + Math.random() * d - d2; "
变量 three_js_code = three_js_code +" const ay = y + Math.random() * d - d2; "
变量 three_js_code = three_js_code +" const az = z + Math.random() * d - d2; "
变量 three_js_code = three_js_code +" const bx = x + Math.random() * d - d2; "
变量 three_js_code = three_js_code +" const by = y + Math.random() * d - d2; "
变量 three_js_code = three_js_code +" const bz = z + Math.random() * d - d2; "
变量 three_js_code = three_js_code +" const cx = x + Math.random() * d - d2; "
变量 three_js_code = three_js_code +" const cy = y + Math.random() * d - d2; "
变量 three_js_code = three_js_code +" const cz = z + Math.random() * d - d2; "
变量 three_js_code = three_js_code +" positions.push( ax, ay, az ); "
变量 three_js_code = three_js_code +" positions.push( bx, by, bz ); "
变量 three_js_code = three_js_code +" positions.push( cx, cy, cz ); "
变量 three_js_code = three_js_code +" pA.set( ax, ay, az ); pB.set( bx, by, bz ); pC.set( cx, cy, cz ); "
变量 three_js_code = three_js_code +" cb.subVectors( pC, pB ); "
变量 three_js_code = three_js_code +" ab.subVectors( pA, pB ); "
变量 three_js_code = three_js_code +" cb.cross( ab ); cb.normalize(); "
变量 three_js_code = three_js_code +" const nx = cb.x; const ny = cb.y; const nz = cb.z; "
变量 three_js_code = three_js_code +" normals.push( nx, ny, nz ); "
变量 three_js_code = three_js_code +" normals.push( nx, ny, nz ); "
变量 three_js_code = three_js_code +" normals.push( nx, ny, nz ); "
变量 three_js_code = three_js_code +" const vx = ( x / n ) + 0.5; "
变量 three_js_code = three_js_code +" const vy = ( y / n ) + 0.5; "
变量 three_js_code = three_js_code +" const vz = ( z / n ) + 0.5; "
变量 three_js_code = three_js_code +" color.setRGB( vx, vy, vz ); "
变量 three_js_code = three_js_code +" const alpha = Math.random(); "
变量 three_js_code = three_js_code +" colors.push( color.r, color.g, color.b, alpha ); "
变量 three_js_code = three_js_code +" colors.push( color.r, color.g, color.b, alpha ); "
变量 three_js_code = three_js_code +" colors.push( color.r, color.g, color.b, alpha ); } "
 
变量 three_js_code = three_js_code +" function disposeArray() { this.array = null; } "
变量 three_js_code = three_js_code +" geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ).onUpload( disposeArray ) ); "
变量 three_js_code = three_js_code +" geometry.setAttribute( 'normal', new THREE.Float32BufferAttribute( normals, 3 ).onUpload( disposeArray ) ); "
变量 three_js_code = three_js_code +" geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 4 ).onUpload( disposeArray ) ); "
变量 three_js_code = three_js_code +" geometry.computeBoundingSphere(); "
变量 three_js_code = three_js_code +" const material = new THREE.MeshPhongMaterial( {color: 0xaaaaaa, specular: 0xffffff, shininess: 250, side: THREE.DoubleSide, vertexColors: true, transparent: true} ); "
变量 three_js_code = three_js_code +" mesh = new THREE.Mesh( geometry, material ); "
变量 three_js_code = three_js_code +" scene.add( mesh ); "
变量 three_js_code = three_js_code +" renderer = new THREE.WebGLRenderer(); "
变量 three_js_code = three_js_code +" renderer.setPixelRatio( window.devicePixelRatio ); "
变量 three_js_code = three_js_code +" renderer.setSize( window.innerWidth, window.innerHeight ); "
变量 three_js_code = three_js_code +" renderer.outputEncoding = THREE.sRGBEncoding;       "
变量 three_js_code = three_js_code +" document.getElementById('root').prepend(renderer.domElement);     "
变量 three_js_code = three_js_code +" window.addEventListener( 'resize', onWindowResize ); "
变量 three_js_code = three_js_code +" function onWindowResize() { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize( window.innerWidth, window.innerHeight ); } "
变量 three_js_code = three_js_code +" function animate() { requestAnimationFrame( animate ); render(); } "
变量 three_js_code = three_js_code +" function render() { const time = Date.now() * 0.001; mesh.rotation.x = time * 0.25; mesh.rotation.y = time * 0.5; renderer.render( scene, camera ); }    "
变量 three_js_code = three_js_code +" animate(); "


PRINT(three_js_code)
PRINT_RET(three_js_code)
