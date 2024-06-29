# CV Master
A web application for customising your CV to specific jobs.

## How to use CV Master
1. Create a default CV using the forms provided
   - Header page with your current status, personal details and skills highlights
   - Work experience items
   - Education & Training
2. Use your default CV as a template for any more CVs that you would like to create.  You can download your CV in .docx format.
3. View all your CVs in a list and compare them to each other.  You will be able to see the changes which have been made in order to customise a CV to a specific role.

CV master will allow you to maintain a list of CVs for every possible situation.

## Further work
 - Download CV as .docx file
 - Dockerize the project
 - Host the website
 - Create a landing page with instructions about 'How it works', update favicon
 - Use AI ChatGPT API to rewrite work experience descriptions

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

## Branding
Potential product names
- Speedy CV, not used by anyone else domains are available
- Quick CV, not used by some domains are not available
- CV Elf, there is already a CV service call 'The CV Elf' which exists on twitter