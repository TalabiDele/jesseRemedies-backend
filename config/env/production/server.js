module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("URL", "https://jesseremdedies.com.ng"),
  admin: {
    url: env("ADMIN_URL", "/admin"),
    auth: {
      secret: env("ADMIN_JWT_SECRET", "your_admin_jwt_secret"),
    },
  },
  app: {
    keys: env.array("APP_KEYS", ["your_app_key_1", "your_app_key_2"]),
  },
});
