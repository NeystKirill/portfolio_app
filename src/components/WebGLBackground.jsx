import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function WebGLBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x020408, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 22);
    scene.fog = new THREE.FogExp2(0x020408, 0.022);

    // Particles
    const pCount = 1800;
    const pGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(pCount * 3);
    const colors = new Float32Array(pCount * 3);
    const cG = new THREE.Color(0x00ffa3);
    const cB = new THREE.Color(0x00aaff);
    const cW = new THREE.Color(0xffffff);
    for (let i = 0; i < pCount; i++) {
      positions[i*3]   = (Math.random() - .5) * 80;
      positions[i*3+1] = (Math.random() - .5) * 80;
      positions[i*3+2] = (Math.random() - .5) * 60;
      const t = Math.random();
      const c = t < .4 ? cG : t < .7 ? cB : cW;
      colors[i*3] = c.r; colors[i*3+1] = c.g; colors[i*3+2] = c.b;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.12, vertexColors: true, transparent: true, opacity: 0.6,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Grid
    const grid = new THREE.GridHelper(80, 36, 0x001122, 0x001122);
    grid.position.y = -14;
    grid.material.opacity = 0.35;
    grid.material.transparent = true;
    scene.add(grid);

    // Torus knot
    const tkGeo = new THREE.TorusKnotGeometry(4.2, 0.9, 160, 18, 2, 3);
    const tkMat = new THREE.MeshBasicMaterial({ color: 0x00ffa3, wireframe: true, transparent: true, opacity: 0.12 });
    const torus = new THREE.Mesh(tkGeo, tkMat);
    torus.position.set(10, 0, -6);
    scene.add(torus);

    // Icosahedron
    const sGeo = new THREE.IcosahedronGeometry(5.5, 2);
    const sMat = new THREE.MeshBasicMaterial({ color: 0x0099ff, wireframe: true, transparent: true, opacity: 0.08 });
    const sphere = new THREE.Mesh(sGeo, sMat);
    sphere.position.set(-11, 2, -4);
    scene.add(sphere);

    // Light beams
    for (let i = 0; i < 8; i++) {
      const pts = [
        new THREE.Vector3((Math.random()-.5)*60, -20, (Math.random()-.5)*30),
        new THREE.Vector3((Math.random()-.5)*20, 20, (Math.random()-.5)*10)
      ];
      const lGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const lMat = new THREE.LineBasicMaterial({
        color: i%2===0 ? 0x00ffa3 : 0x0099ff,
        transparent: true, opacity: .04 + Math.random()*.04
      });
      scene.add(new THREE.Line(lGeo, lMat));
    }

    let targetX = 0, targetY = 0;
    const onMove = e => {
      targetX = (e.clientX / window.innerWidth - .5) * 1.8;
      targetY = (e.clientY / window.innerHeight - .5) * -1.2;
    };
    window.addEventListener('mousemove', onMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    let t = 0, raf;
    function animate() {
      raf = requestAnimationFrame(animate);
      t += 0.005;
      torus.rotation.x = t * 0.4; torus.rotation.y = t * 0.28;
      sphere.rotation.x = t * 0.18; sphere.rotation.y = t * 0.32;
      particles.rotation.y = t * 0.018;
      particles.rotation.x = Math.sin(t * 0.1) * 0.04;
      camera.position.x += (targetX - camera.position.x) * 0.04;
      camera.position.y += (targetY - camera.position.y) * 0.04;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse at 30% 20%, #001a2e 0%, #020408 60%)'
      }}
    />
  );
}
