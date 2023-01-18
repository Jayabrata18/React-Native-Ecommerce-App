var { expressjwt: jwt } = require("express-jwt");
function authJwt() {
  const secret = process.env.secret;
  return jwt({ secret: "shhhhhhared-secret", algorithms: ["HS256"] })
}

module.exports = authJwt;
