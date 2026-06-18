import gsap from "gsap";

export function animateGradient(
  id: string = "gradient-target",
  c1: string = "#3610cc",
  c2: string = "#5c5ebd",
  c3: string = "#3610cc",
) {
  const el = document.getElementById(id);
  if (!el) return;

  // @ts-ignore set CSS custom properties
  gsap.to(el, {
    "--c1": c1,
    "--c2": c2,
    "--c3": c3,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
}
