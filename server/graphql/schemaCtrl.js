const bcrypt = require("bcrypt");
class User {
  constructor({
    user_id,
    user_name,
    user_email,
    user_password,
    profile_pic,
    current_lesson,
    progress_bar,
    start_date,
    coding_background,
    purpose
  }) {
    this.user_id = user_id;
    this.user_name = user_name;
    this.user_email = user_email;
    this.user_password = user_password;
    this.profile_pic = profile_pic;
    this.current_lesson = current_lesson;
    this.progress_bar = progress_bar;
    this.start_date = start_date;
    this.purpose = purpose;
    this.coding_background = coding_background;
  }
}
function getUsers(_, req) {
  return req.app
    .get("db")
    .get_users()
    .then(users => {
      return users.map((e, i) => {
        return new User(e);
      });
    });
}
function getUser({ id }, req) {
  return req.app
    .get("db")
    .get_users()
    .then(users => {
      return users.filter(e => {
        return e.user_id === id;
      })[0];
    });
}
function addUser({ user_name, user_email, user_password }, req) {
  console.log(user_name, user_email, user_password);
  const start_date = new Date();
  return req.app
    .get("db")
    .add_user([user_name, user_email, user_password, start_date])
    .then(user => {
      console.log(user);
      return new User(user[0]);
    });
}
module.exports = {
  getUsers,
  getUser,
  addUser
};
