const express = require("express");
const app = express();

app.use("/public", express.static("public"));
app.use("/assets", express.static("public/assets"));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(80, () => {
    console.log("Server running on port: ", 80)
})