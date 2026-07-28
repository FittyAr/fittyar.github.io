/* =============================================================================
   Site animations — GSAP + ScrollTrigger
   - Inicializa reveals (los .reveal del HTML)
   - Anima entrada del hero (eyebrow, título, terminal, subtítulo, acciones)
   - Stagger en grids de cards cuando entran al viewport
   - Topbar scroll effect
   - Active link highlight
   - Mobile nav toggle
   - Re-init seguro en View Transitions (astro:page-load / astro:after-swap)
   ============================================================================= */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Si JS funciona, aseguramos que las reveals arranquen ocultas.
// (Las reglas en global.css ya las ocultan; esto es defensa adicional.)
document.documentElement.classList.remove('no-js');

/** Snapshot de los triggers activos para poder matarlos entre navegaciones. */
let activeTriggers: ScrollTrigger[] = [];
/** Snapshot de tweens activos para poder matarlos entre navegaciones. */
let activeTweens: gsap.core.Tween[] = [];

/** Limpia todos los triggers/tweens y listeners globales del ciclo anterior. */
function cleanup() {
  activeTriggers.forEach((t) => t.kill());
  activeTriggers = [];
  activeTweens.forEach((t) => t.kill());
  activeTweens = [];
  // ScrollTrigger.matchMedia y globals los limpiamos al final.
  ScrollTrigger.getAll().forEach((t) => t.kill());
}

/* -----------------------------------------------------------------------------
   Reveals: cualquier elemento con .reveal aparece con fade-up al entrar al viewport.
   ----------------------------------------------------------------------------- */
function initReveals() {
  const reveals = document.querySelectorAll<HTMLElement>('.reveal:not([data-animated])');
  if (reveals.length === 0) return;

  // Si el browser no soporta IntersectionObserver, mostrar todo.
  if (typeof IntersectionObserver === 'undefined') {
    reveals.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  reveals.forEach((el) => {
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        el.classList.add('is-visible');
        el.setAttribute('data-animated', 'true');
      },
    });
    activeTriggers.push(trigger);
  });
}

/* -----------------------------------------------------------------------------
   Hero entrance: stagger de los elementos principales del hero.
   Solo se ejecuta en la primera carga de la página (no en cada navegación).
   ----------------------------------------------------------------------------- */
function initHeroEntrance() {
  const hero = document.querySelector<HTMLElement>('.hero');
  if (!hero) return;

  // Partes a animar dentro del hero
  const targets = [
    hero.querySelector('.hero-eyebrow'),
    hero.querySelector('.hero-title'),
    hero.querySelector('.hero-terminal'),
    hero.querySelector('.hero-subtitle'),
    hero.querySelector('.hero-actions'),
    hero.querySelector('.terminal'),
  ].filter((el): el is HTMLElement => !!el);

  if (targets.length === 0) return;

  const tween = gsap.fromTo(
    targets,
    {
      opacity: 0,
      y: 18,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.08,
      delay: 0.1,
    }
  );
  activeTweens.push(tween);
}

/* -----------------------------------------------------------------------------
   Grids de cards: stagger cuando el contenedor entra al viewport.
   ----------------------------------------------------------------------------- */
function initGridStagger() {
  const grids = document.querySelectorAll<HTMLElement>('.grid, .featured-grid, .stats, .timeline, .stack-group');
  if (grids.length === 0) return;

  grids.forEach((grid) => {
    const children = Array.from(grid.children).filter(
      (el): el is HTMLElement => el instanceof HTMLElement
    );
    if (children.length < 2) return;

    // Estado base
    gsap.set(children, { opacity: 0, y: 14 });

    const trigger = ScrollTrigger.create({
      trigger: grid,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        const tween = gsap.to(children, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: 'power2.out',
          stagger: 0.06,
        });
        activeTweens.push(tween);
      },
    });
    activeTriggers.push(trigger);
  });
}

/* -----------------------------------------------------------------------------
   Topbar scroll effect
   ----------------------------------------------------------------------------- */
function initTopbar() {
  const topbar = document.querySelector<HTMLElement>('.topbar');
  if (!topbar) return;

  const onScroll = () => {
    topbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* -----------------------------------------------------------------------------
   Active link highlight
   ----------------------------------------------------------------------------- */
function initActiveLinks() {
  const currentPath =
    (window.location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/');

  document.querySelectorAll<HTMLAnchorElement>('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || link.origin !== window.location.origin) return;
    const linkPath =
      new URL(href, window.location.href).pathname
        .replace(/\.html$/, '')
        .replace(/\/$/, '') || '/';
    link.classList.toggle('active', linkPath === currentPath);
  });
}

/* -----------------------------------------------------------------------------
   Mobile nav toggle
   ----------------------------------------------------------------------------- */
function initMobileNav() {
  const navToggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
  const nav = document.querySelector<HTMLElement>('.topbar');
  if (!navToggle || !nav) return;

  const onToggle = () => {
    const open = nav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(open));
  };
  navToggle.addEventListener('click', onToggle);

  // Cerrar al clickear un link
  const links = nav.querySelectorAll<HTMLAnchorElement>('.nav-links a');
  const onLinkClick = () => {
    nav.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };
  links.forEach((link) => link.addEventListener('click', onLinkClick));
}

/* -----------------------------------------------------------------------------
   Init principal
   ----------------------------------------------------------------------------- */
function initSite() {
  // Limpieza de cualquier estado anterior (importante en View Transitions)
  cleanup();

  initTopbar();
  initActiveLinks();
  initMobileNav();
  initReveals();
  initGridStagger();
  initHeroEntrance();

  // Refresca ScrollTrigger después de que el layout se haya estabilizado
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });
}

export { initSite, cleanup, gsap, ScrollTrigger };
