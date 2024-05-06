const express = require("express")
const app = express()
const cors = require("cors")

require("dotenv").config();

//const dotEnv = require("dotenv");
//dotEnv.config()

app.use(express.json())
app.use(cors())
const userRoute = require("./routes/userRoute");
//const blogRoute = require("./routes/blogRoute");
//app.use("/api", blogRoute);
const anotherBlogRoute = require("./routes/anotherBlogRoute");
app.use("/api", anotherBlogRoute);
app.use("/api", userRoute);

app.listen(5050, () => {
    console.log("Server running on port 5050")
})