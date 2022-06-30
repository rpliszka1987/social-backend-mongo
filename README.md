# Social Media Backend MongoDB

## Table of Content

- [Description](#description)
- [Installation](#installation)
- [Start Application](#start-application)
- [Models](#models)
- [Routes](#routes)
- [Video](#video)

## Description

This is an application which demonstrates using Express.js with Mongoose, which allows you to create a backend which saves information into a MongoDB database. MongoDB is a NoSQL database structure which is very different from SQL. In this project I will be creating a connection between the MongoDB and API routes. You are able to to perform CRUD (**C**reate, **R**ead, **U**pdate, and **D**elete) data from the database. Testing the API routes will be done using Insomnia.

## Installation

- After cloning the application from GitHub repository you need to install all the npm packages. This will install all the needed packages for the application.
  Run

```
$ npm install
```

- To view installed NPM Packages visit `package.json`.
- Make sure you have Insomnia installed on your machine to perform API routes tests (https://insomnia.rest/).

## Start Application

- Starting the application is very easy. All you need to do is start the Express server which is done using `$ npm start`.
- Once the server is runing you will get a message in the console. `Connected on localhost:3001`

## Models

- This application is made up of two models:
  1. User model
  - username, email, thoughts, and friends
  2. Thought model
  - thoughtText, createdAt, usernam, and reactions
- Both models are located in the `/models` directory.

## Routes

- API routes in this application are as follows:
  - `/api/users` this will route to all User where:
    - `GET` Gets all Users
    - `POST` Creates a new User
    - `PUT` Updates User data
    - `DELETE` Deletes a User
  - `/api/thoughts` this will route to all the Thoughs where:
    - `GET` Gets all Users
    - `POST` Creates a new User
    - `PUT` Updates User data
    - `DELETE` Deletes a User

## Video

https://drive.google.com/file/d/1BszmZkwpxc57HzHvUgoprcQdJkiSOnOc/view

[Back to Top](#social-media-backend-mongodb)
