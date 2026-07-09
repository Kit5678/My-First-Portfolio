document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  if (!nav) return;

  const indicator = nav.querySelector(".nav-indicator");
  const links = nav.querySelectorAll("a[href]");
  if (!indicator || links.length === 0) return;

  const currentPath = new URL(window.location.href).pathname.replace(/\/+$/, "");

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) return;

    let linkPath = "";
    try {
      linkPath = new URL(href, document.baseURI).pathname.replace(/\/+$/, "");
    } catch (_) {
      return;
    }

    const isHomeMatch =
      (currentPath === "" || currentPath === "/") && linkPath.endsWith("/index.html");

    if (linkPath === currentPath || isHomeMatch) {
      link.classList.add("active");
    }
  });

  const activeLink = nav.querySelector("a.active");

  function moveIndicator(el) {
    indicator.style.width = el.offsetWidth + "px";
    indicator.style.left = el.offsetLeft + "px";
    indicator.style.opacity = "1";
  }

  links.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      moveIndicator(e.target);
    });
  });

  nav.addEventListener("mouseleave", () => {
    if (activeLink) {
      moveIndicator(activeLink);
    } else {
      indicator.style.opacity = "0";
    }
  });

  if (activeLink) {
    moveIndicator(activeLink);
  }

  window.addEventListener("resize", () => {
    if (activeLink) moveIndicator(activeLink);
  });
});
