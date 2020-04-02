# Jotter

[![React Version](https://img.shields.io/badge/React-16.13.0-informational)](https://shields.io/) &nbsp; [![MongoDB Version](https://img.shields.io/badge/MongoDB-4.2.3-informational)](https://shields.io/) &nbsp; [![Spring Version](https://img.shields.io/badge/Spring%20Boot-2.2.6-informational)](https://shields.io/) &nbsp; [![Demo status](https://img.shields.io/badge/Live%20demo-up%20to%20date-success)](https://capstone-note-app.firebaseapp.com)

Jotter is a mobile **note taking app** and my final project from the [neuefische bootcamp](https://www.neuefische.de/).

Instead of relying on sorting notes into hierachies, **Jotter** makes heavy use of _taging_ (like Twitter) and _fuzzy searching_.

A live demo is available [here](https://capstone-note-app.firebaseapp.com).

## Available scripts

Clone this repo and run

### `$ npm start`

to test out a version with local storage.

### `$ npm run server:dev`

to start the local development server. You will need **Java 13** and **mongodb** running.

### `$ npm run test`

to run the tests.

### `$ npm run cypress:local`

to start the cypress tests with just local storage. You will need **Java 13** and **mongodb** running.

### `$ npm run cypress:server`

to start the cypress tests with the local test server. You will need **Java 13** and **mongodb** running.
