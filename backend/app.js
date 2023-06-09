// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();
// WEBSOCKET.IO

// const http = require("http");
// const { Server } = require("socket.io");

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// server.listen(3001, () => {
//   console.log("Server is RUNNING");
// });

// END OF WEBSOCKET IO

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
app.use("/api", require("./routes/index.routes"));
app.use("/auth", require("./routes/auth.routes"));
app.use("/user", require("./routes/user.routes"));
app.use("/wallet", require("./routes/wallet.routes"));
app.use("/skills", require("./routes/skills.routes"));
app.use("/service", require("./routes/service.routes"));
app.use("/request", require("./routes/request.routes"));
app.use("/category", require("./routes/category.routes"));
app.use("/discussion", require("./routes/discussion.routes"));
app.use("/message", require("./routes/message.routes"));
app.use("/commentary", require("./routes/commentary.routes"));
app.use("/current-mission", require("./routes/currentMission.routes"));
app.use("/product", require("./routes/product.routes"));
app.use("/cart", require("./routes/cart.routes"));
app.use("/current-product", require("./routes/currentProduct.routes"));

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
