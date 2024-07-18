// const parse = require("pg-connection-string").parse;
// const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "0.0.0.0",
      port: "1337",
      database: "FHMl9rdzNVQMCMsH8P8n",
      user: "postgres",
      password: "FHMl9rdzNVQMCMsH8P8n",
      ssl: env.bool(true),
      // host: env("PGHOST", "127.0.0.1"),
      // port: env.int("PGPORT", 5931),
      // database: env("PGDATABASE", "railway"),
      // user: env("PGUSER", "postgres"),
      // password: env("PGPASSWORD", "password"),
      // ssl: env.bool(true),
    },
  },
});
