# API-GAS-STATION

This project implements a Node.js API using the NestJS framework to find and list gasoline stations in Spain. The API allows users to search for gas stations by postal code and fuel type, providing detailed information, including the gas station's name, fuel price, complete address, and a Google Maps link.

## Requirements

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Docker
```bash
docker-compose build 
docker-compose up
```

## Installation without Docker

### IInstall Dependencies

```bash
npm install

```
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
