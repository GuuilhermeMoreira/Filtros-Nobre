import { useEffect } from "react";

const selector = [
  ".catalog-intro > a",
  ".product-section > .section__header",
  ".product-grid > article",
  ".resale-callout",
  ".private-label-showcase__copy",
  ".private-label-showcase__catalog",
  ".process > .section__header",
  ".process__steps > article",
  ".section--split > *",
  ".company-history__milestone",
  ".quality-principles__layout > h2",
  ".quality-principles__item",
  ".contact > *",
  ".product-showcase__layout > *",
  ".footer__main > *",
  ".footer__signature",
  ".footer__bottom",
].join(",");

export function observeScrollReveals(root = document, viewport = window) {
  const preference = viewport.matchMedia("(prefers-reduced-motion: reduce)");
  if (preference.matches || !viewport.IntersectionObserver) return;

  const elements = [...root.querySelectorAll(selector)];
  const reveal = element => {
    if (element.dataset.reveal !== "pending") return;
    element.dataset.reveal = "visible";
    observer.unobserve(element);
  };
  const observer = new viewport.IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) reveal(entry.target); });
  }, { threshold: .01, rootMargin: "0px 0px -32px 0px" });

  elements.forEach(element => {
    // Keep the initial screen and restored scroll position immediately readable.
    if (element.getBoundingClientRect().top < viewport.innerHeight) return;
    const index = [...element.parentElement.children].indexOf(element);
    element.style.setProperty("--reveal-delay", `${Math.min(index * 65, 130)}ms`);
    element.dataset.reveal = "pending";
    observer.observe(element);
  });

  const clear = element => {
    delete element.dataset.reveal;
    element.style.removeProperty("--reveal-delay");
  };
  const finish = event => {
    if (event.animationName === "scroll-reveal") clear(event.target);
  };
  const focus = event => {
    const element = event.target.closest('[data-reveal="pending"]');
    if (element) {
      observer.unobserve(element);
      clear(element);
    }
  };
  const reduce = () => {
    if (!preference.matches) return;
    observer.disconnect();
    elements.forEach(clear);
  };
  root.addEventListener("animationend", finish);
  root.addEventListener("focusin", focus);
  preference.addEventListener("change", reduce);

  return () => {
    observer.disconnect();
    elements.forEach(clear);
    root.removeEventListener("animationend", finish);
    root.removeEventListener("focusin", focus);
    preference.removeEventListener("change", reduce);
  };
}

export default function useScrollReveal() {
  useEffect(() => observeScrollReveals(), []);
}
