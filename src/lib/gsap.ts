type GsapLike = {
  context: (
    callback: () => void,
    scope?: Element | React.RefObject<Element | null> | null,
  ) => {
    revert: () => void;
  };
  fromTo: (...args: unknown[]) => unknown;
  to: (...args: unknown[]) => unknown;
  registerPlugin: (...plugins: unknown[]) => void;
};

type ScrollTriggerLike = unknown;

type GsapBundle = {
  gsap: GsapLike;
  ScrollTrigger: ScrollTriggerLike;
};

declare global {
  interface Window {
    gsap?: GsapLike;
    ScrollTrigger?: ScrollTriggerLike;
    __viveGsapPromise?: Promise<GsapBundle>;
  }
}

const GSAP_SCRIPT = "https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js";
const SCROLL_TRIGGER_SCRIPT =
  "https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js";

function appendScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[data-gsap-src="${src}"]`);
    if (existing instanceof HTMLScriptElement) {
      if (existing.dataset.loaded === "true") {
        resolve();
        return;
      }

      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error(`Failed to load ${src}`)),
        {
          once: true,
        },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.gsapSrc = src;
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true },
    );
    script.addEventListener(
      "error",
      () => reject(new Error(`Failed to load ${src}`)),
      {
        once: true,
      },
    );
    document.head.appendChild(script);
  });
}

export async function loadGsap(): Promise<GsapBundle> {
  if (typeof window === "undefined") {
    throw new Error("GSAP can only load in the browser");
  }

  if (window.gsap && window.ScrollTrigger) {
    return { gsap: window.gsap, ScrollTrigger: window.ScrollTrigger };
  }

  if (!window.__viveGsapPromise) {
    window.__viveGsapPromise = (async () => {
      await appendScript(GSAP_SCRIPT);
      await appendScript(SCROLL_TRIGGER_SCRIPT);

      if (!window.gsap || !window.ScrollTrigger) {
        throw new Error("GSAP scripts loaded but globals were unavailable");
      }

      window.gsap.registerPlugin(window.ScrollTrigger);

      return { gsap: window.gsap, ScrollTrigger: window.ScrollTrigger };
    })();
  }

  return window.__viveGsapPromise;
}
