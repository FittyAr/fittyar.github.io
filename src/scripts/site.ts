/* =============================================================================
   Comportamiento de cliente del sitio (sin dependencias)
   - Topbar scroll effect
   - Active link highlight
   - Mobile nav toggle
   Las animaciones de entrada son CSS + un IntersectionObserver inline en
   Layout.astro, para que no dependan de que cargue este módulo.
   Se re-inicializa en cada `astro:page-load` (View Transitions).
   ============================================================================= */

/** El listener de scroll es global (window): se registra una sola vez. */
let scrollBound = false;

function updateTopbar() {
  document.querySelector<HTMLElement>('.topbar')?.classList.toggle('scrolled', window.scrollY > 20);
}

function initTopbar() {
  updateTopbar();
  if (scrollBound) return;
  window.addEventListener('scroll', updateTopbar, { passive: true });
  scrollBound = true;
}

function normalizePath(pathname: string): string {
  return pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
}

function initActiveLinks() {
  const currentPath = normalizePath(window.location.pathname);

  document.querySelectorAll<HTMLAnchorElement>('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || link.origin !== window.location.origin) return;
    const linkPath = normalizePath(new URL(href, window.location.href).pathname);
    link.classList.toggle('active', linkPath === currentPath);
  });
}

function initMobileNav() {
  const navToggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
  const nav = document.querySelector<HTMLElement>('.topbar');
  if (!navToggle || !nav) return;

  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  // Cerrar al clickear un link
  nav.querySelectorAll<HTMLAnchorElement>('.nav-links a').forEach((link) =>
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }),
  );
}

export function initSite() {
  initTopbar();
  initActiveLinks();
  initMobileNav();
}
