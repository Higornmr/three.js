const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshLambertMaterial({
        color: 0x368ed1
    })
);

cube.position.x = 1;
cube.position.y = 1;
cube.castShadow = true;
scene.add(cube);

// PISO -------------

const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, side: THREE.DoubleSide
    })
);
floor.rotation.x = THREE.MathUtils.degToRad(-90);
floor.receiveShadow = true;
scene.add(floor);

// SOMBRA 
const shadowLight = new THREE.PointLight(
    0xffffff, 2 , 60
);
shadowLight.position.y = 4;
shadowLight.castShadow = true;
scene.add(shadowLight);

x3.add(shadowLight, { helper: { visible:false } });
x3.add(cube);

// RENDER -------------------
renderer.setAnimationLoop(() => {
    x3.tick();

    x3.fps(() => {
        renderer.render(scene, camera);
    });
});
