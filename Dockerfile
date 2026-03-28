FROM nginx:1.27-alpine

COPY index.html Levite.html /usr/share/nginx/html/
COPY asset/ /usr/share/nginx/html/asset/

EXPOSE 80
