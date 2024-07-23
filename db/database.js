// database connection
const mongoose = require("mongoose");
const { MONGOURI } = require("../helper/config");

exports.DB = async () => {
  await mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// const DB = async () => {
//     await mongoose.connect("mongodb://127.0.0.1:27017/signup", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//   }

//   exports = DB