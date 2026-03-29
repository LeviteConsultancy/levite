/** Root `/` is proxied to the Levite route on the Workers preview host; all other paths use static assets. */
const ROOT_PROXY_URL = "https://levite.shine-e19.workers.dev/Levite";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "") {
      return fetch(ROOT_PROXY_URL);
    }

    return env.ASSETS.fetch(request);
  },
};
