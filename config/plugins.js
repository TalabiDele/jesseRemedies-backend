module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "dgpmkbwne",
        api_key: "852977784356651",
        api_secret: "2_o4cWiybJG5eiBfd7IEZqE6oUs",
        // cloud_name: env("CLOUDINARY_NAME"),
        // api_key: env("CLOUDINARY_KEY"),
        // api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },

  "strapi-stripe": {
    enabled: true,
    config: {
      stripeSandBoxUrl: env("STRAPI_ADMIN_TEST_STRIPE_SECRET_KEY"),
      paypalLiveUrl: env("STRAPI_ADMIN_LIVE_STRIPE_SECRET_KEY"),
    },
  },
  // ...
});
