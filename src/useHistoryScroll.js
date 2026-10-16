import { useEffect, useRef } from "react";

export const historyProgress = (scrollY, start, distance) => Math.max(0, Math.min(distance, scrollY - start));

export default function useHistoryScroll(language) {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const introRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    const intro = introRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!section || !window.ResizeObserver) return;
    let distance = 0;
    let start = 0;
    let request = 0;
    let disposed = false;

    const update = () => {
      request = 0;
      if (section.dataset.pinned !== "true") return;
      const progress = historyProgress(window.scrollY, start, distance);
      track.style.translate = `0 ${-progress}px`;
    };
    const scroll = () => { if (!request) request = window.requestAnimationFrame(update); };
    const reset = () => {
      delete section.dataset.pinned;
      section.style.removeProperty("--history-distance");
      track.style.removeProperty("translate");
    };
    const measure = () => {
      if (disposed) return;
      if (preference.matches) { reset(); return; }
      const header = document.querySelector(".site-header");
      const top = Math.ceil(header?.getBoundingClientRect().bottom ?? 88) + 16;
      const height = Math.floor(window.innerHeight - top - 20);
      section.style.setProperty("--history-top", `${top}px`);
      section.style.setProperty("--history-frame-height", `${height}px`);
      section.dataset.pinned = "true";
      // Keep every part readable on short screens and with enlarged text.
      const mobile = window.innerWidth <= 900;
      const padding = parseFloat(getComputedStyle(frame).paddingTop) + parseFloat(getComputedStyle(frame).paddingBottom);
      const available = height - padding;
      if (height < 320 || (mobile ? available - intro.offsetHeight - 24 < 150 : intro.offsetHeight > available)) {
        reset();
        return;
      }
      distance = Math.max(0, track.scrollHeight - viewport.clientHeight);
      if (!distance) { reset(); return; }
      section.style.setProperty("--history-distance", `${distance}px`);
      start = section.getBoundingClientRect().top + window.scrollY + 32 - top;
      update();
    };

    const observer = new ResizeObserver(measure);
    observer.observe(track);
    observer.observe(intro);
    // Earlier sections can change height as images load or text is translated.
    observer.observe(document.getElementById("inicio"));
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", measure);
    preference.addEventListener("change", measure);
    document.fonts?.ready.then(() => { if (!disposed) measure(); });
    measure();
    return () => {
      disposed = true;
      observer.disconnect();
      window.cancelAnimationFrame(request);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", measure);
      preference.removeEventListener("change", measure);
      reset();
      section.style.removeProperty("--history-top");
      section.style.removeProperty("--history-frame-height");
    };
  }, [language]);

  return { sectionRef, frameRef, introRef, viewportRef, trackRef };
}
