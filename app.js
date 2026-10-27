const express = require("express");
const session = require("express-session");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const customerRoutes = require("./routes/customerRoutes");

const app = express();
const PORT = 3000;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// SESSION CONFIGURATION
app.use(
  session({
    secret: "lpu-laguna-banking-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

// VIEW ENGINE
app.set("view engine", "ejs");

// ROUTES MAP
app.use("/", authRoutes);
app.use("/admin", adminRoutes);
app.use("/customer", customerRoutes);

// START SERVER
app.listen(PORT, () => {
  console.log(`Online Banking App running at http://localhost:${PORT}`);
});