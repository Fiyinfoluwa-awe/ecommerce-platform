 # E-commerce Application for CI/CD Pipeline

## Automated Pipeline for an E-commerce Platform


*Project Overview*

This project is about developing and maintaining an e-commerce platform. This platform has two primary components;

* ***E-commerce API:*** Backend service handling product listing, user accounts, and order processing.

* ***E-commerce Frontend:*** A web application for users to browse products, manage their account, and place orders.


The goal is to automate the integration and deployment process for both components using Github Actions, ensuring continuous delivery and integration.

*Project Setup*
---

Created a Git repository named *'ecommerce-platform'*
Inside the repository, created two directories `api` for the backend and `webapp` for frontend.

![alt text](<step 2 created api and webapp-1.png>)

![alt text](<step 2b created api and webapp-1.png>)

 *Initializing Github Actions*
---

Initialized my git repository to add my project structure. 
Created my `.github/worflows` directory in my repo for Github Actions.


![alt text](<step 3a created github workflows .png>)

![alt text](<github workflows.png>)


*Backend API Setup*
---

In the `api` directory, I set up a Node.js/Express application that handles the basic e-commerce operations.

![alt text](<step 3 created github workflows and initialize npm-1.png>)


![alt text](<step 3b created github workflows and initialize npm-1.png>)

![alt text](<step 4 installed express mongoose dontenv.png>)

Created the products listings, user accounts and order processing

![alt text](<step 7 created order.js.png>)

Implemented unit tests for my Api 


*Frontend Web Application Setup (webapp) Setup*
---

In the `webapp` directory , created a simple React application that interact with the backend API.
 The frontend has the basic features like product listing, user login, and order placement.

*Continous Integration Workflow*
---

Wrote the Github Actions workflows for the backend and frontend that:

* Install dependencies 
* Runs tests
* Builds the application

*Docker Integration*
---

Created Dockerfiles for both the backend and frontend.
Modified my github workflows to build Docker images.


*Continous Integration*
---

Configure my workflows to deploy updates automatically to the cloud environment when changes are pushed to the main branch.

*Performance and Security*
---

Implemented caching in my workflows to optimitize build times.
Used Github secrets to secure all my security data including API keys and database credentials.
