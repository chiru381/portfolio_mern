const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("server connected");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`running on port ${PORT}`);
});