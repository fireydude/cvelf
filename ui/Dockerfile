FROM node:22-alpine AS build

WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build
COPY nginx.conf .

FROM nginx:alpine

COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=build /app/build .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]