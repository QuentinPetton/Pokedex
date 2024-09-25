/* DO NOT MODIFY THIS FILE UNLESS YOU NEED SOME SPECIFIC ROUTING LOGIC */

import Navigo from "navigo";

export const router = new Navigo("/");

export function initRouter(routes) {
  routes.forEach(({ path, handler, page }) => {
    // Add handler
    document.addEventListener(`navigate:${page}`, async (...args) => {
      if (handler) {
        await handler(...args);
      }
      router.updatePageLinks();
    });

    // Setup router
    router.on(path, (detail) => setPage(page, detail));

    // Setup 404
    router.notFound(() => {
      router.navigate("/");
    });
  });

  // For Production Mode
  router.addBeforeHook("/", (done, { queryString }) => {
    const [, redirectionUrl] = queryString.split("redirect=");
    if (! redirectionUrl) { return done(); }
    
    router.navigate(redirectionUrl);
    done();
  });

  router.resolve();
}

function setPage(page, detail) {
  // Remove previous page
  const routerElement = document.querySelector("[data-router]");
  routerElement.innerHTML = "";

  // Build next page
  const currentPage = document.querySelector(`[data-page=${page}]`);
  const currentPageClone = currentPage.content.cloneNode(true);
  routerElement.appendChild(currentPageClone);

  // Change route ID
  routerElement.id = `page-${page}`;

  // Trigger navigation custom event
  document.dispatchEvent(new CustomEvent(`navigate:${page}`, { detail }));
}
