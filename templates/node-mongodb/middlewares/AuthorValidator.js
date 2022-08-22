const { body } = require("express-validator");
const { Author } = require("../models");

class AuthorValidator {
  static validate() {
    return [
      body("name").notEmpty(),
      body("name").custom(async (value) => {
        const user = await Author.findOne({ name: value }).exec({
          name: value,
        });
        if (user) {
          return Promise.reject("Name already in use");
        }
      }),
    ];
  }
}

module.exports = AuthorValidator;
