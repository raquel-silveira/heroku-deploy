const express = require('express');

const app = express();

app.get("/", (req, res) => {
    return res.send("oi");
})

app.listen(process.env.PORT || 3333, () => {
    console.log("server is running");
});