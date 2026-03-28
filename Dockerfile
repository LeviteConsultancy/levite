FROM nginx:1.27-alpine

COPY index.html Levite.html site.webmanifest /usr/share/nginx/html/
COPY asset/ /usr/share/nginx/html/asset/

EXPOSE 80
