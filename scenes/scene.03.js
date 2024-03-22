const path = new THREE.Shape();

path.moveTo(0.3, 1.5);
path.quadraticCurveTo(0.3, 2.2, 0.9, 2.2);
path.quadraticCurveTo(1.3, 2.2, 1.4, 1.7);
path.quadraticCurveTo(1.5, 2.2, 1.9, 2.2);
path.quadraticCurveTo(2.5, 2.2, 2.5, 1.5);
path.quadraticCurveTo(2.5, 1.1, 1.4, 0.3);
path.quadraticCurveTo(0.3, 1.1, 0.3, 1.5);

const geometry = new THREE.ExtrudeBufferGeometry(
    path, {
        depth: 0.5,
        bevelEnabled: true,
        bevelSize: 0.1,
        bevelThickness: 0.1
    }
);

const material = new THREE.MeshLambertMaterial(
    { 
        color: 0xeb3452,
        side: THREE.DoubleSide
    }
);


const desafio = new THREE.Shape();

desafio.moveTo(0.1, 0.1);
desafio.quadraticCurveTo(1.3, 1.3, 2.7, 2.4);
desafio.quadraticCurveTo(1.3, 1.3, 0.1, 0.1);

const geometryArrow = new THREE.ExtrudeBufferGeometry(
    desafio, {
        depth: 0.2,
        bevelEnabled: true,
        bevelSize: 0.8,
        bevelThickness: 0.1
    }
);

const materialArrow = new THREE.MeshLambertMaterial(
    { 
        color: 0xffffff,
        side: THREE.DoubleSide
    }
);

const draw = new THREE.Mesh(geometry, material);
const arrow = new THREE.Mesh(geometryArrow, materialArrow);

scene.add(draw);
scene.add(arrow);

arrow.position.z = 0.16;
x3.add(arrow, { label: 'arrow'});

renderer.setAnimationLoop(() => {
    x3.tick();

    x3.fps(() => {
        renderer.render(scene, camera);
    });
});
