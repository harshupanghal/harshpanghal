import { useEffect, useRef } from "react";
import * as THREE from "three";

const Background = () => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const starsRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 600;

    // Optimized Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit for performance
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Star Field
    const starCount = 400; // Reduced for better performance
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 1200;
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.8,
      transparent: true,
      depthTest: false,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
    starsRef.current = stars;

    const clock = new THREE.Clock();

    // Animation Loop
    let animationFrameId;
    const animateStars = () => {
      animationFrameId = requestAnimationFrame(animateStars);

      const delta = clock.getDelta();
      if (starsRef.current) {
        starsRef.current.rotation.y += 0.0005;
        starsRef.current.rotation.x += 0.0002;

        const positions = starsRef.current.geometry.attributes.position.array;
        for (let i = 1; i < positions.length; i += 3) {
          positions[i] -= 15 * delta;
          if (positions[i] < -700) positions[i] = 700;
        }
        starsRef.current.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animateStars();

    // Resize Handling
    const handleResize = () => {
      if (rendererRef.current) {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      sceneRef.current = null;
      starsRef.current = null;
      rendererRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default Background;
