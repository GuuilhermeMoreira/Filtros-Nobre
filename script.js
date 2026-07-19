const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeNav() {
  if (!header || !nav || !toggle) return;
  nav.classList.remove("is-open");
  header.classList.remove("nav-active");
  document.body.classList.remove("nav-open");
  toggle.setAttribute("aria-expanded", "false");
}

if (header && nav && toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    header.classList.toggle("nav-active", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) closeNav();
  });

  window.addEventListener("scroll", setHeaderState, { passive: true });
  setHeaderState();
}
