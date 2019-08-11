const express = require("express");
const app = express();

app.use(express.static("public"));

const PORT = process.env | 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
})