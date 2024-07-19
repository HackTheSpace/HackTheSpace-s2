import { useEffect } from "react";
import * as THREE from "three";
import { Power2, TweenMax } from "gsap";

const MainStage = () => {
  useEffect(() => {
    let renderer, scene, camera, particles;
    let clock = new THREE.Clock();
    let mouseX = 0;
    let mouseY = 0;
    let isMouseDown = true;
    let lastMousePos = { x: 0, y: 0 };
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const particleRotation = new THREE.Object3D();
    const centerVector = new THREE.Vector3(0, 0, 0);
    let previousTime = 0;

    const init = () => {
      //@https://github.com/mrdoob/three.js/blob/dev/src/extras/ImageUtils.js#L21
      THREE.ImageUtils.crossOrigin = "";

      // WebGL Renderer
      renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("3D-particle-effect-canvas"), // canvas
        alpha: true,
        antialias: true,
      });

      renderer.setSize(window.innerWidth, window.innerHeight);

      // Scene
      scene = new THREE.Scene();

      // Camera
      camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        10000
      );
      camera.position.set(-100, 0, 600);
      camera.lookAt(centerVector);
      scene.add(camera);

      // Add particle rotation
      scene.add(particleRotation);
      const geometryPR = new THREE.TetrahedronGeometry(2, 0);
      const materialPR = new THREE.MeshPhongMaterial({
        color: 0xffffff,
      });

      for (let i = 0; i < 300; i++) {
        const mesh = new THREE.Mesh(geometryPR, materialPR);
        mesh.position
          .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
          .normalize();
        mesh.position.multiplyScalar(90 + Math.random() * 700);
        mesh.rotation.set(
          Math.random() * 2,
          Math.random() * 2,
          Math.random() * 2
        );
        particleRotation.add(mesh);
      }

      const ambientLight = new THREE.AmbientLight(0x999999);
      scene.add(ambientLight);

      const lights = [];
      lights[0] = new THREE.DirectionalLight(0xffffff, 1);
      lights[0].position.set(1, 0, 0);
      lights[1] = new THREE.DirectionalLight(0x11e8bb, 1);
      lights[1].position.set(0.75, 1, 0.5);
      lights[2] = new THREE.DirectionalLight(0x8200c9, 1);
      lights[2].position.set(-0.75, -1, 0.5);
      scene.add(lights[0]);
      scene.add(lights[1]);
      scene.add(lights[2]);

      document.addEventListener("mousemove", onDocumentMouseMove, false);
      document.addEventListener("mousedown", onDocumentMouseDown, false);
      document.addEventListener("mouseup", onDocumentMouseUp, false);

      window.addEventListener("resize", onWindowResize, false);
    };

    const render = () => {
      requestAnimationFrame(render);

      const delta = clock.getDelta();
      const thickness = 40;

      if (typeof particles !== "undefined") {
        for (let i = 0, j = particles.geometry.vertices.length; i < j; i++) {
          const particle = particles.geometry.vertices[i];
          particle.x += (particle.destination.x - particle.x) * particle.speed;
          particle.y += (particle.destination.y - particle.y) * particle.speed;
          particle.z += (particle.destination.z - particle.z) * particle.speed;
        }

        if (delta - previousTime > thickness) {
          const index = Math.floor(
            Math.random() * particles.geometry.vertices.length
          );
          const particle1 = particles.geometry.vertices[index];
          const particle2 =
            particles.geometry.vertices[
              particles.geometry.vertices.length - index
            ];

          TweenMax.to(particle1, Math.random() * 2 + 1, {
            x: particle2.x,
            y: particle2.y,
            ease: Power2.easeInOut,
          });

          TweenMax.to(particle2, Math.random() * 2 + 1, {
            x: particle1.x,
            y: particle1.y,
            ease: Power2.easeInOut,
          });

          previousTime = delta;
        }

        particles.geometry.verticesNeedUpdate = true;
      }

      if (!isMouseDown) {
        camera.position.x += (0 - camera.position.x) * 0.06;
        camera.position.y += (0 - camera.position.y) * 0.06;
      }

      camera.position.x += (mouseX - camera.position.x) * 0.09;
      camera.position.y += (-mouseY - camera.position.y) * 0.09;
      camera.lookAt(centerVector);

      particleRotation.rotation.x += 0.0;
      particleRotation.rotation.y -= 0.004;

      renderer.render(scene, camera);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onDocumentMouseMove = (event) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;

      if (isMouseDown) {
        camera.position.x += (event.clientX - lastMousePos.x) / 100;
        camera.position.y -= (event.clientY - lastMousePos.y) / 100;
        camera.lookAt(centerVector);
        lastMousePos = { x: event.clientX, y: event.clientY };
      }
    };

    const onDocumentMouseDown = (event) => {
      isMouseDown = true;
      lastMousePos = { x: event.clientX, y: event.clientY };
    };

    const onDocumentMouseUp = () => {
      isMouseDown = false;
    };

    init();
    render();
  }, []);

  return (
    <div id="particles-js">
      <canvas id="3D-particle-effect-canvas" />
    </div>
  );
};

export default MainStage;
