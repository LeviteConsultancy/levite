export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Rewrite root → /Levite
    if (url.pathname === "/" || url.pathname === "") {
      url.pathname = "/Levite";
    }

    let res = await env.ASSETS.fetch(new Request(url.toString(), request));

    // Static assets use `Levite.html` → `/Levite.html`; if `/Levite` misses, serve that file.
    if (res.status === 404 && url.pathname === "/Levite") {
      url.pathname = "/Levite.html";
      res = await env.ASSETS.fetch(new Request(url.toString(), request));
    }

    return res;
  },
};
