const express = require("express");
const app = express();
var cors = require('cors');

require('dotenv').config()
const { PORT } = require("./helper/config");
const { DB } = require("./db/database");


app.use(cors())
app.use(express.json());

// import router
app.use("/api", require('./routes/user.routes'))
app.use("/api", require('./routes/category.routes'))
app.use("/api", require('./routes/admin.routes'))
app.use("/api", require ("./routes/product.routes"))
app.use("/api", require ("./routes/dashboard.routes"))
app.use("/api", require ("./routes/setting.routes"))



// Database conncetion
DB()
  .then(() => console.log("Database connect"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log("Server is running", PORT);
});
