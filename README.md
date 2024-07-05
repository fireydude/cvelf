# CV Master
A web application for building a simple CV: [cvelf.co.uk](https://cvelf.co.uk).  The front end is a single page application built with React and the backend is a .NET API.  The app is hosted with docker compose.

 ## UI Deployment
 1. Build docker image for x64 linux `docker build . -t cv-elf:linux --platform linux/amd64` from route folder `cv-master``
 2. Login to azure CLI with container registry `az acr login --name cvelf`
 3. Tag docker image with ACR name `docker tag cv-elf:linux cvelf.azurecr.io/cv-elf:linux`

To test the the container locally use `docker run -p 3001:3000 -it --rm cv-elf:latest`where cv-elf:latest has been build with the `--platform` option.

## API Deployment
1. `docker build . -t cv-api:linux --platform linux/amd64`
2. `docker tag cv-api:linux cvelf.azurecr.io/cv-api:linux`
3. `docker push cvelf.azurecr.io/cv-api:linux`

Run locally `docker run -p 3001:8080 -it --rm cv-api`

## Next Steps
- Login with Google and persist the number of downloads for each user
- Google analytics or plausible alternative
- Use Stripe combined with Google pay to add subscriptions for a user
- Save different CVs and compare them to each other
- Advertise CV Elf on LinkedInn
- Import work experience from LinkedIn profile using a web scraper