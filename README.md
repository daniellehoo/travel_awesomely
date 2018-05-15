# Project 3: Travel App

## Project Description

Title: Travel Awesomely

About: The Travel Awesomely application helps you explore possible travel destinations when you're planning for your next vacation. Search through popular countries and cities to find images, top tourist attractions, and information for your upcoming trip.

## Path CRUD Diagram
![Path CRUD Google Sheet](https://docs.google.com/spreadsheets/d/1DXjV6Aw1ztIcDXv7DRIJroHF-mWKrnI8LHv1lzfLET4/edit?usp=sharing)

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
![Hosted App]()

## Whiteboarding: Wireframes/User Stories and Priority Matrix

![Priority Matrix](https://imgur.com/a/PPCo8H7)
![Landing Page Wireframe](https://res.cloudinary.com/davidclelland/image/upload/v1525697712/1.png)
![Login Wireframe](https://res.cloudinary.com/davidclelland/image/upload/v1525697712/2.png)
![Countries Wireframe](https://res.cloudinary.com/davidclelland/image/upload/v1525697712/3.png)
![Cities Wireframe](https://res.cloudinary.com/davidclelland/image/upload/v1525697712/4.png)
![City Wireframe](https://res.cloudinary.com/davidclelland/image/upload/v1525697712/5.png)

## Slide Deck
![Slide Deck for Initial Presentation ](https://docs.google.com/presentation/d/1R-v0Pl5iMBZyd7Amf7K1P_cbFbJMe1MCyv11gN6jNi4/edit#slide=id.g39bacb983c_0_133)

## External API to be Used

* Triposo API

## Technologies, APIs, and Modules Used

Modules Used:
-Node (a framework for CRUD functionality on a server/database)
-Express (a library used with node.js)
-Body-parser (body-parsing middleware to parse incoming requests)
-Eslint (used for linting//cleaning code)
-Fetch (used to make async fetch requests for incorporating APIs)
-Morgan (an HTTP request logger middlewware for Node.js)
-Path (module that provides a means of working with directories and file paths)
-Bcrypt (secures passwords with hashing functionality)
-dotenv (loads environmental variables)
-React-DOM
-jsonwebtoken

## Travel Application 2.0 Features and Fixes
* TDB

## Instructions for Downloading and Running on Local Host
* TDB

## MVP

* REST API in Express
* Models (four models in the databse)
* CRUD Functionality in React
* CSS and styles
* Authentication//JWT login capabilities

## POST MVP

* Ability for users to save Favorite cities
