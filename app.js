express = require('express');
app = express();

app.use((req, res, next) => {
    res.status(200).json({
        message : "Hello World"
    });

});

module.exports = app;