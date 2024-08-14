const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Store Service Called");
});

app.listen(3000, () => {
    console.log("Store service is running on port 3000");
})
