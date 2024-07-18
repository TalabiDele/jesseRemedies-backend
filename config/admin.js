// var crypto = require("crypto");

// /** Sync */
// function randomString(length, chars) {
//   if (!chars) {
//     throw new Error("Argument 'chars' is undefined");
//   }

//   const charsLength = chars.length;
//   if (charsLength > 256) {
//     throw new Error(
//       "Argument 'chars' should not have more than 256 characters" +
//         ", otherwise unpredictability will be broken"
//     );
//   }

//   const randomBytes = crypto.randomBytes(length);
//   let result = new Array(length);

//   let cursor = 0;
//   for (let i = 0; i < length; i++) {
//     cursor += randomBytes[i];
//     result[i] = chars[cursor % charsLength];
//   }

//   return result.join("");
// }

// function randomAsciiString(length) {
//   return randomString(
//     length,
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
//   );
// }
const crypto = require("crypto");

module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    // salt: env("API_TOKEN_SALT"),
    salt: "1378a10a64be2813eb7cedb153c1f48b04712d5317a88c8cb19f270b0d344be99dfa3998095a6f5ca21f18dda552f385a200510f3851938d1dda67676f35757b37c3ad9f4a5c0a47f76e42cebc588eebecbb1d086e174a76518a4c8294c66800c32b0b62acd6128af4fadacf65e2ae9a5b9716e619b8bc0b584bc05338d274a6",
    // salt: randomAsciiString(16),
  },
  auth: {
    // secret: env("AUTH_SECRET"),
    secret:
      "2544e66ca1658036a60ba60309590787a40b808166fbcdc975e7afe3ee6212f95f8843b1333f5124a3401cf7c9e50687d73ce118279e0692615efb50b31bc16e6ef8f3146ea6df9cb9a90c640abbd5fa4b5682ea09a969f38751a2bcbc7aa5f087a6c90d58fa54206da7bdbd2d2e4d1b86dc8961c73c85296b19232d141c2c7c",
  },
  transfer: {
    token: {
      salt:
        env("TRANSFER_TOKEN_SALT") || crypto.randomBytes(16).toString("base64"),
    },
  },
});
