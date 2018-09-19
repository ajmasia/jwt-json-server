# Protected REST API with json-server and JWT

This project allows us to use an API Rest to develop in the frontend with mock datas before the backend is finished.

## Install

Clone this repo on your machine and before run `npm i` to install all dependences.

To generate database mock data run `npm run mock-data`.

## Start/Stop servers

| Description               | Script             |
| ------------------------- | ------------------ |
| Start server without auth | npm start          |
| Start server with auth    | npm run start-auth |

## Tools

| Description                    | Script            |
| ------------------------------ | ----------------- |
| Generate mock data             | npm run mock-data |
| Generate user hashed passwords | npm run hash      |

[json-server api reference](https://github.com/typicode/json-server)

## Thecnologies used

- [json-server](https://github.com/typicode/json-server)
- [faker.js](https://github.com/marak/Faker.js/)
- [JWT](https://jwt.io/)
- [bcrypt.js](https://github.com/dcodeIO/bcrypt.js/blob/master/README.md)
- [async.js](https://github.com/caolan/async)

---

Inspired in this [post](https://www.techiediaries.com/fake-api-jwt-json-server/) by [Techiediaries](https://www.techiediaries.com/)

This project is licensed under the terms of the [MIT](./license.md) license.
