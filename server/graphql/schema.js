const { buildSchema } = require("graphql");
const bcrypt = require("bcrypt");

class User {
  constructor({ user_id, user_name, user_email, user_password, profile_pic }) {
    this.user_id = user_id;
    this.user_name = user_name;
    this.user_email = user_email;
    this.user_password = user_password;
    this.profile_pic = profile_pic;
    // this.start_date = start_date;
  }
}

const schema = buildSchema(`
    type User{
        user_id: Int!
        user_name: String!
        user_email: String!
        user_password: String!
        profile_pic: String!
    }
    type Query{
        getUsers: [User]!
    }
`);
const root = {
  getUsers(_, req) {
    return req.app
      .get("db")
      .get_users()
      .then(users => {
        return users.map((e, i) => {
          console.log(e);
          return new User(e);
        });
      });
  }
};
module.exports = {
  root,
  schema
};
