FROM nginx:1.27-alpine

# Copy the static site into nginx's default HTML directory.
COPY Levite.html /usr/share/nginx/html/Levite.html
COPY asset/ /usr/share/nginx/html/asset/

# Serve the site at "/".
RUN cp /usr/share/nginx/html/Levite.html /usr/share/nginx/html/index.html

EXPOSE 80

