<h1 align="center">
<br>
  <img src="src/assets/images/logo-interna.svg" alt="GoBarber" width="90">
<br>
<br>
GoBarber
</h1>

<p align="center">An app for barber appointment and scheduling.</p>

<p align="center">
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License MIT">
  </a>
</p>

<hr />

## Usage

The first step is to create your account, then you can login and choose a barber, check his schedule and make an appointment.

## Technologies

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Express-Session](https://www.npmjs.com/package/express-session/)
- [Sequelize](http://docs.sequelizejs.com/)
- [Postgres](https://www.postgresql.org/)
- [Bcrypt](https://www.npmjs.com/package/bcryptjs/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Multer](https://github.com/expressjs/multer/)
- [Moment.JS](https://momentjs.com/)
- [Connect-Loki](https://www.npmjs.com/package/connect-loki/)
- [Connect-Flash](https://github.com/jaredhanson/connect-flash/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Eslint-Airbnb](https://eslint.org/)
- [Nodemon](https://nodemon.io/)

## Installation

Clone the project with

```sh
git clone https://github.com/carvalhobfr/gobarber.git
```

Get in the path project, then install the dependencies with:

```sh
yarn
```

Then, you have to create your postgres database (Or another if you want) and fill your own fields in .env file.

Now, you have to create tables with the command:

```sh
npx sequelize db:migrate
```

After database config, you can start the server with:

```sh
yarn start
```

If you are in development environment, you can use the development server:

```sh
yarn dev
```


## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Created by:

Matheus Carvalho – [@Matheus](https://www.linkedin.com/in/matheusrcarvalho/) 
