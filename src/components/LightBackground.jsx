import { useEffect, useRef } from "react";
import * as THREE from "three";

const LightModeBackground = () => {
  const mountRef = useRef(null);
  const starsRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene & Camera
    const scene = new THREE.Scene();
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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Light Mode Background Color
    scene.background = new THREE.Color("#F7F9FC"); // Soft Light Gray

    // Star Field
    const starCount = 200;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const colors = [
      new THREE.Color(0xffd700), // Gold
      new THREE.Color(0xff69b4), // Pink
      new THREE.Color(0xff4500), // Red-Orange
      new THREE.Color(0x00bfff), // Blue
      new THREE.Color(0xffffff), // White
    ];

    for (let i = 0; i < starCount; i++) {
      // Random Position
      const index = i * 3;
      starPositions[index] = (Math.random() - 0.5) * 1200;
      starPositions[index + 1] = (Math.random() - 0.5) * 1200;
      starPositions[index + 2] = (Math.random() - 0.5) * 1200;

      // Assign Random Color
      const color = colors[Math.floor(Math.random() * colors.length)];
      starColors[index] = color.r;
      starColors[index + 1] = color.g;
      starColors[index + 2] = color.b;
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );
    starGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(starColors, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      size: 1.8,
      transparent: true,
      opacity: 0.9,
      depthTest: false,
      vertexColors: true, // Enables per-point colors
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
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (rendererRef.current) {
          renderer.setSize(window.innerWidth, window.innerHeight);
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
        }
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    // Proper Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);

      if (rendererRef.current) {
        rendererRef.current.dispose(); // Dispose renderer to free GPU memory
      }

      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
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
      }}
    />
  );
};

export default LightModeBackground;
