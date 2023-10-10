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
    salt: env("API_TOKEN_SALT"),
    // salt: randomAsciiString(16),
  },
  auth: {
    secret: env("AUTH_SECRET"),
  },
  transfer: {
    token: {
      salt:
        env("TRANSFER_TOKEN_SALT") || crypto.randomBytes(16).toString("base64"),
    },
  },
});
