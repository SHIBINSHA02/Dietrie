const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
app.use(bodyParser.json());

app.use("/auth", authRoutes);


app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}, this is your dashboard.` });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
