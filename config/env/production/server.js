module.exports = ({ env }) => ({
  proxy: true,
  url: env("URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
