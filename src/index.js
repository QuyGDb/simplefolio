document.addEventListener("DOMContentLoaded", () => {
  // --- Active Nav Highlight on Scroll ---
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navItems.forEach((item) => item.classList.remove("active"));
          const active = document.querySelector(`.nav-item[href="#${entry.target.id}"]`);
          if (active) active.classList.add("active");
        }
      });
    },
    { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));

  // --- Initialize ScrollReveal ---
  if (typeof ScrollReveal !== "undefined") {
    const defaultProps = {
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      distance: "30px",
      duration: 1000,
      desktop: true,
      mobile: true,
    };

    const targetElements = [
      {
        element: ".section-heading",
        animation: {
          delay: 300,
          distance: "0px",
          origin: "bottom",
        },
      },
      {
        element: ".hero-title-new",
        animation: {
          delay: 500,
          origin: window.innerWidth > 768 ? "left" : "bottom",
        },
      },
      {
        element: ".hero-cta",
        animation: {
          delay: 1000,
          origin: window.innerWidth > 768 ? "left" : "bottom",
        },
      },
      {
        element: ".about-info",
        animation: {
          delay: 1000,
          origin: window.innerWidth > 768 ? "left" : "bottom",
        },
      },
      {
        element: ".project-card",
        animation: {
          delay: 500,
          origin: "bottom",
        },
      },
    ];

    ScrollReveal({ reset: false });

    targetElements.forEach(({ element, animation }) => {
      ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
    });
  }

  // --- Initialize Tilt Effect ---
  if (typeof VanillaTilt !== "undefined") {
    const elements = document.querySelectorAll(".js-tilt");
    VanillaTilt.init(elements);
  }
});
