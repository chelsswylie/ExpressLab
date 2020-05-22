// server.js
const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());
// app.use(express.static(__dirname + "/public"));
app.get("*", routes);
app.put("*", routes);
app.post("*", routes);
app.delete("*", routes);

let port = 3000;
app.listen(port, () => console.log(`Server running on port: ${port}`));

// "use strict";
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const routes = require("./routes");
// const port = 3000;

// app.use(express.static(__dirname + "/public"));
// // Handle incoming request
// app.use("/", routes);

// app.listen(port, () => {
//   console.log(`Server is running: ${port}`);
// });
