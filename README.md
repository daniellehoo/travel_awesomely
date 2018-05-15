# Project 3: Travel App

## Project Description

Title: Travel Awesomely

About: The Travel Awesomely application helps you explore possible travel destinations when you're planning for your next vacation. Search through popular countries and cities to find images, top tourist attractions, and information for your upcoming trip.

## Path CRUD Diagram
![Path CRUD Google Sheet](https://docs.google.com/spreadsheets/d/1DXjV6Aw1ztIcDXv7DRIJroHF-mWKrnI8LHv1lzfLET4/edit?usp=sharing)

## React Diagram
![React Diagram](https://res.cloudinary.com/davidclelland/image/upload/v1526422136/IMG_0807.jpg)

## ERD

![ERD](https://imgur.com/a/nzttU1P)

Tables:
1. Destinations (Countries)
id - primary key
name - varchar
img_url - varchar

2. Cities
id - primary key
name - varchar
country - foreign key (country id)
img_url

3. Comments
id - primary key
city_id - foreign key (city id)
user_id - foreign key (user id)

4. Users
id - primary key
username - varchar
password - varchar

## Application Components

Landing/home page
Countries list
Individual country pages
Individual city pages
Login/authentication (JWT)
Logout
CRUD(create, read, update, delete) functionality in React
Express/Node

## Deployed App
![Hosted App](https://travel-awesomely.herokuapp.com/cities/25?)

## Whiteboarding: Wireframes/User Stories and Priority Matrix

![Priority Matrix](https://imgur.com/a/PPCo8H7)
![Landing Page Wireframe](https://res.cloudinary.com/davidclelland/image/upload/v1525697712/1.png)
![Login Wireframe](https://res.cloudinary.com/davidclelland/image/upload/v1525697712/2.png)
![Countries Wireframe](https://res.cloudinary.com/davidclelland/image/upload/v1525697712/3.png)
![Cities Wireframe](https://res.cloudinary.com/davidclelland/image/upload/v1525697712/4.png)
![City Wireframe](https://res.cloudinary.com/davidclelland/image/upload/v1525697712/5.png)

## Slide Deck
![Slide Deck for Initial Presentation ](https://docs.google.com/presentation/d/1R-v0Pl5iMBZyd7Amf7K1P_cbFbJMe1MCyv11gN6jNi4/edit#slide=id.g39bacb983c_0_133)

## External API

* Triposo API

## Technologies, APIs, and Modules Used

Modules Used:
-Node (a framework for CRUD functionality on a server/database)
-Nodemon (server monitor for node.js)
-Express (a library used with node.js)
-Body-parser (body-parsing middleware to parse incoming requests)
-Eslint (used for linting//cleaning code)
-Fetch (used to make async fetch requests for incorporating APIs)
-Morgan (an HTTP request logger middlewware for Node.js)
-Path (module that provides a means of working with directories and file paths)
-Bcrypt (secures passwords with hashing functionality)
-dotenv (loads environmental variables)
-React-DOM (package that serves as the entry point of the DOM-related rendering paths)
-React-Router (declarative routing for React)
-Bulma (a CSS framework on Flexbox)
-Concurrently (enables proxy server w/ front and backend to run concurrently)

## Travel Awesomely 2.0 Features and Fixes
* Auth/Tokens
* Additional Cities

## Instructions for Downloading and Running on Local Host
* Step 1: Fork and clone the following git repo: https://git.generalassemb.ly/WhiskyTangoFoxtrot/project-3/
* Step 2: CD into the DB file of the root directory
* Step 3: In terminal use the following command: createdb travel_db
* Step 4: In terminal use the following command: psql -d travel_db -f db/schema.sql
* Step 5: In terminal use the following command: yarn init -y
* Step 6: In terminal use the following command: yarn i
* Step 7: In terminal use the following command: yarn dev
* Step 8: In browser: open http://localhost:3000/
* Step 9: Begin exploring Travel Awesomely!

## MVP

* REST API in Express
* Models (four models in the database)
* CRUD Functionality in React
* CSS and styles

## POST MVP

* Authentication//JWT login capabilities
* Ability for users to save Favorite cities
