import { useEffect, useRef } from "react";
import { loadGsap } from "../../lib/gsap";

export function useSectionReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      return;
    }

    let isDisposed = false;
    let cleanup = () => {};

    void loadGsap()
      .then(({ gsap }) => {
        if (isDisposed || !ref.current) {
          return;
        }

        const ctx = gsap.context(() => {
          const targets = ref.current?.querySelectorAll("[data-animate]");
          if (!targets?.length) {
            return;
          }

          gsap.fromTo(
            targets,
            {
              autoAlpha: 0,
              y: 48,
              scale: 0.98,
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.14,
              scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
                once: true,
              },
            },
          );
        }, ref);

        cleanup = () => ctx.revert();
      })
      .catch(() => {
        cleanup = () => {};
      });

    return () => {
      isDisposed = true;
      cleanup();
    };
  }, []);

  return ref;
}
