const mongoose = require("mongoose");
const validator = require("validator");
const connectionURL = "mongodb://127.0.0.1:27017/diary-app";
const databasename = "diary-app";
mongoose.connect(
  connectionURL,
  { useNewUrlParser: true, useCreateIndex: true },
  (err, client) => {
    if (err) {
      console.log(err);
    }

    //start server
  }
);

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
});
