// Splash Screen Animation
document.addEventListener("DOMContentLoaded", function () {
  const loadingProgress = document.getElementById("loadingProgress");
  const splashScreen = document.getElementById("splashScreen");

  // Animate loading bar
  loadingProgress.style.width = "100%";

  // Hide splash screen after animation completes
  setTimeout(() => {
    splashScreen.style.opacity = "0";
    splashScreen.style.pointerEvents = "none";
    setTimeout(() => {
      splashScreen.style.display = "none";
    }, 500);
  }, 2000);

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // Dark mode toggle
  const toggle = document.getElementById("toggle");
  const html = document.querySelector("html");

  toggle.addEventListener("change", function () {
    if (this.checked) {
      html.classList.add("dark");
      html.classList.remove("light");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
    }
  });

  // Set initial dark mode state based on preference
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    toggle.checked = true;
    html.classList.add("dark");
    html.classList.remove("light");
  } else {
    toggle.checked = false;
    html.classList.add("light");
    html.classList.remove("dark");
  }

  // 3D Background Animation
  init3DBackground();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (!mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
        }
      }
    });
  });
});

// 3D Background with Three.js
function init3DBackground() {
  const container = document.getElementById("canvasContainer");
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Create particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particleCount = 1000;

  const posArray = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
  }

  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x3b82f6,
    transparent: true,
    opacity: 0.8,
  });

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  camera.position.z = 3;

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    particlesMesh.rotation.x += 0.0005;
    particlesMesh.rotation.y += 0.0005;

    renderer.render(scene, camera);
  }

  animate();

  // Handle window resize
  window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
  document.addEventListener("DOMContentLoaded", () => {
    const viewAllBtn = document.querySelector("a[href='#']");
    const modal = document.getElementById("certificateModal");
    const modalContent = modal.querySelector(".modal-content");
    const closeModal = document.getElementById("closeModal");

    viewAllBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.remove("hidden");
      setTimeout(() => {
        modalContent.classList.remove("scale-95", "opacity-0");
        modalContent.classList.add("scale-100", "opacity-100");
      }, 10);
    });

    closeModal.addEventListener("click", () => {
      modalContent.classList.remove("scale-100", "opacity-100");
      modalContent.classList.add("scale-95", "opacity-0");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 300);
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal.click();
    });
  });
document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splashScreen");
    const progress = document.getElementById("loadingProgress");

    // Tampilkan splash
    splash.classList.add("show");

    // Simulasi loading (2.5 detik)
    setTimeout(() => {
      progress.style.width = "100%";
    }, 100);

    // Setelah selesai loading, fade out splash
    setTimeout(() => {
      splash.classList.add("hide");
      splash.classList.remove("show");
    }, 2500);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openProjectModal");
    const modal = document.getElementById("projectModal");
    const modalContent = modal.querySelector(".modal-content");
    const closeBtn = document.getElementById("closeProjectModal");

    openBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
      document.body.classList.add("noscroll");
      setTimeout(() => {
        modalContent.classList.remove("scale-95", "opacity-0");
        modalContent.classList.add("scale-100", "opacity-100");
      }, 10);
    });

    closeBtn.addEventListener("click", () => {
      modalContent.classList.remove("scale-100", "opacity-100");
      modalContent.classList.add("scale-95", "opacity-0");
      setTimeout(() => {
        modal.classList.add("hidden");
        document.body.classList.remove("noscroll");
      }, 300);
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeBtn.click();
    });
  });

const galleryPhotos = {
  ayangi: {
    title: "Gallery",
    images: [
      "ayangi.jpg",
      "ayangi1.jpg",
      "ayangi2.jpg",
      "ayangi3.jpg",
      "ayangi4.jpg",
      "ayangi5.jpg",
      "ayangi6.jpg",
      // {
      //   type: "video",
      //   src: "assets/videos/urban-preview.mp4",
      //   poster: "assets/images/portfolio/ayangi/ayangi.jpg"
      // }
    ]
  },
  fani: {
    title: "Gallery",
    images: [
      "fani.jpg",
      "fani1.jpg",
      "fani2.jpg",
      "fani3.jpg",
      "fani4.jpg",
      "fani5.jpg",
    ]
  },
  dwinda: {
    title: "Gallery",
    images: [
      "dwinda.jpg",
      "dwinda1.jpg",
      "dwinda2.jpg",
      "dwinda3.jpg",
      "dwinda4.jpg",
      "dwinda5.jpg",
      "dwinda6.jpg",
      "dwinda7.jpg",
    ]
  },
  rayhan: {
    title: "Gallery",
    images: [
      "rayhan.jpg",
      "rayhan1.jpg",
    ]
  },
  jete: {
    title: "Gallery",
    images: [
      "jete.jpg",
      "jete2.jpg",
      "jete1.jpg",
    ]
  },
  lifia: {
    title: "Gallery",
    images: [
      "lifia1.jpg",
      "lifia2.jpg",
      "lifia3.jpg",
      "lifia4.jpg",
      "lifia5.jpg",
      "lifia6.jpg",
    ]
  }
};


  function openGallery(key) {
    const modal = document.getElementById("photoModal");
    const content = document.getElementById("modalGalleryContent");
    const title = document.getElementById("modalGalleryTitle");
    const modalContent = modal.querySelector(".modal-content");

    if (!galleryPhotos[key]) return;

    title.textContent = galleryPhotos[key].title;
    content.innerHTML = galleryPhotos[key].images.map(item => {
  if (typeof item === "string") {
    return `<img src="assets/images/portfolio/${item}" class="rounded shadow w-full max-h-[60vh] object-contain" alt="${key}">`;
  } else if (item.type === "video") {
    return `
      <video controls poster="${item.poster}" class="rounded shadow w-full max-h-[60vh] object-contain">
        <source src="${item.src}" type="video/mp4">
        Your browser does not support the video tag.
      </video>`;
  }
  return '';
}).join("");


    modal.classList.remove("hidden");
    document.body.classList.add("noscroll");
    setTimeout(() => {
      modalContent.classList.remove("scale-95", "opacity-0");
      modalContent.classList.add("scale-100", "opacity-100");
    }, 10);
  }

  document.getElementById("closePhotoModal").addEventListener("click", () => {
    const modal = document.getElementById("photoModal");
    const modalContent = modal.querySelector(".modal-content");
    modalContent.classList.remove("scale-100", "opacity-100");
    modalContent.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
      modal.classList.add("hidden");
      document.body.classList.remove("noscroll");
    }, 300);
  });

function openCertificateModal() {
    const modal = document.getElementById("certificateModal");
    const content = modal.querySelector(".modal-content");

    modal.classList.remove("hidden");
    document.body.classList.add("noscroll");

    setTimeout(() => {
      content.classList.remove("scale-95", "opacity-0");
      content.classList.add("scale-100", "opacity-100");
    }, 10);
  }

  function closeCertificateModal() {
    const modal = document.getElementById("certificateModal");
    const content = modal.querySelector(".modal-content");

    content.classList.remove("scale-100", "opacity-100");
    content.classList.add("scale-95", "opacity-0");

    setTimeout(() => {
      modal.classList.add("hidden");
      document.body.classList.remove("noscroll");
    }, 300);
  }

  document.getElementById("closeModal").addEventListener("click", closeCertificateModal);
