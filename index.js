const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db/sequelize.js');
const connectionInit = require("./db/init.js")

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`)
    connectionInit().then(_ =>
		sequelize
			.sync({ alter: false, force: false })
			.then(result => {
                console.log(result)
            }))
			.catch(e => console.log(e))
});